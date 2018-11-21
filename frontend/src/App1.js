import React, { Component } from 'react';
import axios from 'axios';
import EOSIOClient from './utils/eosio-client';
//import IOClient from './utils/io-client';

import { Input, Menu, Container, Header, Divider, Grid, Label } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Tweets from './components/Tweets';
import Createtweet from './components/Createtweet';
require('dotenv').config({ path: 'frontend/.env' })
//frontend/.env
class App extends Component {
  state = {

    tweets: []
  }



  setEnv = async () => {
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    const contractAccount = process.env.REACT_APP_EOSIO_CONTRACT_ACCOUNT;
    console.log("ctr account")
    console.log(contractAccount)
    this.eosio = new EOSIOClient(contractAccount)
   // this.io = new IOClient()
  }

  // Enable Realtime updates via Socket.io
  async componentDidMount() {
    this.setEnv();
    this.loadtweets();

    // this.io.onMessage('createpost', (post) => {

    //   const updatePostsForCreateAndEdit = (prevState, updatedPost) => {
        
    //     let updatedPosts = prevState.tweets.map(post1 => {

    //       if ((post1.timestamp !== updatedPost.timestamp) && (post1.author !== updatedPost.author)) {
            
    //         return post
    //       }
    //      return post1;
    //     })
 
    //       updatedPosts = [{ ...updatedPost }, ...updatedPosts]
        
    //     return updatedPosts
    //   }

    //   this.setState((prevState) => ({ tweets: updatePostsForCreateAndEdit(prevState, post) }))
     
 



    // });

    // this.io.onMessage('likepost', (post) => {

    //   const updatePostsForCreateAndEdit = (prevState, updatedPost) => {
    //     let alreadyAdded = false
    //     let updatedPosts = prevState.tweets.map(post => {

    //       if ((post.timestamp === updatedPost.timestamp) && (post.author === updatedPost.author)) {
    //         return { ...post, likes: post.likes + 1 }

    //       }
    //       return post
    //     })


    //     return updatedPosts
    //   }

    //   this.setState((prevState) => ({ tweets: updatePostsForCreateAndEdit(prevState, post) }))

    // });

    // this.io.onMessage('commentpost', (post) => {

    //   const updatePostsForCreateAndEdit = (prevState, updatedPost) => {
        
    //     let updatedPosts = prevState.tweets.map(post1 => {
          
    //       const t = Object.keys(post1.comments).length;
    //       if ((post1._id !== updatedPost.postid)  && (post1.comments !== updatedPost.comment )) {
            
    //         if(t == 0 ){
    //           console.log(" cmt length is 0 ")
    //           return { ...post }
              
    //       }
    //         else{
    //           console.log(" cmt length is not 0 ")
    //         return { ...post, comments: [post1.comments,post.comment] }
    //         }
            
    //       }
    //      return post1;
    //     })
 
    //   //  updatedPosts = [{ ...updatedPost }, ...updatedPosts]
        
    //     return updatedPosts
    //   }
      
    //   this.setState((prevState) => ({ tweets: updatePostsForCreateAndEdit(prevState, post) }))
      
    // });

  }


  ///async function createPost
  createPost = async (tweet) => {

    console.log(tweet);
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%")
    const obj = {
      timestamp: Math.floor(Date.now() / 1000),
      author: process.env.REACT_APP_EOSIO_ACCOUNT,
      tweet: tweet

    }

    await this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'createpost', {

        ...obj
      }
    ).then(function (value) {
      console.log(value);
      return value;
    }).catch(function (e) {
      console.log(e);
    })



  }



  ////post comments 
  postComment = async (id, comment) => {

    console.log(comment);
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%")
    const obj = {
      timestamp: Math.floor(Date.now() / 1000),
      author: process.env.REACT_APP_EOSIO_ACCOUNT,
      comment:  comment ,
      postid: id

    }

    await this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'commentpost', {

        ...obj
      }
    ).then(function (value) {
      console.log(value);
      
      return value;
    }).catch(function (e) {
      console.log(e);
    })


     


     const updatePostsForCreateAndEdit = (prevState, updatedPost) => {
        
        let updatedPosts = prevState.tweets.map(post1 => {
          //  console.log(post1._id + " "+ updatedPost.postid)
          if ((post1._id == updatedPost.postid)  ) {
           console.log(updatedPost.postid,updatedPost.comment) 
            console.log("new comment")
            console.log({...updatedPost})
            //console.log({...post1,comments: { ...post1.comments, ...updatedPost}})
            console.log([{ ...post1.comments },{ ...updatedPost }])
            console.log("abv")
            return  {...post1,comments: [ ...post1.comments ,{ 

              _id:Math.random(),
              author:updatedPost.author,
              comment:updatedPost.comment
               
            }] }
            
          }else 
           return post1
         
        })
 
    //  updatedPosts = [{ ...updatedPost }, ...updatedPosts]
        
        return updatedPosts
      }
      
      this.setState((prevState) => ({ tweets: updatePostsForCreateAndEdit(prevState, obj) }))
      console.log(this.state.tweets)
  }

  ////hit likes 
  hitlike = async (id, author, timestamp) => {

    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%" + id)
    const obj = {
      timestamp: timestamp,
      author: author,
      postid: id

    }

    await this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'likepost', {

        ...obj
      }
    ).then(function (value) {
      console.log(value);
      return value;
    }).catch(function (e) {
      console.log(e);
    })

  }


  // Load tweets
  loadtweets = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/tweets`)
    console.log("ssssssssssss")
    console.log(response.data)
    console.log("ssssssssssss")
    this.setState({ tweets: response.data.reverse() })
    console.log(this.state.tweets)
  }

  render() {

    return (
      <div className="App">
        <Menu secondary>
          <Menu.Item name='home' active={true} />


          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={true}

            />
          </Menu.Menu>
        </Menu>

        <Container  >


          <Label as='a' size={"huge"} color='red' tag>
            decentTweeteR
 </Label>


          <Createtweet createpostFn={this.createPost} />

          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Tweets tweetsP={this.state.tweets} postCommentFun={this.postComment} hitLikeFun={this.hitlike} />
              </Grid.Column>

            </Grid.Row>
          </Grid>



        </Container>

      </div>
    );
  }
}

export default App;
