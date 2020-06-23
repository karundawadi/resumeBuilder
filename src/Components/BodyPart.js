import React,{Fragment} from 'react'
import { Grid, Paper, Typography, Box } from '@material-ui/core'
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
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Education</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">[School Name]</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Degree</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Major</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">GPA</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                    <Paper>
                        <Typography className={classes.headings}  variant="h5">Experience</Typography>
                            <Box className={classes.pColor}>
                                <ul className={classes.listHolder}>
                                    <Typography contenteditable="true" style={{color:'Red',}} variant="h6">Company 1</Typography>
                                    <Typography contenteditable="true" style={{color:'Red',}} variant="h6">Title</Typography>
                                    <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Work Done</Typography></li>
                                    <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Work Done</Typography></li>
                                    </ul>
                            </Box>
                            <Box className={classes.pColor}>
                                <Typography contenteditable="true" style={{color:'Red',}} variant="h6">Company 2</Typography>
                                <Typography contenteditable="true" style={{color:'Red',}} variant="h6">[Title]</Typography>
                                <ul className={classes.listHolder}>
                                    <li contenteditable="true"><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Work done</Typography></li>
                                    <li contenteditable="true"><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Work done</Typography></li>
                                </ul>
                            </Box>
                    </Paper>        
                </Grid>
                <Grid item xs = {12}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings}  variant="h5">Awards & Acknowledgements</Typography>
                        <ul className={classes.listHolder}>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">First item</Typography></li>
                            <li><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Second item</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                    <Paper className={classes.pColor}>
                        <Typography contenteditable="true" className={classes.headings} variant="h5">Courses</Typography>
                        <ul className={classes.listHolder}>
                            <li contenteditable="true"><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Course 1</Typography></li>
                            <li contenteditable="true"><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Course 2</Typography></li>
                            <li contenteditable="true"><Typography contenteditable="true" className={classes.lists} variant="subtitle1">Course 3</Typography></li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default BodyPart
