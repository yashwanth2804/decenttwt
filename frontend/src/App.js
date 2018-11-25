import React, { Component } from 'react';
 
import { connect } from 'react-redux';

import * as actionCreators from './actions/index';
import EOSIOClient from './utils/eosio-client';
import { Input, Menu, Container, Header, Divider, Grid, Label,Feed,Button,Form,Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Tweet from './components/Tweet';
import Createtweet from './components/Createtweet';

require('dotenv').config({ path: 'frontend/.env' });


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
      <Menu pointing secondary>
      <Menu.Item name='home'  onClick={this.handleItemClick} />
    
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item
          name='logout'
         
        />
      </Menu.Menu>
    </Menu>
      <Container>
      <Createtweet/>
      <br/>
      <Tweet/>
      </Container>
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
