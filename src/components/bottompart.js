import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme)=>({
    root:{
        fontFamily: 'Roboto ,sans-serif',
        marginTop:'1em',
        paddingTop:'5em',
        paddingLeft:'0.5em',
        paddingRight:'0.5em',
        textAlign: 'center',
        boxShadow: '0em 0em 0em #DDDDDD',
    }
}));

function BottomPart() {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <h4>© Karun Dawadi</h4>
        </footer>
    )
}

export default BottomPart
