import React from 'react'
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import {RECEIVE_TWEETS} from "../actions/fetchTweets";

const ResultStats = ({numOfTweets, hashTags, status}) => (
    <Grid container style={{marginTop: 35}}>
        <Grid item xs={3}>
        </Grid>
        {
            status === RECEIVE_TWEETS ?
                <Grid item>
                    <Typography variant="button" display="block" gutterBottom>
                        Found {numOfTweets} Tweets
                    </Typography>
                </Grid>
                : ""
        }
        {
            status === RECEIVE_TWEETS ?
                <Grid item xs={5} style={{marginLeft: 20}}>
                    <Typography variant="button" display="block" gutterBottom>
                        Top 10 Hash Tags
                    </Typography>
                    {
                        hashTags.map(hashTag => <Chip variant="outlined" size="large"
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
