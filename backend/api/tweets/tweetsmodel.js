const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//let Post = null

const TweetsSchema = new Schema({
  timestamp: Number,
  author: String,
  tweet: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  postConfirmed: {
    type: Boolean,
    default: false
  }
});

Tweet = mongoose.model('Tweet', TweetsSchema)
module.exports = Tweet



