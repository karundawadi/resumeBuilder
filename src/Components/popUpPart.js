import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Grid, TextField} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'

function isValidEmailAddress(address) {
    if(address === undefined){
        return false;
    }
    return !! address.match(/.+@.+/);
}

class popUpPart extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        showDialog : this.props.showDialog,
        complete : false,
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
                <Dialog open={false} fullWidth={true}>
                <DialogTitle>
                    Let's get to know you.
                </DialogTitle>
                <DialogContent>
                <Grid container spacing ={1}>
                    <Grid item xs={6}>
                        <TextField id="firstName" value = {this.state.userDetails.firstName} type="text" required label="First Name" onChange={
                            (e)=>{
                                var items = Object.assign({},this.state.userDetails,{"firstName":`${e.target.value}`})
                                this.setState({
                                    userDetails : items
                                })
                        }
                        }/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="lastName" value = {this.state.userDetails.lastName} type="text" required label="Last Name" onChange={
                            (e)=>{
                                var items = Object.assign({},this.state.userDetails,{"lastName":`${e.target.value}`})
                                this.setState({
                                    userDetails : items
                                })
                        }
                        } onBlur={() => this.setState({
                            complete: isValidEmailAddress(this.state.email)})}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="email" value = {this.state.userDetails.email} type="email" required label="Email" onChange={
                            (e)=>{
                                var items = Object.assign({},this.state.userDetails,{"email":`${e.target.value}`})
                                this.setState({
                                    userDetails : items
                                })
                        }
                        } onBlur={() => this.setState({
                            complete: isValidEmailAddress(this.state.userDetails.email)})} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={0} alignItems="flex-end">
                        <Grid item>
                            <GitHubIcon />
                        </Grid>
                        <Grid item>
                            <TextField id="gitHubUrl" value = {this.state.userDetails.gitHubUrl} type="text" required label="Github" onChange={
                            (e)=>{
                                var items = Object.assign({},this.state.userDetails,{"gitHubUrl":`${e.target.value}`})
                                this.setState({
                                    userDetails : items
                                })
                            }
                            }/>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <LinkedInIcon />
                        </Grid>
                        <Grid item>
                            <TextField id="linkdinUrl" value = {this.state.userDetails.linkdinUrl} type="text" required label="LinkedIn" onChange={
                            (e)=>{
                                var items = Object.assign({},this.state.userDetails,{"linkdinUrl":`${e.target.value}`})
                                this.setState({
                                    userDetails : items
                            })
                            }
                            }/>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TwitterIcon />
                        </Grid>
                        <Grid item>
                            <TextField id="twitterUrl" value = {this.state.userDetails.twitterUrl} type="text" required label="Twitter username" onChange={
                            (e)=>{
                                var items = Object.assign({},this.state.userDetails,{"twitterUrl":`${e.target.value}`})
                                this.setState({
                                    userDetails : items
                            })
                            }
                            }/>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button disabled={!(this.state.complete)} variant="contained" onClick={this.handleDialogClose}>Sumbit</Button>
                    </Grid>
                </Grid>
                </DialogContent>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default popUpPart
