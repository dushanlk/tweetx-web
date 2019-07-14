import {RECEIVE_ERROR} from "../actions/fetchTweets";

const message = (state, action) => {
    return action.type === RECEIVE_ERROR ? action.message : ""
}

export default message