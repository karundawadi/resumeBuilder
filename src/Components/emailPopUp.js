import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Grid, TextField } from '@material-ui/core'
import ReactDOM from 'react-dom'

//To handle email input from the user 
//Props only has the email 
function EmailIconClicked(props) {
    const [open, setOpen] = useState(props.buttonCliked)
    console.log("Ola 3")
    const handleClose = ()=>{
        setOpen(false)
    }
    return ReactDOM.createPortal(
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Thank you.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Thank you for showing interest in me. Please compose a message for me.
                    </DialogContentText>
                    <TextField autoFocus margin='dense' label="I am hiring you." type="text"/>
                    <Button onClick={()=>{
                        window.open('mailto:'+"karundawadi00@gmail.com"+'?cc='+"Ola"+'&subject='+"Hey"+'&body='+"emailBody", '_self');
                        setOpen(false)
                    }}>Send</Button>
                </DialogContent>
            </Dialog>
        </React.Fragment>,document.getElementById("modal-components"),)
}

export default EmailIconClicked
