import React from 'react';
import "../styles.css";
import  App  from "../component/App";
class Home extends React.Component {
   render() {
      return (
         <div>
             <App/>
             <h1>HomePage</h1>

            {/* <ul>
               <li><a href='/'>Home</a>&nbsp;| &nbsp;</li>
               <li><a href='about'>About Us</a>&nbsp;| &nbsp;</li>
               <li><a href='contact'>Contact Us</a>&nbsp;| &nbsp;</li>
               <li><a href='test/else'>Test</a></li>
            </ul> */}
            
            <h1>Home</h1>
         </div>
      )
   }
}
export default Home;