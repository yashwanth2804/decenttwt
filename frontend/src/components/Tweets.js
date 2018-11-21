import React, { Component } from 'react'
import { Icon, Feed, Grid, Label, Image, Button, Divider, Form } from 'semantic-ui-react'
import ModelCtr from './ModelCtr'
import Postcomment from './Postcomment'


export default class Tweets extends Component {
 
  state = {
    commentST : ''
  }
  
handleOnchange = (e) =>{
  this.setState({commentST:e.target.value});
}

getIdandComment = (id,cmt) => {
  this.props.postCommentFun(id,cmt);
  console.log(id+cmt);
}

hit = (id,author,timestamp) => {
  this.props.hitLikeFun(id,author,timestamp);
}
  
  render() {
    
 const y = this.props.tweetsP.map( (data, idx) => {
   
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
 
          <Postcomment  id={data._id} getIdandCommentFun= {this.getIdandComment}   />  
 
          <Button  onClick={() => {this.hit(data._id,data.author,data.timestamp)}} inverted color='blue' size='mini' ><Icon name="like" />{data.likes}</Button>

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
      {
       y
        
      }
      </div>
    )
  }
}


