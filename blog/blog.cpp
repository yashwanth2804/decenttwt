#include <eosiolib/eosio.hpp> 
 #include <eosiolib/print.hpp> 
 using namespace eosio; 
 using namespace std;

class blog : public contract
{
    using contract::contract;

  public:
    explicit blog(account_name self) : contract(self) {}

    [[eosio::action]]
    void createpost(const uint64_t timestamp,const account_name author,const string &tweet)
    {
         require_auth(author);
        uint128_t skey = static_cast<uint128_t>(author) << 64 | timestamp;
        tweet_table tweetstable(_self, _self); // code, scope
        tweetstable.emplace(author, [&](auto &post) {
            post.pkey = tweetstable.available_primary_key();
            post.skey = skey;
            post.author = author;
        });
         }


 [[eosio::action]]
void likepost(const uint64_t timestamp , const account_name author,const string &postid)
{

 tweet_table tweetstable(_self, _self);

    auto posts = tweetstable.get_index<N(getbyskey)>();
    uint128_t skey = static_cast<uint128_t>(author) << 64 | timestamp; 
    print(skey);
    auto post = posts.find(skey);

    eosio_assert(post != posts.end(), "Post for hash not found");
  }


 [[eosio::action]]
void commentpost(const uint64_t timestamp , const account_name author,const string &comment,const string &postid)
  {
    comment_table commenttable(_self, _self);
    
    uint128_t skey = static_cast<uint128_t>(author) << 64 | timestamp; 
 
    commenttable.emplace(author, [&](auto &commentp) {
            commentp.pkey = commenttable.available_primary_key();
            commentp.skey = skey;
            commentp.author = author;
        });    
  }


 
  private:
    struct [[eosio::table]] tweet_struct
    {
        uint64_t pkey;
        uint64_t author;
        uint128_t skey;

        uint64_t primary_key() const { return pkey; }
        uint128_t get_by_skey() const { return skey; }
        EOSLIB_SERIALIZE(tweet_struct, (pkey)(author)(skey))
    };
 struct [[eosio::table]] comment_struct
    {
        uint64_t pkey;
        uint64_t author;
        uint128_t skey;

        uint64_t primary_key() const { return pkey; }
        uint128_t get_by_skey() const { return skey; }
        EOSLIB_SERIALIZE(comment_struct, (pkey)(author)(skey))
    };
    //  struct [[eosio::table]] like_struct
    // {
    //     uint64_t pkey;
    //     uint64_t author;
    //     uint128_t skey;

    //     uint64_t primary_key() const { return pkey; }
    //     uint128_t get_by_skey() const { return skey; }
    //     EOSLIB_SERIALIZE(like_struct, (pkey)(author)(skey))
    // };


    typedef eosio::multi_index<N(posts), tweet_struct,
                               indexed_by<N(getbyskey), const_mem_fun<tweet_struct, uint128_t, &tweet_struct::get_by_skey>>>
        tweet_table;

typedef eosio::multi_index<N(comments), comment_struct,
                               indexed_by<N(getbyskey), const_mem_fun<comment_struct, uint128_t, &comment_struct::get_by_skey>>>
        comment_table;


};

EOSIO_ABI(blog, (createpost)(commentpost)(likepost))
