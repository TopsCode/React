import React from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please select value from dropdown.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>


         <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);