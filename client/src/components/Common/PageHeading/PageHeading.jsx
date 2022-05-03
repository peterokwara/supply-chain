import { Component } from "react"
class PageHeading extends Component {
    render() {
        return (
            <h2 className="flex font-bold text-2xl mb-6 justify-center">{this.props.name}</h2>
            );
    }
}

export default PageHeading;
