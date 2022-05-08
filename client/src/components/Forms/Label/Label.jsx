import { Component } from "react";

/**
 * Component which renders a text label
 */
class Label extends Component {
  render() {
    return (
      <label className="block font-bold text-base text-left my-2">
        {this.props.name}
      </label>
    );
  }
}

export default Label;
