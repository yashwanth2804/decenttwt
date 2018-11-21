const createPost = require('./createpost')
const commentPost = require('./commentpost')
const likePost = require('./likepost')
const account = process.env.EOSIO_CONTRACT_ACCOUNT

module.exports = [
  {
    actionType: `${account}::createpost`, // account::action name
    updater: createPost
  },
  {
    actionType: `${account}::commentpost`, // account::action name
    updater: commentPost
  },
  {
    actionType: `${account}::likepost`, // account::action name
    updater: likePost
  }
]
