import React from 'react';
import TopPart from './components/toppart';
import BodyPart from './components/bodypart';
import BottomPart from './components/bottompart';
import PopUpPart from './components/popuppart'

function App() {
  return (
    <React.Fragment>
      <TopPart/>
      <BodyPart/>
      <BottomPart/>
      <PopUpPart/>
    </React.Fragment>
  );
}

export default App;
