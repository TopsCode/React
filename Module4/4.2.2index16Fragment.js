import {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react'

// import React, Fragment } from 'react';


function Glossary(props) {

  return (
    <dl>
      <>
        <p>I would</p>
        <p>really like</p>
        <p>to render</p>
        <p>an array</p>
      </>
      <Fragment>
        <p>to render</p>
        <p>an array</p> 
      </Fragment>
      <React.Fragment>
        <p>I would</p>
        <p>really like</p>
        <p>to render</p>
        <p>an array</p>
      </React.Fragment>
    </dl>
  );
}

ReactDOM.render(
  <Glossary />,
  document.getElementById('root')
);