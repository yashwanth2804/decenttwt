import React, { Component } from 'react';
import * as actionCreators from '../actions/index';
import { connect } from 'react-redux';
import ModelCtr from './ModelCtr';
import { Input, Menu, Container, Header, Divider, Grid, Label,Feed,Button,Form,Icon ,TextArea} from 'semantic-ui-react'
class PostCmt extends Component {
 
    state = {
        commentST:''
    }
   
    handleOnchange = (e) =>{
        //this.state.commentST(e.target.value);
       this.setState({commentST:e.target.value})
        
    }
 
    

    handleSubmitnew = (id,cmt) => {
         
        
        this.setState({
            commentST:''
        } )
         console.log(id,cmt)
       this.props.handleSubmit(id,cmt);
      } 

    render() {
     return (
            
            <div>
        
            <Grid>
            <Grid.Column floated='left' width={16}>
              <Form>
              {/*<Form.TextArea  value={ this.props.commentST } onChange={  this.handleOnchange }     label='About' placeholder='Share a comment...' />*/}

              {/*<TextArea defaultValue = {this.state.commentST}  onChange= {(e) => this.handleOnchange(e)}     label='About' placeholder='Share a comment...' />*/}
              <TextArea
              value={this.state.commentST}
              onChange={event => this.handleOnchange(event)}
          />
              </Form>
            </Grid.Column>
      
          </Grid>
            <Button  onClick={() => {this.handleSubmitnew(this.props.id,this.state.commentST)}}  inverted color='orange' size='mini' >Post Comment</Button>
      
            </div>
        );
    }
}
 

 
  
  const mapDispathToProps = (dispatch) => {
  
    
    return ({
       
        handleSubmit: (id,cmt) => {   dispatch(actionCreators.postComment(id,cmt)) }
      
       
  
    });
  }
export default connect(null, mapDispathToProps)(PostCmt);
 
