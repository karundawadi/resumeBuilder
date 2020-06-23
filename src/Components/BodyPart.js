import React,{Fragment} from 'react'
import { Grid, TextField, Paper } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    body: {
      flexGrow: 1,
      padding :"2%",
    },
  }))

function BodyPart() {
    const classes = useStyles()
    return (
        <Fragment style={classes.body}>
           <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <ul>
                           <li>OIa</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default BodyPart
