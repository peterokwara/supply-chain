import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";
import FetchData from "../../../components/Forms/FetchData/FetchData";
import Response from "../../../components/Forms/FetchData/FetchData";

class ProductOverview extends Component {
  render() {
    return (
      <div className="overflow-auto">
        <PageHeading name="Product Overview" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Label name="SKU" />
          <Input
            inputName="sku"
            inputValue={this.props.sku}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.sku}
          />
          <Label name="UPC" />
          <Input
            inputName="upc"
            inputValue={this.props.upc}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.upc}
          />
          <Label name="Current Owner ID" />
          <Input
            inputName="ownerID"
            inputValue={this.props.ownerID}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.ownerID}
          />
          <div className="flex flex-row pt-2 flex-wrap">
            <Button
              buttonName="Fetch Data 1"
              buttonClick={this.props.onFetchItemBufferOne}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="Fetch Data 2"
              buttonClick={this.props.onFetchItemBufferTwo}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
          <FetchData
            responseBufferOne={this.props.responseBufferOne}
            responseBufferTwo={this.props.responseBufferTwo}
          />
        </form>
      </div>
    );
  }
}

export default ProductOverview;
