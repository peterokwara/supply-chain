import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";
import Spinner from "../../../components/Common/Spinner/Spinner";
import Modal from "../../../components/Common/Modal/Modal";
import ServiceFactory from "../../../factories/serviceFactory";

class FarmDetails extends Component {
  toggleSpinner = () => {
    this.setState({ showSpinner: !this.state.showSpinner });
  };
  toggleModal = async (e) => {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="overflow-auto">
        {/* <Spinner
          styles={this.state.showSpinner ? "hideSpinner" : "displaySpinner"}
        />
        <Modal
          styles={this.state.showModal ? "hideModal" : "displayModal"}
          click={this.toggleModal}
        /> */}
        <PageHeading name="Farm Details" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Label name="UPC" />
          <Input
            inputName="upc"
            inputValue={this.props.upc}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.upc}
          />
          <Label name="Farmer ID" />
          <Input
            inputName="originFarmerID"
            inputValue={this.props.originFarmerID}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.originFarmerID}
          />
          <Label name="Farm Name" />
          <Input
            inputName="originFarmerName"
            inputValue={this.props.originFarmerName}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.originFarmerName}
          />
          <Label name="Farm Information" />
          <Input
            inputName="originFarmInformation"
            inputValue={this.props.originFarmInformation}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.originFarmInformation}
          />
          <Label name="Farm Longitude" />
          <Input
            inputName="originFarmLongitude"
            inputValue={this.props.originFarmLongitude}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.originFarmLongitude}
          />
          <Label name="Farm Latitude" />
          <Input
            inputName="originFarmLatitude"
            inputValue={this.props.originFarmLatitude}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.originFarmLatitude}
          />
          <Label name="Price" />
          <Input
            inputName="productPrice"
            inputValue={this.props.productPrice}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.productPrice}
          />
          <Label name="Product Notes" />
          <Input
            inputName="productNotes"
            inputValue={this.props.productNotes}
            inputChange={this.props.handleChange}
            inputDefault={this.props.appState.productNotes}
          />
          <div className="flex flex-row pt-2 flex-wrap">
            <Button
              buttonName="Harvest"
              buttonClick={this.props.onHarvestItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="Process"
              buttonClick={this.props.onProcessItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="Pack"
              buttonClick={this.props.onPackItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              buttonName="For Sale"
              buttonClick={this.props.onSellItem}
              buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FarmDetails;
