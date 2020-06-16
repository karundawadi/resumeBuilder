import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        fontFamily: 'Roboto ,sans-serif',
        marginTop:'1em',
        paddingTop:'5em',
        paddingLeft:'0.5em',
        paddingRight:'0.5em',
    }
}));

function BodyPart() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <h3>Context</h3>
                        <ul>
                            <li>Another one</li>
                            <li>Heer</li>
                            <li>Third</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <h3>Context</h3>
                        <ul>
                            <li>Another one</li>
                            <li>Heer</li>
                            <li>Third</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper>
                        <h3>Context</h3>
                        <ul>
                            <li>Another one</li>
                            <li>Heer</li>
                            <li>Third</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper>
                        <h3>Context</h3>
                        <ul>
                            <li>Another one</li>
                            <li>Heer</li>
                            <li>Third</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper>
                        <h3>Context</h3>
                        <ul>
                            <li>Another one</li>
                            <li>Heer</li>
                            <li>Third</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                <Paper>
                        <h3>Context</h3>
                        <ul>
                            <li>Another one</li>
                            <li>Heer</li>
                            <li>Third</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default BodyPart
