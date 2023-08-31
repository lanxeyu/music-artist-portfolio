import React from "react";
import { madeonLogo} from './assets'
import { Album } from './components';
import './App.css'

function App() {


  return (
    <>
      <img src={madeonLogo} id="madeonLogo" alt="Madeon logo" />
      <Album/>
        
      
      
    </>
  )
}



export default App;