import React, { useState } from 'react'

export default function Textform(promps) {
    const handelUpperCase=()=>{
        console.log('Upper Case was clicked')
        let newText=text.toUpperCase();
        setText(newText)
        promps.showAlert("Converted to upper case","success")
    }
    const handelLowerCase=()=>{
      console.log('Lower Case was clicked')
      let newText=text.toLowerCase();
      setText(newText)
      promps.showAlert("Converted to lower case","success")
    }
    const handelDeleteCase=()=>{
      console.log('Text was deleted')
      let newText='';
      setText(newText)
      promps.showAlert("Text was deleted","warning")
    }
    const handelCopy=()=>{
      console.log('Copy was clicked')
      var text=document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        promps.showAlert("Text is copied","success")
    }
    const handelExtraSpace=()=>{
      let newtext=text.split(/[ ]+/)
      setText(newtext.join(" "))
      promps.showAlert("Extra Spaces were removed ","success")
    }
  
    const handelEnvent=(event)=>{
        setText(event.target.value)
        

    }
 const[text,setText]=useState()
 const wordCount = text ? text.split(/\s+/).filter((word) => word.length > 0).length : 0;
    const charCount = text ? text.length : 0;
  return (
    <>
    <div>
    
  <div className="container ">
    <h1>{promps.text}</h1>
    <textarea className="form-control" rows="8" onChange={handelEnvent} placeholder='Enter your text here' value={text}  id='myBox'></textarea>
  </div>
  <br></br>
  <button type="button" className="btn btn-primary" onClick={handelUpperCase} style={{ marginRight: '10px' }}>Convert to Uppercase</button>
  <button type="button" className="btn btn-primary" onClick={handelLowerCase} style={{ marginRight: '10px' }}>Convert to Lowercase</button>
  <button type="button" className="btn btn-primary" onClick={handelExtraSpace} style={{ marginRight: '10px' }}>Remove Extra Spaces</button>
  <button type="button" className="btn btn-success" onClick={handelCopy} style={{ marginRight: '10px' }}>Copy</button>

  <button type="button" className="btn btn-danger" onClick={handelDeleteCase} >Clear Text</button>


    </div>
    <div className='container my-4'>
      <h3>Your Text Summary</h3>
      <p>It has {wordCount} words and {charCount} characters .</p> 
      
    </div>
   
    </>
  )
}
