import React, { Component } from 'react';
import { Comment, Header, Form, Button } from 'semantic-ui-react'

export default class Comments extends Component {




    render() {



        const cmts = this.props.comments.map(s => {
            return (
                <Comment key={s._id}>
                    <Comment.Avatar src='/images/avatar/small/matt.jpg' />
                    <Comment.Content>
                        <Comment.Author as='a'>{s.author}</Comment.Author>
                        <Comment.Metadata>
                            <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>{s.comment}</Comment.Text>

                    </Comment.Content>
                </Comment>
            )


        })

        return (
            <div>
                <Comment.Group>

                    {cmts}
                    
                </Comment.Group>
                
            </div>
        )
    }
}
