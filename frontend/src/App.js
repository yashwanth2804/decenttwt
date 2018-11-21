import React, { Component } from 'react';
 
import { connect } from 'react-redux';

import * as actionCreators from './actions/index';
import EOSIOClient from './utils/eosio-client';

import 'semantic-ui-css/semantic.min.css';
import Tweet from './components/Tweet';
require('dotenv').config({ path: 'frontend/.env' })

class App extends Component {
 
  setEnv = async () => {
    console.log(process.env.REACT_APP_EOSIO_ACCOUNT)
    const contractAccount = process.env.REACT_APP_EOSIO_CONTRACT_ACCOUNT;
    console.log("ctr account")
    console.log(contractAccount)
    this.eosio = new EOSIOClient(contractAccount)
   // this.io = new IOClient()
  }


  async componentDidMount() {
    await this.setEnv();
    const uri = `${process.env.REACT_APP_API_URL}/tweets`;
    // this.props.dispatch(actionCreators.phoneFetchAPI(uri));
    console.log("component dispatch")
    this.props.onLoad(uri);
  }

  render() {
    return (
      <div > 
      <Tweet/>
      </div>
    );
  }

}
const mapDispathToProps = (dispatch) => {
  return ({
    //  byNow: (pId) => { dispatch(actionCreators.buyNow(pId)) },
    onLoad: (uri) => { dispatch(actionCreators.tweetsFetchAPI(uri)) }

  });
}
export default connect(null, mapDispathToProps)(App);
