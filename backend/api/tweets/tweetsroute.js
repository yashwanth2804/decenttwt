const express = require('express')
const tweetscontroller = require('./tweetscontroller')
const mongoose = require ('mongoose')

var mongoDB = 'mongodb://127.0.0.1/Tweetdatabase';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const tweetrouter = express.Router()

var bodyParser = require('body-parser')
tweetrouter.use( bodyParser.json() );       // to support JSON-encoded bodies
tweetrouter.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
tweetrouter.route('/').get(tweetscontroller.getTweets);
tweetrouter.route('/search/:searchtxt').get(tweetscontroller.getSearchTweets);
 

// tweetrouter.route('/like').get(tweetscontroller.postLikes);

module.exports = tweetrouter