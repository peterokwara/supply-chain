import { Component } from "react";
class Button extends Component {
  render() {
    return (
      <button className={this.props.styles} onClick={this.props.click}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
