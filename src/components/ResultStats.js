import React from 'react'
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import {RECEIVE_TWEETS} from "../actions/fetchTweets";

const ResultStats = ({numOfTweets, hashTags, type}) => (
    <Grid container style={{marginTop: 35}}>
        <Grid item xs={3}>
        </Grid>
        {
            type === RECEIVE_TWEETS ?
                <Grid item xs={6}>
                    <Typography variant="button" display="block" gutterBottom>
                        Found {numOfTweets} Tweets
                    </Typography>
                </Grid>
                : ""
        }
        <Grid item xs={3}>
        </Grid>

        <Grid item xs={3}>
        </Grid>
        {
            type === RECEIVE_TWEETS ?
                <Grid item xs={6}>
                    {
                        hashTags.map(hashTag => <Chip variant="outlined" size="medium"
                                                      key={hashTag.text}
                                                      style={{marginRight: 10, marginTop: 10}}
                                                      label={hashTag.text + " " + hashTag.count}/>)
                    }
                </Grid>
                : ""
        }
        <Grid item xs={3}>
        </Grid>
    </Grid>
)

export default ResultStats
