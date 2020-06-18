import React,{useState} from 'react'
import BodyPart from './components/bodypart'
import PopUpPart from './components/popuppart'

function App() {
  const [displayPopUp,changeValue] = useState(true)
  const [userDetails,changeUserDetails] = useState({'':''})

  function handleChange(newValue,newUserDetails){
    changeValue(newValue)
    changeUserDetails(newUserDetails)
  }
  return (
      <React.Fragment>
      <PopUpPart onChange = {handleChange} currentState = {displayPopUp}/>
      <BodyPart userDetailsTransferred={userDetails}/>
    </React.Fragment>
  );
}

export default App;
