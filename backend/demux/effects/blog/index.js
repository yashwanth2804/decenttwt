const createPost = require('./createpost')
const commentPost = require('./commentpost')
const likePost = require('./likepost')
const account = process.env.EOSIO_CONTRACT_ACCOUNT

module.exports = [
  // {
  //   actionType: `${account}::createpost`, // account::action name
  //   effect: createPost
  // },
  // {
  //   actionType: `${account}::commentpost`, // account::action name
  //   effect: commentPost
  // } ,
  // {
  //   actionType: `${account}::likepost`, // account::action name
  //   effect: likePost
  // }
]
