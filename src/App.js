import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    <>



    <Navbar title="TextUtils" aboutText="About This App" />
    
   <div className = "container my-5" >
   <TextForm heading="Enter the text you want to utilize" />
   </div>


    </>
  );
}

export default App;
