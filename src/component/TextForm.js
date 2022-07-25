import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
   const[text, SetText] = useState("");

   const HandleUpText =  () =>{
    let newtext = text.toUpperCase();
    SetText(newtext);
    props.showAlert("Convert to UpperCase", "success");
   }

   const HandleLoText = () =>{
    let newText = text.toLowerCase();
    SetText(newText);
    props.showAlert("Convert to LowerCase", "success");
   }

   const handleOnChange = (event) =>{
    SetText(event.target.value);
   }

   const HandleClear = () =>{
    SetText("");
    props.showAlert("Text Cleared", "success");
   }

   const HandleCopy = () =>{
    let text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Copied to Clipboard", "success");
     }

  return (
   <>
<div className="container" style={{color: props.mood === 'dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <div className='mb-3'>
  <textarea className="form-control" id='myBox' rows="8" value={text} onChange ={handleOnChange} style={{backgroundColor : props.mood === 'dark'?'#11214c':'white', color: props.mood === 'dark'?'white':'black'}}>
  </textarea>
  </div>
  <button disabled={text.length===0} onClick={HandleUpText} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
  <button disabled={text.length===0} onClick={HandleLoText} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
  <button disabled={text.length===0} onClick={HandleClear} className="btn btn-primary mx-1 my-1">Clear Text</button>
  <button disabled={text.length===0} onClick={HandleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>

</div>

 <div className='container' style={{color: props.mood === 'dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(/\s+/).filter((element) =>{return element.length !==0}).length} words and {text.length} characters</p>
  <p className="my-3">{0.008 * text.split(" ").filter((element) =>{return element.length !==0}).length} Minutes to Read</p>
  <h2>Preview</h2>
  <p>{text.length === 0?"Noting to Preview":text}</p>
 </div>
</>
  )
}
