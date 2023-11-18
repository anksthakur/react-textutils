// use rfc(React Function based Component) to import react
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked"+ text);
        let newText = text.toUpperCase();//.toUpperCase javaScript ka function hai
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = ()=>{
        // console.log("Lowercase was Clicked"+ text);
        let newText = text.toLowerCase();//.toLowerCase javaScript ka function hai
        setText(newText)
        props.showAlert("Converted to LowerCase","success")
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);// value ko add krne ke ley event.target.value .
    }
    const handleExtraSpace =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert(" Extra Space Removed Successfully","success")
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied Successfully","success")
    }
    const [text,setText] = useState('');
    // setText("new text"); // correct way to change the state .
    // text = "new text"; //wrong way to change the state .
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#042747'}}>
        <h1 >{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042747'}} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
</div>
{/* second container bnaya  */}
<div className="container my-2" style={{color:props.mode==='dark'?'white':'#042747'}}>
<h2>Your text summary </h2>

{/* words kitne hai uhske ley {text.split(" ").length} and characters kitne hai uhske ley {text.length} */}
<p>{text.split(" ").length} words and {text.length} characters</p>
{/* kitni der m in words ko pad skte hai uhske ley */}
<p><b>{0.008*text.split(" ").length}Minutes read</b></p>

{/* text ko preview krne ke ley */}
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something in the textbox to preview it here ....... "}</p>
</div>
</>
  )
}
