import Navbar from "./components/Navbar.js";
import React, { useState } from 'react';
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

  //export default App;


function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#2C2F33";
      showAlert("Dark mode enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    } 
  }
  return (

<> 

    <Navbar title="TextUtils" aboutText="About This App" mode={mode} toggleMode={toggleMode} />


    <Alert alert={alert} />
    
   <div className = "container my-5" >

    <BrowserRouter>

      <Routes>
              <Route path="/" element={<TextForm showAlert={showAlert} heading="Edit your text below" toggleMode={toggleMode} mode={mode} />} />
              <Route path="/about" element={<About />} mode={mode} />
      </Routes>

    </BrowserRouter>
     

   </div>


   </>  
           
  );
}         //end of App

export default App;
