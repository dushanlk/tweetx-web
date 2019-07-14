import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

const TweetCard = ({tweet, user, time, image}) => (
    <Paper style={{marginTop: 15, padding: 20}}>
        <Grid container>
            <Grid item>
                <Avatar alt={user} src={image}/>
            </Grid>
            <Grid item style={{marginLeft: 10}}>
                <Typography variant="subtitle1" gutterBottom>
                    <b>{user}</b>
                </Typography>
            </Grid>
            <Grid item xs={3} style={{marginLeft: 10}}>
                <Typography variant="subtitle1" gutterBottom>
                    <Box fontWeight="fontWeightLight">{time}</Box>
                </Typography>
            </Grid>
            <Grid item xs={12} style={{marginTop: 20}}>
                <Typography variant="body1" gutterBottom align={'justify'}>
                    {tweet}
                </Typography>
            </Grid>
        </Grid>
        <br/>
    </Paper>
)

export default TweetCard
