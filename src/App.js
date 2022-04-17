import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
// import About from "./components/About.js";


function App() {


  return (
    <>


    <Navbar title="TextUtils" aboutText="About This App" />
    
   <div className = "container my-5" >
   <TextForm heading="Utilize your text" />

   {/* <About /> */}
   </div>

    </>
  );
}

export default App;
