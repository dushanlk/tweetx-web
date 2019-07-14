import {connect} from "react-redux";
import ResultStats from "../components/ResultStats";


const mapStatesToProps = state => ({
    numOfTweets: state.tweets.length,
    hashTags: state.hashTags,
    type: state.tweetsFetchStatus
})

export default connect(
    mapStatesToProps
)(ResultStats)