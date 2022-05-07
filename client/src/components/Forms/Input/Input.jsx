import { Component } from "react";
class Input extends Component {
  render() {
    return (
      <input
        className="w-full shadow appearance-none border rounded py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={this.props.inputValue}
        onChange={this.props.inputChange}
        name={this.props.inputName}
        defaultValue={this.props.inputDefault}
        onBlur={this.props.handleBlur}
      ></input>
    );
  }
}

export default Input;
