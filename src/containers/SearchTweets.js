import React from 'react'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {fetchTweets} from '../actions/fetchTweets'

const SearchTweets = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(fetchTweets(input.value))
                input.value = ''
            }}>
                <Grid container style={{marginTop: 50}}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-full-width"
                            style={{margin: 8}}
                            placeholder="Search your favourite Tweet here!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={node => input = node}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default connect()(SearchTweets)
