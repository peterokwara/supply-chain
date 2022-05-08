import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";

class ProductDetails extends Component {
  render() {
    return (
      <div className="overflow-auto">
        <PageHeading name="Product Details" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Label name="UPC" />
          <Input
            inputName="upc"
            inputValue={this.props.upc}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.upc}
          />
          <Label name="Product Notes" />
          <Input
            inputName="productNotes"
            inputValue={this.props.productNotes}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.productNotes}
          />
          <Label name="Price" />
          <Input
            inputName="productPrice"
            inputValue={this.props.productPrice}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.productPrice}
          />
          <Label name="Distributor ID" />
          <Input
            inputName="distributorID"
            inputValue={this.props.distributorID}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.distributorID}
          />
          <Label name="Retailer ID" />
          <Input
            inputName="retailerID"
            inputValue={this.props.retailerID}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.retailerID}
          />
          <div className="flex flex-row pt-2 flex-wrap">
            <Button
              buttonName="Buy"
              buttonClick={this.props.onBuyItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="Ship"
              buttonClick={this.props.onShipItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="Receive"
              buttonClick={this.props.onReceiveItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="Purchase"
              buttonClick={this.props.onPurchaseItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductDetails;
