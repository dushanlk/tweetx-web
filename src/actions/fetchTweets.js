import fetch from 'cross-fetch'

export const REQUEST_TWEETS = "REQUEST_TWEETS"

function requestTweets(keyword) {
    return {
        type: REQUEST_TWEETS,
        keyword
    }
}

export const RECEIVE_TWEETS = "RECEIVE_TWEETS"

function receiveTweets(keyword, json) {
    return {
        type: RECEIVE_TWEETS,
        keyword,
        data: json
    }
}

export const RECEIVE_ERROR = "RECEIVE_ERROR"

function receiveError(keyword, error) {
    console.error(`Error occurred while fetching tweets ${error}`)
    return {
        type: RECEIVE_ERROR,
        keyword,
        data: error
    }
}

export function fetchTweets(keyword) {
    return function (dispatch) {

        dispatch(requestTweets(keyword))
        return fetch(`http://localhost:7007/cxf/api/search/${keyword}`)
            .then(
                response => response.json()
            )
            .then(
                json => dispatch(receiveTweets(keyword, json))
            )
            .catch(function (error) {
                dispatch(receiveError(keyword, error))
            })
    }
}

