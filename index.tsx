import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import ReactDOM from 'react-dom'
import React, { useState } from 'react';

// the function converter is the main function in the scirpt as is converts km to miles 
function Converter(){

// this is a hook for user_input
  var [user_input, setUser_input] = useState(0);

// the handlechange function is used to pass the value of the userinput into the user_input state
  function handlechange(e){
    if (typeof e === "string"){
      Default();
    }
    else{
    setUser_input(e.target.value);
  }
  }


// finalanswer holds the value of what km to miles is 
  var finalanswer = Number(user_input) * 0.62137;
  return<div>
    <h1 id="hearder"> This is a km to Miles converter</h1>
    <input id="inputspace" onChange={handlechange} type="text" placeholder="Km to Miles type here..."></input><br/><br/>
    <p><span id="display"> {user_input + " kilometers in Miles is " + finalanswer.toFixed(2)}</span></p>

  </div>
}

// if the user enters a string this function is called
function Default(){
  return<div>
    <h1> invalid</h1>
  </div>

}
var defultproject = <Default />
ReactDOM.render(
  defultproject,
  document.getElementById("root")
);

var project = <Converter />
ReactDOM.render(
  project,
  document.getElementById("root")
);














