import axios from 'axios';
import EOSIOClient from '../utils/eosio-client';

const setEnv = async () => {
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    const contractAccount = process.env.REACT_APP_EOSIO_CONTRACT_ACCOUNT;
    console.log("ctr account")
    console.log(contractAccount)
    this.eosio = new EOSIOClient(contractAccount)
   // this.io = new IOClient()
   // modified
  }

////post comments 
export const postComment =  (id, comment) => {

  return(dispatch) => {
      setEnv();
    console.log(comment);
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%")
    const obj = {
      timestamp: Math.floor(Date.now() / 1000),
      author: process.env.REACT_APP_EOSIO_ACCOUNT,
      comment:  comment ,
      postid: id

    }

      this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'commentpost', {

        ...obj
      }
    ).then(function (value) {
      console.log(value);
      
      return value;
    }).catch(function (e) {
      console.log(e);
    })

    dispatch({type:"COMMENT",payload:obj});

  }
 
  }


export const  tweetsFetchAPI = (url) => {
    console.log(url);
    return (dispatch) => {

        axios
        .get(
            url
        )
        
        .then(res => dispatch(
            
            { type: 'LOAD_TWEETS', newTweets: res }
        ))
        .catch(error => console.log("errrrr"));;

      
    }
}; 

  ////hit likes 
 export const hitlike =   (id, author, timestamp) => {

     //redux thunk
 return(dispatch) =>{
     setEnv();
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    console.log("%%%%%%%%%%%%" + id)
    const obj = {
      timestamp: timestamp,
      author: author,
      postid: id

    }

      this.eosio.transaction(
      process.env.REACT_APP_EOSIO_ACCOUNT,
      'likepost', {

        ...obj
      }
    ).then(function (value) {
        console.log("Sucessfil like ")
      console.log(value);
      return value;
    }).catch(function (e) {
      console.log(e);
    });

 
   dispatch({type:"LIKE",id:id,author:author,timestamp:timestamp});
}

  };

//   ////hit likes 
//  export const hitlike = async (id, author, timestamp) => {

//     console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
//     console.log("%%%%%%%%%%%%" + id)
//     const obj = {
//       timestamp: timestamp,
//       author: author,
//       postid: id

//     }

//     await this.eosio.transaction(
//       process.env.REACT_APP_EOSIO_ACCOUNT,
//       'likepost', {

//         ...obj
//       }
//     ).then(function (value) {
//       console.log(value);
//       return value;
//     }).catch(function (e) {
//       console.log(e);
//     })

//   }