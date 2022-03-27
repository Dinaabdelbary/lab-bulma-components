import React from 'react';
import './App.css';
import "bulma/css/bulma.css"
import Navbar from './components/Navbar';
import Formfield from './components/Formfield';
import SignupForms from './components/SignupForms';
import CoolButton from './components/CoolButton';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Formfield/>
      <SignupForms/>
      <CoolButton/>
    </div>
  );
}

export default App;
