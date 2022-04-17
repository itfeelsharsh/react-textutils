import Navbar from "./components/Navbar.js";
import React, { useState } from 'react';
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
// import About from "./components/About.js";


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
   <TextForm heading="Utilize your text" mode={mode} showAlert={showAlert} />

   {/* <About /> */}
   </div>

    </>
  );
}

export default App;
