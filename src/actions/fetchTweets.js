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
        data: json,
        message: "SUCCESS"
    }
}

export const RECEIVE_ERROR = "RECEIVE_ERROR"

function receiveError(keyword, message) {
    console.error(`Error occurred while fetching tweets ${message}`)
    return {
        type: RECEIVE_ERROR,
        keyword,
        message: message
    }
}

export function fetchTweets(keyword) {
    return function (dispatch) {

        dispatch(requestTweets(keyword))
        return fetch(`http://localhost:7007/cxf/api/search/${keyword}`)
            .then((response) => {
                if (response.status === 200) {
                    return response.json()
                } else if (response.status === 204) {
                    throw Error(`No tweets found for the keyword "${keyword}", try another!`)
                } else {
                    throw Error("Oops! Something went wrong!")
                }
            })
            .then(
                json => dispatch(receiveTweets(keyword, json))
            )
            .catch(function (error) {
                dispatch(receiveError(keyword, error.message))
            })
    }
}

