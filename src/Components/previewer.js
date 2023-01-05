import React, {useState} from "react";
import Markdown from "marked-react";


const inputStyle = {
  position: "absolute",
  top: "-7px",
  left: "26rem",
  paddingBottom: "30rem"
};


function Previewer(props) {
  const [maxmise, setMaxmise] = useState(false);

  const handleClick = () => {
    if (props.data === ""){
      alert("Please Enter information in the Editor");
    } else {
    if ( maxmise === true){
      setMaxmise(false)
    } else {
      setMaxmise(true);
    }
  }
  }


    return (
        <div className="container-preview" style={maxmise ? inputStyle : {}}>
          <div className="title-preview" >Preview <div className="icon-preview"><button onClick={handleClick}><i class="fa-solid fa-maximize"></i></button></div></div>
          <div id="preview" >
            <Markdown>
              {props.data}
            </Markdown>
          </div>
      </div>
    );
}


export default Previewer;