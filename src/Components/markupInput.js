import React from "react";
import { useState } from "react";
import  Previewer from "./previewer.js";


function  MarkupInput() {
    const [maxmise, setMaxmise] = useState("");
    const [input, setInput] = useState("");

    const handleMaxmise = () => {
      if (input === ""){
        alert("Please Enter information in the Editor")
      } else {
      if (maxmise === true){
        setMaxmise(false)
      } else{
        setMaxmise(true);
      }
    }
    }

   const handleChange = (e) => {
     e.preventDefault()
     setInput(e.target.value)
   }


    return (
      <div>
      <div className="container">

          <div className="title-editor">Editor<div className="icon-editor"><button href="" onClick={handleMaxmise} ><i class="fa-solid fa-maximize" ></i></button></div></div>
          <textarea id="editor" style={ maxmise ? {height: "100vh" } : {height: "200px"}} onChange={handleChange}>
          </textarea>

      </div>
      <Previewer data={input}/>
      </div>
    );
}


export default MarkupInput;