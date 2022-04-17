import Navbar from "./components/Navbar.js";
import React, { useState } from 'react';
import TextForm from "./components/TextForm.js";
// import About from "./components/About.js";


function App() {

  const [mode, setMode] = useState("light");


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#2C2F33";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    } 
  }
  return (
    <>


    <Navbar title="TextUtils" aboutText="About This App" mode={mode} toggleMode={toggleMode} />
    
   <div className = "container my-5" >
   <TextForm heading="Utilize your text" mode={mode} />

   {/* <About /> */}
   </div>

    </>
  );
}

export default App;
