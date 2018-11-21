import React, { Component } from 'react';
import * as actionCreators from '../actions/index';
import { connect } from 'react-redux';
import ModelCtr from './ModelCtr';
import { Input, Menu, Container, Header, Divider, Grid, Label,Feed,Button,Form,Icon } from 'semantic-ui-react'
import PostCmt from './PostCmt';
class Tweet extends Component {

       

    render() {

        const y = this.props.tweets.map( (data, idx) => {
   
            return(
               
          
              <Grid.Row centered={true} key={idx}  >
              <Feed>
                <Feed.Event>
                  <Feed.Label image='/images/avatar/small/joe.jpg' />
                  <Feed.Content>
                    <Feed.Summary>
                      <a>{data.author}</a> posted on his page
                         <Feed.Date>{data.timestamp} </Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      {data.tweet}
                    </Feed.Extra>
           
                    <PostCmt  id={data._id} />  
           
                    <Button  onClick={() => {this.props.hit(data._id,data.author,data.timestamp)}} inverted color='blue' size='mini' ><Icon name="like" />{data.likes}</Button>
          
                    <Label color={"red"}>
                      <Icon name='comments' /> {
                          
                        (data.comments == null) ? ("0"): (Object.keys(data.comments).length)
                         }
                    </Label>
                    { 
                      (data.comments === null) ? ( <ModelCtr show={true}/>): ( <ModelCtr comments = {data.comments} show={false}/>)
                     }
                  
                    
                  </Feed.Content>
                </Feed.Event>
              </Feed>
          
              <Form>
          
              </Form>
          
            </Grid.Row>
          
            )
          
          });
        
          
        return (
            
            <div>
            {y}
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return (
        {
            tweets: state.tweetR.tweets
        }
    )
  
  }
  
  const mapDispathToProps = (dispatch) => {
    
    return ({
       
        hit: (id, author, timestamp) => { dispatch(actionCreators.hitlike(id, author, timestamp)) },
       
  
    });
  }
export default connect(mapStateToProps, mapDispathToProps)(Tweet);
 
