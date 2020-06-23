import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import { Grid, TextField, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import { Component } from 'react'
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp';

//Automatic send button lights after entering correct email 
class emailPopUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open : this.props.status,
             companyName: '',
             body : '',
             complete: false,

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
            <Dialog open={this.state.open} >
                <DialogTitle>
                    Thank you.
                    <HighlightOffSharpIcon color="error" fontsize="large" onClick={this.handleClose} style={{position:'absolute',left:'83%'}}/>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography variant="body1">
                        Thank you for showing interest in me. Please compose a message to send to me.
                        </Typography>
                    </DialogContentText>
                    <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <TextField value = {this.state.companyName} autoFocus margin='dense' label="Company Name" type="text" onChange={
                            (e)=>{
                                this.setState({
                                    companyName : e.target.value
                                })
                            }
                        }/>
                    </Grid>
                    <Grid item xs={12}>
                        <br/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize rowsMin={5} placeholder="Edit this to type the body of the email." value ={this.state.body} onChange={
                            (e)=>{
                                this.setState({
                                    body : e.target.value
                                })
                            }
                        }/>
                    </Grid>
                    <br/>
                    <Grid item xs={4}>
                    </Grid>
                    <DialogActions>
                    <Grid item xs={1}>
                        <Button variant="contained" onClick={()=>{
                        window.open(`mailto:${this.props.userDetials.email}?subject=Hiring you in ${this.state.companyName}&body=${this.state.body}`)
                        this.handleClose()
                    }}>Send</Button>
                    </Grid>
                    </DialogActions>
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>
        )
    }
}

export default emailPopUp