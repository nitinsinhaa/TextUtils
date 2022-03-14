import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //setText("new text");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCaClick = () => {
    const text2 = text.split(" ");
    for(let i = 0;i<text2.length;i++){
        text2[i] = text2[i].charAt(0).toUpperCase() + text2[i].slice(1).toLowerCase();
    }
    let newText = text2.join(" ");
    setText(newText);
    props.showAlert("Texts are capitalized", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Texts are cleared", "success");
  };
  

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1 className="my-3" style={{color: props.mode === "light" ? "#0f0214" : "white"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: 
              props.mode === "dark" ? "grey" : "white", color: 
              props.mode === "dark" ? "white" : "#0f0214"
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCaClick}>
          Capitalize text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === "light" ? "#0f0214" : "white"}} >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes reading</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:'Enter something to preview here'}</p>
      </div>
    </>
  );
}
