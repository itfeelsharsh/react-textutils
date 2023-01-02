import Navbar from "./components/Navbar.js";
import React, { useState } from "react";
import TextForm from "./components/TextForm.js";
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//export default App;
//Data Flows from App.js to TextForm.js and Navbar.js to TextForm.js and Navbar.js to App.js.

function App() {

  document.body.style.backgroundColor = "#2C2F33";
  document.body.style.color = "#ffff";

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About This App"

      />

      <Alert alert={alert} />

      <div className="container my-5">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Edit your text below"
 
                />
              }
            />
            <Route path="/about" element={<About />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
} //end of App

export default App;
