async function createPost(state, payload, blockInfo, context) {
  const Post = state.tweet
  try {
    let tweet = await Post.find(
      {
        timestamp: payload.data.timestamp
      }
    ).exec()

    // if post already exists do not insert it in again
    if (tweet.length !== 0) return
console.log(payload.data)
    tweet = new Post(
      {
        timestamp: payload.data.timestamp,
        author: payload.data.author,
        tweet: payload.data.tweet,
        
        comments: [],
        postConfirmed: true
      }
    )
    await tweet.save()
    console.log("saveeeeed")
  } catch (err) {
    console.error(err)
  }
}

module.exports = createPost
