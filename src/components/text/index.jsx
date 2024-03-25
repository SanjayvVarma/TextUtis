import React, { useState } from "react";
import './style.css';

const TextForm = (props) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpChange = () => {
    if (text.trim() !== "") {
      let newUppertext = text.toUpperCase();
      setText(newUppertext);
      props.showAlert("Converted to Uppercase", "success");
    } else {
      props.showAlert("There's Nothing To UpperCase Into TextBox", "warning");
    }
  };

  const handleLoChange = () => {
    if (text.trim() !== "") {
      let newLowertext = text.toLowerCase();
      setText(newLowertext);
      props.showAlert("Converted to Lowercase", "success");
    } else {
      props.showAlert("There's Nothing To LowerCase Into TextBox", "warning");
    }
  };

  const handleClear = () => {
    if (text.trim() !== "") {
      setText("");
      props.showAlert("Cleared the whole text", "danger");
    } else {
      props.showAlert("There's Nothing To Clear Into TextBox", "warning");
    }
  };

  const handleCopyFunction = () => {
    if (text.trim() !== "") {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied the text: " + text, "success");
    } else {
      props.showAlert("There's Nothing To Copy Into TextBox", "warning");
    }
  };

  const handleExtraSpaces = () => {
    if (text.trim() !== "") {
      let newText = text.split(/\s+/);
      setText(newText.join(" "));
      props.showAlert("All extra spaces are cleared", "success");
    } else {
      props.showAlert("There's Nothing Remove Spaces Into TextBox", "warning");
    }
  };

  return (
    <div className="main-text">
      <div className="container-text">
        <h1 className="text-text-center">{props.heading}</h1>
        <div className="text-area-text">
          <label htmlFor="text" className="text-form-label">
            <b>Enter Your Text Here:</b><br />
          </label>
          <textarea
            className="text-form-control"
            id="text"
            rows="7"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="text-btn-container">
          <button
            disabled={text.trim() === ""}
            className="btn-btn-text1"
            onClick={handleUpChange}
          >
            Convert Uppercase
          </button>
          <button
            disabled={text.trim() === ""}
            className="btn-btn-text2"
            onClick={handleLoChange}
          >
            Convert LowerCase
          </button>
          <button
            disabled={text.trim() === ""}
            className="btn-btn-text3"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            disabled={text.trim() === ""}
            className="btn-btn-text4"
            onClick={handleCopyFunction}
          >
            Copy To Clipboard
          </button>
          <button
            disabled={text.trim() === ""}
            className="btn-btn-text5"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="containermytext4">
        <h1>{props.summaryHead}</h1>
        <p>Number of words: {text.trim().split(/\s+/).length}</p>
        <p>Number of characters: {text.length}</p>
        <p>Reading Time: {0.008 * text.trim().split(/\s+/).length} minutes</p>
        <h3 className="text-center-text4">Preview Document</h3>
        <div className="content">
          <textarea
            className="form-control-text"
            id="text"
            rows="3"
            value={text}
            onChange={() => { }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TextForm;
