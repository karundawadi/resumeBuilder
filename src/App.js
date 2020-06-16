import React,{useState} from 'react';
import TopPart from './components/toppart';
import BodyPart from './components/bodypart';
import BottomPart from './components/bottompart';
import PopUpPart from './components/popuppart'

function App() {
  const [displayPopUp,changeValue] = useState(true)
  return (
      <React.Fragment>
      <PopUpPart changePopUpCondition = {changeValue} currentState = {displayPopUp}/>
      <TopPart/>
      <BodyPart/>
      <BottomPart/>
    </React.Fragment>
  );
}

export default App;
