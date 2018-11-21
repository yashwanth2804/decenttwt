import React, { Component } from 'react'
import { Form, Button,Grid} from 'semantic-ui-react'

export default class Createtweet extends Component {

    state = {
        tweetTxt:''
    }

    handleOnchange = (e) => {

      this.setState({tweetTxt:e.target.value})
      
    }

    handleSubmit =() =>{
      console.log("clicked submiiit"+this.state.tweetTxt)
      this.props.createpostFn(this.state.tweetTxt)
      this.setState({tweetTxt:''})
    }
  render() {
    return (
      <div>
      <Grid>
      <Grid.Column floated='left' width={8}>
        <Form><Form.TextArea value={this.state.tweetTxt} onChange={  this.handleOnchange }  placeholder='Tell us more about you...' /></Form>
        <Button onClick={this.handleSubmit} color='red'>Post</Button>
      </Grid.Column>
     
    </Grid>
      
     
      </div>
    )
  }
}
