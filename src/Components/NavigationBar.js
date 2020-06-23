import React from 'react'
import 'fontsource-roboto'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { makeStyles} from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { Grid} from '@material-ui/core'
import FromEmailIcon from './emailPopUp'


//Obtained from https://material-ui.com/customization/color/
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#26a69a',
      },
      secondary: {
        main: '#66bb6a',
      },
    },
  });

  //Did not make the sides hidable as that woudl make the overall look bad in small phones
const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      background: theme.palette.primary.main,
      fontSize: 'large',
    },
    writings:{
        alignContent: 'center',
    },
    icons:{
        size: "inherit",
    }
  }))

function NavigationBar(props) {
    const classes = useStyles()
    return (
        <React.Fragment>
            <AppBar className={classes.root}>
                    <Toolbar>
                        <Grid container spacing={0}>
                            <Grid item xs={2}>
                                <FromEmailIcon status={false}/>
                            </Grid> 
                            <Grid item xs={7}>
                                <Typography className={classes.writings} variant="h5">
                                     Karun Dawadi 
                                </Typography>
                            </Grid> 
                            <Grid item xs={3}>
                                <Grid container spacing={3}>
                                    <Grid item xs={1}>
                                        <TwitterIcon className={classes.icons} onClick={()=>{
                                            let url = "http://www.twitter.com"
                                            window.open(url)
                                        }}></TwitterIcon>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <LinkedInIcon className={classes.icons} onClick={()=>{
                                            let url = "http://www.linkedin.com"
                                            window.open(url)
                                        }}></LinkedInIcon>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <GitHubIcon className={classes.icons} onClick={()=>{
                                            let url = "http://www.github.com"
                                            window.open(url)
                                        }}></GitHubIcon>
                                    </Grid>
                                </Grid>
                            </Grid> 
                        </Grid>
                    </Toolbar>
                </AppBar>
        </React.Fragment>
    )
}

export default NavigationBar
