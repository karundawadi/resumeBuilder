import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Converts everything displayed on the webpage to pdf
function renderfrompdf() {
    return (
        <div>
            <button onClick={()=>{
                alert("Working on it!!");
            }}>Create PDF</button>
        </div>
    )
}

export default renderfrompdf
