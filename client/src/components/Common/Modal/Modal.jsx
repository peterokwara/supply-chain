import { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <div className={this.props.styles}>
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    );
  }
}

export default Modal;
