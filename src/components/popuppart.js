import React,{useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PopUp from 'reactjs-popup'

function PopUpPart() {
    return (
        <PopUp trigger={useEffect(() => {
        }, [])} position='center center' modal={true} lockScroll={true} closeOnDocumentClick={true}>
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
        </PopUp>
    )
}

export default PopUpPart
