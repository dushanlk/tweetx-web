import React from 'react'
import Grid from "@material-ui/core/Grid";
import TweetCard from './TweetCard'
import {RECEIVE_ERROR, RECEIVE_TWEETS, REQUEST_TWEETS,} from "../actions/fetchTweets";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

const TweetCardList = ({tweets, status, message}) => (
    <Grid container style={{marginTop: 30}}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
            {
                status === RECEIVE_TWEETS ?
                    tweets.map(tweet =>
                        <TweetCard tweet={tweet.text}
                                   key={tweet.id}
                                   user={tweet.user}
                                   time={tweet.createdDateTime}
                                   image={tweet.userProfileImage}/>
                    ) : ""
            }
            {
                status === REQUEST_TWEETS ? <LinearProgress style={{marginTop: 50}}/> : ""
            }
            {
                status === RECEIVE_ERROR ?
                    <Typography variant="h5" gutterBottom align={'center'} style={{marginTop: 50}}>
                        {message}
                    </Typography> : ""

            }
        </Grid>
        <Grid item xs={3}>
        </Grid>
    </Grid>
)

export default TweetCardList
