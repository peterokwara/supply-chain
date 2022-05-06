import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";
import Spinner from "../../../components/Common/Spinner/Spinner";
import Modal from "../../../components/Common/Modal/Modal";
import ServiceFactory from "../../../factories/serviceFactory";

class FarmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { showSpinner: true, showModal: true };
  }
  toggleSpinner = () => {
    this.setState({ showSpinner: !this.state.showSpinner });
  };
  toggleModal = async (e) => {
    e.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };

  onHarvestItem = async (e) => {
    e.preventDefault();
    const productID = "111";
    const sku = "22";
    const upc = "1";
    const ownerID = "0x00000000000000000000000000000000000000";
    const originFarmerID = "0x00000000000000000000000000000000000000";
    const originFarmName = "James dean";
    const originFarmInformation = "disco disco";
    const originFarmLatitude = "23";
    const originFarmLongitude = "23";
    const productNotes = "buldog";
    const itemState = 0;

    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.getMetamaskAccountID();
      await EthereumService.initSupplyChain();
      await EthereumService.harvestItem(
        upc,
        originFarmerID,
        originFarmName,
        originFarmInformation,
        originFarmLatitude,
        originFarmLongitude,
        productNotes
      );
    } catch (error) {
      this.toggleSpinner();
    }
  };

  onProcessItem = async (e) => {
    e.preventDefault();

    const upc = "1";
    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.processItem(upc);
    } catch (error) {
      console.log(error);
    }
  };

  onPackItem = async (e) => {
    e.preventDefault();

    const upc = "1";
    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.packItem(upc);
    } catch (error) {
      console.log(error);
    }
  };

  onSellItem = async (e) => {
    e.preventDefault();

    const upc = "1";
    const price = "1";
    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.sellItem(upc, price);
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    const EthereumService = ServiceFactory.get("ethereum-service");
    await EthereumService.getMetamaskAccountID();
    await EthereumService.initSupplyChain();
  }
  render() {
    return (
      <div className="overflow-auto">
        <Spinner
          styles={this.state.showSpinner ? "hideSpinner" : "displaySpinner"}
        />
        <Modal
          styles={this.state.showModal ? "hideModal" : "displayModal"}
          click={this.toggleModal}
        />
        <PageHeading name="Farm Details" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Label name="Farmer ID" />
          <Input />
          <Label name="Farm Name" />
          <Input />
          <Label name="Farm Information" />
          <Input />
          <Label name="Farm Longitude" />
          <Input />
          <Label name="Farm Latitude" />
          <Input />
          <div className="flex flex-row pt-2 flex-wrap">
            <Button
              name="Harvest"
              click={this.onHarvestItem}
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Process"
              click={this.onProcessItem}
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Pack"
              click={this.onPackItem}
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="For Sale"
              click={this.onSellItem}
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FarmDetails;
