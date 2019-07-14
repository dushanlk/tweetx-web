import React from 'react'
import {connect} from "react-redux";
import TweetCardList from "../components/TweetCardList";


const mapStatesToProps = state => ({
    tweets: state.tweets,
    status: state.tweetsFetchStatus
})

export default connect(
    mapStatesToProps
)(TweetCardList)