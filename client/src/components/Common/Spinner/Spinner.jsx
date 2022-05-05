import { Component } from "react";
import "./Spinner.css";

class Spinner extends Component {
  render() {
    return (
      <div className={this.props.styles}>
        <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }
}

export default Spinner;
