import {RECEIVE_TWEETS} from "../actions/fetchTweets";

const hashTags = (state, action) => {
    return action.type === RECEIVE_TWEETS ? action.data.topHashTags : []
}

export default hashTags