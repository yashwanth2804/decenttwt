const express = require('express')
const userscontroller = require('./tweetscontroller')
const mongoose = require ('mongoose')

const usersrouter = express.Router()


var bodyParser = require('body-parser')
usersrouter.use( bodyParser.json() );       // to support JSON-encoded bodies
usersrouter.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// router.route('/posts').get(postController.listConfirmed);
// router.route('/users').get(postController.getUsers);
 
module.exports = usersrouter