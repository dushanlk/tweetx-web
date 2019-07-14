import {RECEIVE_TWEETS} from "../actions/fetchTweets";

const tweets = (state = [], action) => {
    return action.type === RECEIVE_TWEETS ? action.data.tweets : []
}

export default tweets