function commentPost(state, payload, blockInfo, context) {
    const post = {
    
   // _id: new Schema.Types.ObjectId,
    timestamp:payload.data.timestamp,
    author: payload.data.author,
    comment: payload.data.comment,
    postid:payload.data.postid
    }
    context.socket.emit('commentpost', post)
  }
   
  module.exports = commentPost
    