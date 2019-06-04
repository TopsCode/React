// Inheritance with Props 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Usning Child class with props 
// we can use props 
class ParentClass extends React.Component{
    render(){
        return(<div>
                test
                <ChildClass username="TOPS" Password="123"/>
            </div>);
    }
}
class ChildClass extends React.Component{
    render(){
        return(
            <div>
            <div>
                Test
            </div>
            <div>
                <h3>User Name is {this.props.username}</h3>
                <h3>Password is {this.props.Password}</h3>
                <h2>Technologies</h2>
            </div>
            </div>
            );
    }
}

ReactDOM.render(<ParentClass />, document.getElementById('root'));
