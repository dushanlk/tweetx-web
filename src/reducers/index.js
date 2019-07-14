import {combineReducers} from 'redux'
import tweets from './tweets'
import hashTags from './hashTags'
import tweetsFetchStatus from './tweetsFetchStatus'

export default combineReducers({
    tweets,
    tweetsFetchStatus,
    hashTags
})
