import React,{useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PopUp from 'reactjs-popup'

function PopUpPart(props) {
    const change = ()=>{
        props.changePopUpCondition(false);
    }
    if(props.currentState){
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

export default PopUpPart
