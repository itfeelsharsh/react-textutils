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

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  const [text, setText] = useState('');
  return (
    <>
    <div className = "container">
        <h1>{props.heading}</h1>
            <div className="mb-5">
                  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>    
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
    </div>        

    <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
            {text.split(" ").length} words and {text.length} characters
        </p>

        <p>
        { 0.008 * text.split(" ").length } Minutes to read
        </p>

        <h3>Preview</h3>
        <p>{text}</p>

    </div>

    </>     
  )
}
