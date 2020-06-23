import React from 'react';
import NavigationBar from './Components/NavigationBar'
import BodyPart from './Components/BodyPart'
import './App.css';

function App() {
    document.title("Resume")
  return (
    <React.Fragment>
      <NavigationBar/>
      <BodyPart/>
    </React.Fragment>
  );
}

export default App;
