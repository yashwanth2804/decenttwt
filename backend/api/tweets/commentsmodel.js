const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
 
 
const CommentsSchema = new Schema({
   // _id: new Schema.Types.ObjectId,
   // postId: Schema.Types.ObjectId,
   timestamp: Number,
   author: String,
   comment: String
        
})
Comment = mongoose.model('Comment', CommentsSchema)
module.exports = Comment
  
 







