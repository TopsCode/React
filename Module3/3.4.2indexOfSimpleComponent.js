// Inheritance with Props 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// define simple Component with costom massage 
class SimpleComponent extends React.Component{
    render(){
        return(<div>Tops Technologies</div>);
    }
}
ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
