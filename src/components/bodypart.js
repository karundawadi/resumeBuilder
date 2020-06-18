import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TopPart from './toppart'
import Pdf from 'react-to-pdf' 

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        fontFamily: 'Roboto ,sans-serif',
        marginTop:'1em',
        paddingTop:'5em',
        paddingLeft:'0.5em',
        paddingRight:'0.5em'
    }
}));

const ref = React.createRef();

function BodyPart(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <div ref={ref} className={classes.root}>
            <TopPart userDetailsTransferred={props.userDetailsTransferred}/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <h3>
                            Working on it 
                        </h3>
                        <ul>
                            <li>{props.userDetailsTransferred.currentGPA}</li>
                            <li>{props.userDetailsTransferred.currentMajor}</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <h3>{props.userDetailsTransferred.currentWork}</h3>
                        <ul>
                            <li>{props.userDetailsTransferred.featureOneAboutCurrentWork}</li>
                            <li>{props.userDetailsTransferred.featureTwoAboutCurrentWork}</li>
                            <li>{props.userDetailsTransferred.featureThreeAboutCurrentWork}</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper>
                        <h3>{props.userDetailsTransferred.previousWork}</h3>
                        <ul>
                            <li>{props.userDetailsTransferred.featureOneAboutPreviousWork}</li>
                            <li>{props.userDetailsTransferred.featureTwoAboutPreviousWork}</li>
                            <li>{props.userDetailsTransferred.featureThreeAboutPreviousWork}</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper>
                        <h3>{props.userDetailsTransferred.projectOne}</h3>
                        <ul>
                            <li>{props.userDetailsTransferred.projectOneFirstDescription}</li>
                            <li>{props.userDetailsTransferred.projectOneSecondDescription}</li>
                            <li>{props.userDetailsTransferred.projectOneThirdDescription}</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {6}>
                <Paper>
                        <h3>Courses</h3>
                        <ul>
                            <li>{props.userDetailsTransferred.courseImportantOne}</li>
                            <li>{props.userDetailsTransferred.courseImportantTwo}</li>
                            <li>{props.userDetailsTransferred.courseImportantThree}</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                <Paper>
                        <h3>Softwares Known</h3>
                        <ul>
                            <li>{props.userDetailsTransferred.softawareOneKnown}</li>
                            <li>{props.userDetailsTransferred.softawareTwoKnown}</li>
                            <li>{props.userDetailsTransferred.softawareThreeKnown}</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        <Pdf targetRef={ref} filename="resume.pdf">
                    {({toPdf})=> (
                        <button onClick={toPdf}>Generarte pdf</button>
                    )}
        </Pdf>
        </React.Fragment>
    )
}

export default BodyPart
