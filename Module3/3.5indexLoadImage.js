import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';

import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);