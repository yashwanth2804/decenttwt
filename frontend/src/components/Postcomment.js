import React, { PureComponent } from 'react'
import { Icon, Feed, Grid, Label, Image, Button, Divider, Form } from 'semantic-ui-react'

export default class Postcomment extends PureComponent {
  
    state = {
        commentST:''
    }
    handleOnchange = (e) =>{
        this.setState({commentST:e.target.value});
    }
    handleSubmit = (id,cmt) => {
        
        this.props.getIdandCommentFun(id,cmt);
        this.setState({commentST:''})
      } 

  render() {
    return (
      <div>
        
      <Grid>
      <Grid.Column floated='left' width={16}>
        <Form><Form.TextArea  value={ this.state.commentST } onChange={  this.handleOnchange }     label='About' placeholder='Share a comment...' /></Form>
      </Grid.Column>

    </Grid>
      <Button  onClick={() => {this.handleSubmit(this.props.id,this.state.commentST)}}  inverted color='orange' size='mini' >Post Comment</Button>

      </div>
    )
  }
}
