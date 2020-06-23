import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import { Grid, TextField, Typography } from '@material-ui/core'

class popUpPart extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        showDialog : this.props.showDialog,
        userDetails: {
            firstName : '',
            lastName : '',
            twitterUrl: '',
            linkdinUrl: '',
            gitHubUrl: '',
            email: '',
        }
    }
    this.handleDialogClose = this.handleDialogClose.bind(this)
   }
   
    handleDialogClose(){
        this.setState(
            {
                showDialog: false,
            }
        )
        this.props.onChange(false,this.state.userDetails)
    }

    render() {
        return (
            <React.Fragment>
                <Dialog open={this.state.open}>
                <DialogTitle>
                    Let's get to know you.
                </DialogTitle>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default popUpPart
