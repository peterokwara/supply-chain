import { Component } from "react";
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
