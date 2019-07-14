import React from 'react'
import {connect} from "react-redux";
import TweetCardList from "../components/TweetCardList";


const mapStatesToProps = state => ({
    tweets: state.tweets,
    status: state.tweetsFetchStatus,
    message: state.message
})

export default connect(
    mapStatesToProps
)(TweetCardList)