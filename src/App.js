import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";


function App() {


  return (
    <>
    <div className="bg-dark text-white">


    <Navbar title="TextUtils" aboutText="About This App" />
    
   <div className = "container my-5" >
   <TextForm heading="Utilize your text" />
   </div>

   </div>
    </>
  );
}

export default App;
