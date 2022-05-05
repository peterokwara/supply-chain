import { Component } from "react";
class Link extends Component {
  render() {
    return (
      <a className={this.props.styles} href={this.props.link}>
        {this.props.name}
      </a>
    );
  }
}

export default Link;
