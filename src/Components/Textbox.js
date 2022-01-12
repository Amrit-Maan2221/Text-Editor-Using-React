import React, { useState } from 'react'


export default function Textbox(props) {
    const [text, setText] = useState('Enter your Text Here');
    function handleOnChange(event) {
        setText(event.target.value);
    }
    function convertToUpperCase() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case", "success");
    }
    function convertToLowerCase() {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lower Case", "success");
    }
    function clearCase() {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    function handleCopy() {
        let textToCopy = document.getElementById("myBox");
        textToCopy.select();
        navigator.clipboard.writeText(textToCopy.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to ClipBoard", "success");
    }
    function removeExtraSpaces() {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }
    return (
        <>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button type="submit" disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={clearCase}>Clear Text</button>
                    <button type="submit" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
                    <button type="submit" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={convertToUpperCase}>Convert to UpperCase</button>
                    <button type="submit" disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={convertToLowerCase}>Convert to LowerCase</button>
                    <button type="submit" disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <ul>
                    <li>Words Count:{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</li>
                    <li>Character Count: {text.length}</li>
                    <li>Average Reading time: {0.008 * (text.split(" ").filter((element) => { return element.length !== 0 }).length)} min</li>
                </ul>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something to preview to preview it here"}</p>
            </div>
        </>
    )
}

