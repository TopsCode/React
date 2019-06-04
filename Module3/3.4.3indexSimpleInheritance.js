// Example of inheritance 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Define parent class to use it in child 
class ParentClass extends React.Component{
    render(){
        return(<div>
            test
            <ChildClass/>
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
                    <h2>Technologies</h2>
                </div>
            </div>
            );
    }
}

ReactDOM.render(<ParentClass />, document.getElementById('root'));
