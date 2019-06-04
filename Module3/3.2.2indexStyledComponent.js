import ReactDOM from 'react-dom';
import React,{Component} from "react";
import styled from "styled-components"; // import Styled components from styled-components


//Define styled.div START use Acute/back-quote for warap styled div/tags. 
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: aqua;`;
//Define styled.div END


// Applying styled 'Wrapper' component it will generate div with style  
class HelloWorld extends Component {
  render() {
    return (
      <Wrapper>
        <p>Hello World</p>
      </Wrapper>
    );
  }
}

ReactDOM.render( <HelloWorld />, document.getElementById("root"));