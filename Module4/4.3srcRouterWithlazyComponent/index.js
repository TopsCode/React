// import React from "react";
// import ReactDOM from "react-dom";
// import React, { lazy,Suspense  } from 'react';
// import { Spinner } from 'react-bootstrap';

// const OtherClass = React.lazy(() => import('./OtherClass'));
// function App() {
//   return (
//     <div className="App">
//       <h1>Test</h1>
//         <React.Suspense fallback={<Spinner />}>
// 	      <div>
// 	        <OtherClass />
// 	      </div>
// 	    </React.Suspense>
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom";

const Home = lazy(() => import('./component/Home'));
const About = lazy(() => import('./component/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
