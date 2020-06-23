import React,{useState} from 'react';
import NavigationBar from './Components/NavigationBar'
import BodyPart from './Components/BodyPart'
import ShowDialog from './Components/popUpPart'
import { Button } from '@material-ui/core'
import './App.css';


function App() {
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
      <Button>Save</Button>
    </React.Fragment>
  );
}

export default App;
