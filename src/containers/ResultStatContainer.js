import React from 'react'
import {connect} from "react-redux";
import ResultStats from "../components/ResultStats";


const mapStatesToProps = state => ({
    numOfTweets: state.tweets.length,
    hashTags: state.hashTags,
    status: state.tweetsFetchStatus
})

export default connect(
    mapStatesToProps
)(ResultStats)