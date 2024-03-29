import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleInvClick = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleBhawClick = () => {
    let newText = text
      .split("")
      .map(function (letter) {
        if (letter === " ") {
          return "  ";
        } else {
          return letter;
        }
      })
      .join("");
    setText(newText);
  };

  const handleMeowClick = () => {
    let newText = text
      .split("")
      .map((letter) => {
        if (letter === ".") {
          return "1";
        } else if (letter === ",") {
          return "1";
        } else if (letter === "?") {
          return "1";
        } else if (letter === "a") {
          return "2";
        } else if (letter === "b") {
          return "2";
        } else if (letter === "c") {
          return "2";
        } else if (letter === "d") {
          return "3";
        } else if (letter === "e") {
          return "3";
        } else if (letter === "f") {
          return "3";
        } else if (letter === "g") {
          return "4";
        } else if (letter === "h") {
          return "4";
        } else if (letter === "i") {
          return "4";
        } else if (letter === "j") {
          return "5";
        } else if (letter === "k") {
          return "5";
        } else if (letter === "l") {
          return "5";
        } else if (letter === "m") {
          return "6";
        } else if (letter === "n") {
          return "6";
        } else if (letter === "o") {
          return "6";
        } else if (letter === "p") {
          return "7";
        } else if (letter === "q") {
          return "7";
        } else if (letter === "r") {
          return "7";
        } else if (letter === "s") {
          return "7";
        } else if (letter === "t") {
          return "8";
        } else if (letter === "u") {
          return "8";
        } else if (letter === "v") {
          return "8";
        } else if (letter === "w") {
          return "9";
        } else if (letter === "x") {
          return "9";
        } else if (letter === "y") {
          return "9";
        } else if (letter === "z") {
          return "9";
        } else if (letter === " ") {
          return "0";
        } else {
          return letter;
        }
      })
      .join("");
    setText(newText);
    // alert(" ⚠️ Word to number only supports letters from A to Z in lowercase. ⚠️")
    props.showAlert(
      " ⚠️ Word to number only supports letters from A to Z in lowercase. ⚠️",
      "warning"
    );
  };

  const handleA20NClick = () => {
    let newText = text
      .split("")
      .filter(element => element.trim())
      .map((letter) => {
        if (letter === " ") {
          return " ";
        } else if (letter === "A") {
          return "Alpha";
        } else if (letter === "B") {
          return "Bravo";
        } else if (letter === "C") {
          return "Charlie";
        } else if (letter === "D") {
          return "Delta";
        } else if (letter === "E") {
          return "Echo";
        } else if (letter === "F") {
          return "Foxtrot";
        } else if (letter === "G") {
          return "Golf";
        } else if (letter === "H") {
          return "Hotel";
        } else if (letter === "I") {
          return "India";
        } else if (letter === "J") {
          return "Juliet";
        } else if (letter === "K") {
          return "Kilo";
        } else if (letter === "L") {
          return "Lima";
        } else if (letter === "M") {
          return "Mike";
        } else if (letter === "N") {
          return " November";
        } else if (letter === "O") {
          return "Oscar";
        } else if (letter === "P") {
          return "Papa";
        } else if (letter === "Q") {
          return "Quebec";
        } else if (letter === "R") {
          return "Romeo";
        } else if (letter === "S") {
          return "Sierra";
        } else if (letter === "T") {
          return "Tango";
        } else if (letter === "U") {
          return "Uniform";
        } else if (letter === "V") {
          return "Victor";
        } else if (letter === "W") {
          return "Whiskey";
        } else if (letter === "X") {
          return "Xray";
        } else if (letter === "Y") {
          return "Yankee";
        } else if (letter === "Z") {
          return "Zulu";
        }else if (letter === "a") {
          return "Alpha";
        } else if (letter === "b") {
          return "Bravo";
        } else if (letter === "c") {
          return "Charlie";
        } else if (letter === "d") {
          return "Delta";
        } else if (letter === "e") {
          return "Echo";
        } else if (letter === "f") {
          return "Foxtrot";
        } else if (letter === "g") {
          return "Golf";
        } else if (letter === "h") {
          return "Hotel";
        } else if (letter === "i") {
          return "India";
        } else if (letter === "j") {
          return "Juliet";
        } else if (letter === "k") {
          return "Kilo";
        } else if (letter === "l") {
          return "Lima";
        } else if (letter === "m") {
          return "Mike";
        } else if (letter === "n") {
          return " November";
        } else if (letter === "o") {
          return "Oscar";
        } else if (letter === "p") {
          return "Papa";
        } else if (letter === "q") {
          return "Quebec";
        } else if (letter === "r") {
          return "Romeo";
        } else if (letter === "s") {
          return "Sierra";
        } else if (letter === "t") {
          return "Tango";
        } else if (letter === "u") {
          return "Uniform";
        } else if (letter === "v") {
          return "Victor";
        } else if (letter === "w") {
          return "Whiskey";
        } else if (letter === "x") {
          return "Xray";
        } else if (letter === "y") {
          return "Yankee";
        } else if (letter === "z") {
          return "Zulu";
          
        }
        
        else {
          return letter;
        }
      })
      .join(' ');
      
    setText(newText)
  };
  
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "white" }}
      >
        <h2>{props.heading}</h2>
        <br />
        <div className="mb-5">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: "#526b59",
              color: "white"
              
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2 my-2"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2 my-2"
          onClick={handleInvClick}
        >
          Reverse
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-info mx-2 my-2"
          onClick={handleMeowClick}
        >
          Word to Number
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-2 my-2"
          onClick={handleA20NClick}
        >
          Phonetic Alphabet
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-success mx-2 my-2"
          onClick={handleBhawClick}
        >
          Add Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpClick}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2 my-2"
          onClick={handleCopyClick}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          "
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          " words and "{text.length}" characters
        </p>

        <p>
          "
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          " Minutes to read
        </p>
      </div>
    </>
  );
}
