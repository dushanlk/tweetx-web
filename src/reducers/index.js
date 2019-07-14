import {combineReducers} from 'redux'
import tweets from './tweets'
import hashTags from './hashTags'
import tweetsFetchStatus from './tweetsFetchStatus'
import message from './message'

export default combineReducers({
    tweets,
    tweetsFetchStatus,
    hashTags,
    message
})
