import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {FormControl, InputLabel, TextField} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Modal from 'react-modal'

const customStyleForModal = {
    content:{
        top: '100%',
        left: '100%',
        right: '100%',
        bottom: '100%',
    }
}

Modal.setAppElement('body')

class PopUpPart extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: this.props.currentState,
        displayAlert: true,
        userDetails: {
            firstName : '',
            lastName : '',
            twitterUrl: '',
            linkdinUrl: '',
            githubUrl: '',
            mailingEmail: '',
            currentSchool: '',
            currentGPA: '',
            currentMajor:'',
            currentWork: '',
            featureOneAboutCurrentWork: '',
            featureTwoAboutCurrentWork: '',
            featureThreeAboutCurrentWork: '',
            previousWork: '',
            featureOneAboutPreviousWork: '',
            featureTwoAboutPreviousWork: '',
            featureThreeAboutPreviousWork: '',
            projectOne: '',
            projectOneFirstDescription: '',
            projectOneSecondDescription: '',
            projectOneThirdDescription: '',
            courseImportantOne: '',
            courseImportantTwo: '',
            courseImportantThree: '',
            softawareOneKnown: '',
            softawareTwoKnown: '',
            softawareThreeKnown: '',
        }
      };
      
      this.handleCloseModal = this.handleCloseModal.bind(this)
    }
    
    handleCloseModal () {
      this.setState({ showModal: false })
      this.props.onChange(false,this.state.userDetails)
    }
    componentDidMount(){
      alert("Please fill out the form")
    }
    render () {
      return (
        <div>
          <FormControl>
          <Modal 
             isOpen={this.state.showModal}
          >
                <Grid container spacing={1}>
                  {/* First Name */}
                  <Grid item xs={4}>
                    <TextField id="firstName" value = {this.state.userDetails.firstName} label="First Name" onChange={
                      (e)=>{
                        this.setState(this.displayAlert = false)
                        var items = Object.assign({},this.state.userDetails,{"firstName":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                          console.log(this.state.userDetails.firstName)
                        })
                      }
                    }/>
                  </Grid>
                  {/* :Last Name */}
                  <Grid item xs={4}>
                    <TextField id="lastName" value = {this.state.userDetails.lastName} label="Last Name" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"lastName":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="mailingEmail" value = {this.state.userDetails.mailingEmail} label="Mailing Email" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"mailingEmail":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="currentGPA" value = {this.state.userDetails.currentGPA} label="Current GPA" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"currentGPA":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="currentSchool" value = {this.state.userDetails.currentSchool} label="Current School" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"currentSchool":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="currentMajor" value = {this.state.userDetails.currentMajor} label="Current Major" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"currentMajor":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="twitterUrl" value = {this.state.userDetails.twitterUrl} label="Twitter Url" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"twitterUrl":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="linkdinUrl" value = {this.state.userDetails.linkdinUrl} label="Linkdin Url" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"linkdinUrl":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="githubUrl" value = {this.state.userDetails.githubUrl} label="Github Url" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"githubUrl":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="currentWork" value = {this.state.userDetails.currentWork} label="Current Work" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"currentWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="featureOneAboutCurrentWork" value = {this.state.userDetails.featureOneAboutCurrentWork} label="Feature 1" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"featureOneAboutCurrentWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="featureTwoAboutCurrentWork" value = {this.state.userDetails.featureTwoAboutCurrentWork} label="Feature 2" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"featureTwoAboutCurrentWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={4}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="featureThreeAboutCurrentWork" value = {this.state.userDetails.featureThreeAboutCurrentWork} label="Feature 3" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"featureThreeAboutCurrentWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={4}>
                      <br></br>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="previousWork" value = {this.state.userDetails.previousWork} label="Previous Work" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"previousWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="featureOneAboutPreviousWork" value = {this.state.userDetails.featureOneAboutPreviousWork} label="Feature 1" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"featureOneAboutPreviousWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="featureTwoAboutPreviousWork" value = {this.state.userDetails.featureTwoAboutPreviousWork} label="Feature 2" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"featureTwoAboutPreviousWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={4}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="featureThreeAboutPreviousWork" value = {this.state.userDetails.featureThreeAboutPreviousWork} label="Feature 3" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"featureThreeAboutPreviousWork":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={4}>
                      <br></br>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="projectOne" value = {this.state.userDetails.projectOne} label="Project" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"projectOne":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="projectOneFirstDescription" value = {this.state.userDetails.projectOneFirstDescription} label="Feature 1" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"projectOneFirstDescription":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="projectOneSecondDescription" value = {this.state.userDetails.projectOneSecondDescription} label="Feature 2" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"projectOneSecondDescription":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={4}>
                     
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="projectOneThirdDescription" value = {this.state.userDetails.projectOneThirdDescription} label="Feature 3" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"projectOneThirdDescription":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={4}>
                      <br></br>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="courseImportantOne" value = {this.state.userDetails.courseImportantOne} label="Course 1" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"courseImportantOne":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="courseImportantTwo" value = {this.state.userDetails.courseImportantTwo} label="Course 2" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"courseImportantTwo":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="courseImportantThree" value = {this.state.userDetails.courseImportantThree} label="Course 3" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"courseImportantThree":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="softawareOneKnown" value = {this.state.userDetails.softawareOneKnown} label="Software One" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"softawareOneKnown":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="softawareTwoKnown" value = {this.state.userDetails.softawareTwoKnown} label="Software Two" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"softawareTwoKnown":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="softawareThreeKnown" value = {this.state.userDetails.softawareThreeKnown} label="Software Three" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"softawareThreeKnown":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                        })
                      }
                    }/>
                  </Grid>
                  <Grid xs={12}>
                      <br></br>
                  </Grid>
                  <Grid xs={5}>
                  </Grid>
                  <Grid item xs={4}>
                    <button onClick={this.handleCloseModal}>Sumbit</button>
                  </Grid>
                </Grid>
          </Modal>
          </FormControl>
        </div>
      );
    }
  }
  

export default PopUpPart
