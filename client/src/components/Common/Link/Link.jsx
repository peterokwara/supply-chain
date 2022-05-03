import { Component } from "react"
class Link extends Component {
    render() {
        return (
            <a className="px-2 text-xs" href={this.props.link}>{this.props.name}</a>
        );
    }
}

export default Link;
