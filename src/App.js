import React,{useState} from 'react';
import NavigationBar from './Components/NavigationBar'
import BodyPart from './Components/BodyPart'
import ShowDialog from './Components/popUpPart'
import { Button } from '@material-ui/core'
import ReactToPrint from 'react-to-print';

import './App.css';

function AppC() {
    const [showDialog, setDialog] = useState(true)
    const [userDetails,changeUserDetails] = useState({'':''})
    function handleChange(status, newUserDetails){
      setDialog(status)
      changeUserDetails(newUserDetails)
    }

  return (
    <React.Fragment>
      <ShowDialog showDialog={showDialog} onChange={handleChange}/>
      <NavigationBar userDetails={userDetails}/>
      <BodyPart/>
    </React.Fragment>
  );
}
function App(){
  const componentRef = React.useRef();
  return(
    <React.Fragment>
      <AppC/>
      {/* <ReactToPrint documentTitle="Test" copyStyles={true} 
      trigger={() => <button>Print this out!</button>}
      content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} /> */}
    </React.Fragment>
  )
}

export default App;
