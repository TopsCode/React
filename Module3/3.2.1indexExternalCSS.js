import './DottedBox.css'; // importing external CSS
import ReactDOM from 'react-dom';
import React,{Component} from "react";
import styled from "styled-components"; // import Styled components from styled-components


const Box = () => (
  <div > 
    <p >Get started with inline style</p>
  </div>
);

ReactDOM.render( <Box />, document.getElementById("root"));