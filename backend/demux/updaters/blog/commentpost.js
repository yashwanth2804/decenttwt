async function commentPost(state, payload, blockInfo, context) {
    const Tweet = state.tweet
    var Postid = payload.data.postid

    const CommentM = state.comment
    console.log("dsfdsfds")
    console.log(payload.data)
    comment = new CommentM(
        {
            _id: payload.data._id,
            timestamp: payload.data.timestamp,
            author: payload.data.author,
            comment: payload.data.comment

        }
    )
    await comment.save(function (err) {
        if (err) return handleError(err);

        var commentid = comment._id 

        Tweet.findOneAndUpdate({ _id: Postid }, 
            { $push: { comments: commentid } })
            .exec()
       // Tweet.save()
//console.log(Tweet)

    })
} 

module.exports = commentPost
