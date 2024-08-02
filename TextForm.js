import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
        
        let newText = " ";
        setText(newText);
        props.showAlert("Clear text","success");
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text","success");
    };
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove all the extra spaces from the text","success");
        
    };
    const [text,setText]=useState("");
  return (
    <>
    <div className="container" >
       
      
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
          
        ></textarea>
        <button disabled={text.length===0} className="btn btn-primary mt-3 my-1 " onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-warning mt-3 mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-danger mt-3 mx-0 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-success mt-3 mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-dark mt-3 mx-0 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read</p>

        <h1>Preview</h1>
        <p>{text.length>0?text:"Nothing to Preview🙃"}</p>

    </div>
    </>
  );
}

