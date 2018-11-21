

function createPost(state, payload, blockInfo, context) {
  const post = {
   
    timestamp: payload.data.timestamp,
    author: payload.data.author,
    tweet: payload.data.tweet,
     comments:[],
     postConfirmed:true,
     likes:0
    
  }
 // context.socket.emit('createpost', post)
}

module.exports = createPost
 