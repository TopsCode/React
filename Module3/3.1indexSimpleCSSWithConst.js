import React from "react";
import ReactDOM from 'react-dom';

//Defining Constant for Styling  
const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

//Use contant in style attribute

const Box = () => (
  <div style={divStyle}> 
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

ReactDOM.render( <Box />, document.getElementById("root"));