import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {FormControl, InputLabel, TextField} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Modal from 'react-modal'
import App from '../App' 

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
        userDetails: {
            firstName : '',
            lastName : '',
            education: '',
            qualification: '',
        }
      };
      
      this.handleCloseModal = this.handleCloseModal.bind(this)
    }
    
    handleCloseModal () {
      this.setState({ showModal: false })
      console.log(this.state.userDetails)
      this.props.onChange(false)
    }

    render () {
      return (
        <div>
          <Modal 
             isOpen={this.state.showModal}
          >
            <FormControl>
                    <TextField id="firstName" value = {this.state.userDetails.firstName} label="First Name" onChange={
                      (e)=>{
                        var items = Object.assign({},this.state.userDetails,{"firstName":`${e.target.value}`})
                        this.setState({
                          userDetails : items
                        },()=>{
                          console.log(this.state.userDetails.firstName)
                        })
                      }
                    }/>
                    <TextField id="lastName" label="Last Name" onChange={e=>this.setState({...this.state.userDetails, lastName: e.target.value })}/>
                    <TextField id="education" label="Education" onChange={e=>this.setState({...this.state.userDetails, education: e.target.value })}/>
                    <TextField id="qualification" label="Qualification" onChange={e=>this.setState({...this.state.userDetails, qualification: e.target.value })}/>
                    <button onClick={this.handleCloseModal}>Sumbit</button>
                </FormControl>
          </Modal>
        </div>
      );
    }
  }
  

export default PopUpPart
