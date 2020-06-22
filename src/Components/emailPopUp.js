import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Grid, TextField } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import { Component } from 'react'
import PropTypes from 'prop-types'

class emailPopUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : false,
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
    }
    
    handleClose(){
        this.setState({
            open : false
        }
        )
    }
    handleOpen(){
        this.setState({
            open : true
        }
        )
    }

    render() {
        return(
        <React.Fragment>
            <EmailIcon onClick={this.handleOpen}/>
            <Dialog open={true} >
                <DialogTitle>
                    Thank you.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Thank you for showing interest in me. Please compose a message to send to me.
                    </DialogContentText>
                    <Grid container spacing={1}>
                    <Grid item={12}>
                        <TextField  autoFocus margin='dense' label="Company Name" type="text"/>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextField  margin='dense' label="Email" type="email"/>
                    </Grid>
                    <br/>
                    <Grid item xs={12}>
                        <TextareaAutosize rowsMin={5} placeholder="I am hiring you"/>
                    </Grid>
                    <br/>
                    <Grid item xs={5}>
                            
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="contained" onClick={()=>{
                        window.open('mailto:'+"random@gmail.com"+'?cc='+"Ola"+'&subject='+"Hey"+'&body='+"emailBody", '_self');
                        this.handleClose()
                    }}>Send</Button>
                    </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
        )
    }
}

export default emailPopUp
