
function likePost (state, payload, blockInfo, context) {
    const like = {
      
        timestamp: payload.data.timestamp,
        author: payload.data.author,
        postid:payload.data.postid
      
    }
  //  context.socket.emit('likepost', like)
  }
  
  module.exports = likePost