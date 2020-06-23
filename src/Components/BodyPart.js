import React,{Fragment} from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#26a69a',
      },
      secondary: {
        main: '#66bb6a',
      },
      tertiary:{
        main: '#f7ebeb',
      },
      quaternary:{
        main: '#FFFFFF',
      },
    },
  });

const useStyles = makeStyles(()=>({
    root:{
        paddingTop: '6em',
        paddingLeft: '4em',
        paddingRight: '4em',
    },
    pColor:{
        backgroundColor: theme.palette.quaternary.main,
    },
    headings:{
        paddingLeft: '3%',
        color:'Navy',
    },
    listHolder:{
        paddingLeft: '2em',   
    },
    lists:{
        color:'Teal',
    }
}));
function BodyPart() {
    const classes = useStyles()
    return (
        <Fragment>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Amigo</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">1</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">2</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Amigo</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">1</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">2</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Amigo</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">1</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">2</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Amigo</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">1</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">2</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Amigo</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">1</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">2</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Amigo</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">1</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">2</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default BodyPart
