import React,{useState} from 'react';
export default function TextForm(props){

     const [text,setText]=useState("enter text here");
     //text=newtext; //wrong way to change the text
     //setText("new text"); //correct way to change the text
     const[textColor,setTextColor]=useState("black");

    const handleUpClick=()=>
    {
        console.log("uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);


    }
    const handleLoClick=()=>
    {
        console.log("Lowecase was clicked",+text);
        let newtext=text.toLowerCase();
        setText(newtext);
     
    }
    const handleClearClick = () => {
        setText("");
    };
 
    const handleChangeColor=()=>
    {
        console.log("Color was clicked", text);
        setTextColor(textColor=== "black" ? "red" : "black");
    }
    const handleOnChange=(event)=>{
          console.log("on change");
          setText(event.target.value);
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/\s+/);
        setText(newText.join(" ").trim());
    }
    return(
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="12"></textarea>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
               
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter some text to preview it here."}</p>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}  >convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick} >convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleChangeColor} > change color of text</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy the text</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear the text</button>
            <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>handle extra spaces</button>
        </div>
    );
}
