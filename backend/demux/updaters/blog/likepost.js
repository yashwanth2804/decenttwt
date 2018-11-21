async function likePost(state, payload, blockInfo, context) {
    try {
        await state.tweet.findByIdAndUpdate(
{_id: payload.data.postid },
            { $inc: { likes: 1 } }).exec()
    } catch (err) {
        console.error(err)
    }
}

module.exports = likePost