import React,{useState} from 'react';
import TopPart from './components/toppart';
import BodyPart from './components/bodypart';
import BottomPart from './components/bottompart';
import PopUpPart from './components/popuppart'

function App() {
  const [displayPopUp,changeValue] = useState(true)
  const [userDetails,changeUserDetails] = useState({'':''})

  function handleChange(newValue,newUserDetails){
    changeValue(newValue)
    changeUserDetails(newUserDetails)
    console.log(newUserDetails)
  }
  return (
      <React.Fragment>
      <PopUpPart onChange = {handleChange} currentState = {displayPopUp}/>
      <TopPart/>
      <BodyPart/>
      <BottomPart/>
    </React.Fragment>
  );
}

export default App;
