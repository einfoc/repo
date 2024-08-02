// import { useState } from "react";
// import React,{useState} from "react";

export default function About(props){


    // const[myStyle,setMyStyle] =useState(
    //     {color: "black",
    //     backgroundColor: "white",
        
    // });
    // const[btnText,setBtnText] = useState("Enable Dark Mode")
    //  let toggleStyle = ()=>{

    //    if( myStyle.color==="black" ){
    //     setMyStyle({
    //         color: "white",
    //         backgroundColor: "black",
    //         border: "2px solid white"
    //     })
    //     setBtnText("Enable Light Mode");
    //    }
    //    else{
    //     setMyStyle({
    //         color: "black",
    //         backgroundColor: "white",
    //     })
    //     setBtnText("Enable Dark Mode")
    //    }
    // };

    let myStyle ={
        color:props.mode==='dark' ? "white" : "black",
        backgroundColor:props.mode==='dark' ? "black" : "white",
        border:"2px solid",
        borderColor:'dark' ? "white" : "black"
    }
    return (
        <>
        <div className="border border-dark w-100">
        <h1 className="border border-dark"  style={{  color:props.mode==='dark' ? "white" : "black"}} >About Us</h1>
          <div className="container" style={{  color:props.mode==='dark' ? "white" : "black"}}>
            <div ClassName="accordion" id="accordionExample" style={myStyle}>
              <div ClassName="accordion-item">
                <h2 ClassName="accordion-header">
                  <button
                    ClassName="accordion-button"
                    style={myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Analyze your text
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  ClassName="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div ClassName="accordion-body" style={myStyle}>
                    <strong>TextUtil gives you a way to analyze your text quickly and effectiently.Be it word count ,character count and so on</strong> It is
                  
                  </div>
                </div>
              </div>
              <div ClassName="accordion-item" style={myStyle}>
                <h2 ClassName="accordion-header">
                  <button
                    ClassName="accordion-button collapsed "
                    style={myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Free to use
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  ClassName="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div ClassName="accordion-body" style={myStyle}>
                    <strong>TextUtil is a free character counter tool that provides instant character count and word count statistics for a given
                        text.TextUtil reports the number of word and character .Thus it is suitable for writing text with  word/character limit.
                        </strong> 
                  
                  </div>
                </div>
              </div>
              <div ClassName="accordion-item">
                <h2 ClassName="accordion-header">
                  <button
                    ClassName="accordion-button collapsed"
                    style={myStyle}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Browser Compatible
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  ClassName="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div ClassName="accordion-body" style={myStyle}>
                    <strong>This word counter software work in any web browser such as,firefox,Internet Exploree,Safari,Opera,Chrome,Google.
                        It suits to count character in facebook ,blog ,books excel document ,pdf document ,essays,etc.
                        </strong>
                   
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="container">
              <button onClick={toggleStyle} type="button" className="btn btn-primary">
                {btnText}
              </button>
            </div> */}
          </div>
            
        </div>
       
        </>
    );
    
} 
 
