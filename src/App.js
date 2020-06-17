import React,{useState} from 'react';
import TopPart from './components/toppart';
import BodyPart from './components/bodypart';
import BottomPart from './components/bottompart';
import PopUpPart from './components/popuppart'

function App() {
  const [displayPopUp,changeValue] = useState(true)

  function handleChange(newValue){
    changeValue(newValue)
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
