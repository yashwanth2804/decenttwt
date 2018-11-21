const Tweet = require('./tweetsmodel')


/**
* Get list of all posts confirmed by the blockchain
* @returns {Tweet[]}
*/


const getSearchTweets = async (req, res) => {
  try {
    console.log(req.params.searchtxt)
  const confirmedPosts = await Tweet.find({tweet:{ '$regex' : req.params.searchtxt, '$options' : 'i' }}).populate('comments').exec()
    res.send(confirmedPosts)
    console.log("confirmed")
  } catch (err) {
    console.error(res)
  }
}

// const postComments = async (req, res) => {
    
//       const confirmedPosts = await Comment.find({}).populate('comments')
//   .exec(function(err, postres) {
//        console.log(postres)
//        res.send(confirmedPosts) 
//   });
// }

const getTweets = async (req, res) => {
   try {
      const confirmedPosts = await Tweet.find({}).populate('comments').exec()
      res.send(confirmedPosts)
    } catch (err) {
      console.error(err)
    }
  }


module.exports = { getSearchTweets,getTweets}
