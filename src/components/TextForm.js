import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }  

    const handleClearClick = () => {
        let newText = "";
        setText(newText)
    }  
    
    const handleInvClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText)
    }  
    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied to clipboard");
    }  
    const handleExtraSpClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleMeowClick = () => {
        let newText = text.split("").map(letter => {
            if (letter === ".") {
                return "1"
            } else if (letter === ",") {
                return "1"
            } else if (letter === "?") {
                return "1"
            } else if (letter === "a") {
                return "2"
            } else if (letter === "b") {
                return "2"
            } else if (letter === "c") {
                return "2"
            } else if (letter === "d") {
                return "3"
            } else if (letter === "e") {
                return "3"
            } else if (letter === "f") {
                return "3"
            } else if (letter === "g") {
                return "4"
            } else if (letter === "h") {
                return "4"
            } else if (letter === "i") {
                return "4"
            } else if (letter === "j") {
                return "5"
            } else if (letter === "k") {
                return "5"
            } else if (letter === "l") {
                return "5"
            } else if (letter === "m") {
                return "6"
            } else if (letter === "n") {
                return "6"
            } else if (letter === "o") {
                return "6"
            } else if (letter === "p") {
                return "7"
            } else if (letter === "q") {
                return "7"
            } else if (letter === "r") {
                return "7"
            } else if (letter === "s") {
                return "7"
            } else if (letter === "t") {
                return "8"
            } else if (letter === "u") {
                return "8"
            } else if (letter === "v") {
                return "8"
            } else if (letter === "w") {
                return "9"
            } else if (letter === "x") {
                return "9"
            } else if (letter === "y") {
                return "9"
            } else if (letter === "z") {
                return "9"
            } else if (letter === " ") {
                return "0"
            } else {
                return letter
            }
        }).join("")
        setText(newText)
        alert(" ⚠️ Word to number only supports letters from A to Z in lowercase. ⚠️")
    }  

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


  const [text, setText] = useState('');
  return (
    <>
    <div className = "container">
        <h2>{props.heading}</h2> 
        <br/>
            <div className="mb-5">
                  <textarea className="form-control bg-secondary  text-white" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>    
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-info mx-2 my-1" onClick={handleInvClick}>Reverse</button>
        <button className="btn btn-secondary mx-2 my-1" onClick={handleMeowClick}>Word to Number</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpClick}>Remove Extra Space</button>
        <button className="btn btn-warning mx-2 my-1" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear</button>
    </div>        

    <div className="container my-3 bg-dark text-white">
        <h3>Your text summary</h3>
        <p>
            "{text.split(" ").length}" words and "{text.length}" characters
        </p>

        <p>
        "{ 0.008 * text.split(" ").length }"" Minutes to read
        </p>

    </div>

    </>     
  )
}
