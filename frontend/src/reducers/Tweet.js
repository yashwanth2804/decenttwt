const initalState = {

    tweets: []
    
}

const Tweet = (state = initalState, action) => {

    const newState = { ...state };
    if (action.type === "LOAD_TWEETS") {

        console.log(action.newTweets.data);
        console.log("")
        console.log({ ...state, tweets: action.newTweets.data })
        return { ...state, tweets: action.newTweets.data }
    }
    if (action.type === "LIKE") {

        const { id, author, timestamp } = action;

        const r = newState.tweets.map(f => {
            if (id === f._id) {

                return { ...f, likes: f.likes + 1 }
            } else {
                return f
            }

        })


        return { ...state, tweets: r }
    }

    if (action.type === "COMMENT") {

        const { postid, author, comment, timestamp } = action.payload;
        const y = newState.tweets.map(f => {


            if (postid == f._id) {



                return {
                    ...f, comments: [...f.comments,
                    {
                        _id: Math.random() + "",
                        timestamp: timestamp,
                        author: author,
                        comment: comment
                    }

                    ]
                }
            } else {
                console.log("-------")
                return f
            }

        })

        return { ...state, tweets: y }

    }
 

    return newState;
}

export default Tweet;