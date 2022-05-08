import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";
import Response from "../../../components/Forms/Response/Response";

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
          <div>
            <h1>Fetch data 1</h1>
            Item SKU {this.props.responseBufferOne.itemSKU}
            <br />
            Item UPC {this.props.responseBufferOne.itemUPC}
            <br />
            Owner ID {this.props.responseBufferOne.ownerID}
            <br />
            Farmer ID {this.props.responseBufferOne.originFarmerID}
            <br />
            Farm Name {this.props.responseBufferOne.originFarmName}
            <br />
            Farm Information{" "}
            {this.props.responseBufferOne.originFarmInformation}
            <br />
            Farm Latitude {this.props.responseBufferOne.originFarmLatitude}
            <br />
            Farm Longitude {this.props.responseBufferOne.originFarmLongitude}
          </div>
          <div>
            <h1>Fetch data 2</h1>
            Item SKU {this.props.responseBufferOne.itemSKU}
            <br />
            Item UPC {this.props.responseBufferOne.itemUPC}
            <br />
            Owner ID {this.props.responseBufferOne.productID}
            <br />
            Farmer ID {this.props.responseBufferOne.productNotes}
            <br />
            Farm Name {this.props.responseBufferOne.productPrice}
            <br />
            Farm Information {this.props.responseBufferOne.itemState}
            <br />
            Farm Latitude {this.props.responseBufferOne.distributorID}
            <br />
            Farm Longitude {this.props.responseBufferOne.retailerID}
            <br />
            Farm Longitude {this.props.responseBufferOne.consumerID}
          </div>
        </form>
      </div>
    );
  }
}

export default ProductOverview;
