import { Component } from "react";
/**
 * Component which renders a button
 */
class Button extends Component {
  render() {
    return (
      <button
        className={this.props.buttonStyle}
        onClick={this.props.buttonClick}
      >
        {this.props.buttonName}
      </button>
    );
  }
}

export default Button;
