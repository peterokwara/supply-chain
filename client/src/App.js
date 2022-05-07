import FarmDetails from "./routes/Coffee/FarmDetails/FarmDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import EthereumService from "./services/ethereumService";
import ServiceFactory from "./factories/serviceFactory";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import ProductOverview from "./routes/Coffee/ProductOverview/ProductOverview";
import ProductDetails from "./routes/Coffee/ProductDetails/ProductDetails";
import TransactionHistory from "./routes/Coffee/TransactionHistory/TransactionHistory";
import Modal from "./components/Common/Modal/Modal";

/**
 * Main application class
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      coffee: {
        sku: 0,
        upc: 0,
        ownerID: "0x0000000000000000000000000000000000000000",
        originFarmerID: "0x0000000000000000000000000000000000000000",
        originFarmName: null,
        originFarmInformation: null,
        originFarmLatitude: null,
        originFarmLongitude: null,
        productNotes: null,
        productPrice: 0,
        distributorID: "0x0000000000000000000000000000000000000000",
        retailerID: "0x0000000000000000000000000000000000000000",
        consumerID: "0x0000000000000000000000000000000000000000",
      },
      showSpinner: true,
      showModal: true,
    };

    this.onBuyItem = this.onBuyItem.bind(this);
    this.onShipItem = this.onShipItem.bind(this);
    this.onReceiveItem = this.onReceiveItem.bind(this);
    this.onPurchaseItem = this.onPurchaseItem.bind(this);
    this.onHarvestItem = this.onHarvestItem.bind(this);
    this.onProcessItem = this.onProcessItem.bind(this);
    this.onPackItem = this.onPackItem.bind(this);
    this.onSellItem = this.onSellItem.bind(this);
    this.onFetchItemBufferOne = this.onFetchItemBufferOne.bind(this);
    this.onFetchItemBufferTwo = this.onFetchItemBufferTwo.bind(this);
    this.setState = this.setState.bind(this);
  }

  setState = (state) => {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  };

  onHarvestItem = async (event) => {
    event.preventDefault();
    const ethereumService = ServiceFactory.get("ethereum-service");
    try {
      await ethereumService.harvestItem(
        this.state.coffee.upc,
        this.state.coffee.originFarmerID,
        this.state.coffee.originFarmerName,
        this.state.coffee.originFarmInformation,
        this.state.coffee.originFarmLatitude,
        this.state.coffee.originFarmLongitude,
        this.state.coffee.productNotes
      );
    } catch (error) {
      console.log(error);
    }
  };

  onProcessItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.processItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  onPackItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.packItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  onSellItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.sellItem(
        this.state.coffee.upc,
        this.state.coffee.productPrice
      );
    } catch (error) {
      console.log(error);
    }
  };

  onBuyItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.buyItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  onShipItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      // Add distributor?
      await ethereumService.shipItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  onReceiveItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      // Add retailer?
      await ethereumService.receiveItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };
  onPurchaseItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      // Add consumer?
      await ethereumService.purchaseItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  onFetchItemBufferOne = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      // Add consumer?
      await ethereumService.fetchItemBufferOne(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  onFetchItemBufferTwo = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      // Add consumer?
      await ethereumService.fetchItemBufferTwo(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ coffee: { ...this.state.coffee, [name]: value } });
  };

  /**
   * The component mounted
   */
  async componentDidMount() {
    // Register the ethereum service
    await ServiceFactory.register(
      "ethereum-service",
      () => new EthereumService()
    );

    const ethereumService = ServiceFactory.get("ethereum-service");
    await ethereumService.initWeb3();
    const accounts = await ethereumService.getMetamaskAccountID();
    this.state.coffee.ownerID = accounts[0];
    await ethereumService.initSupplyChain();
  }

  render() {
    return (
      <div className="App h-screen grid grid-rows-[160px,1fr,100px] lg:grid-rows-[110px,1fr,80px]">
        <Header />
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <FarmDetails
                  onPackItem={this.onPackItem}
                  onProcessItem={this.onProcessItem}
                  onHarvestItem={this.onHarvestItem}
                  onSellItem={this.onSellItem}
                  handleChange={this.handleChange}
                  appState={this.state.coffee}
                />
              }
            />
            <Route
              exact
              path="/product-overview"
              element={
                <ProductOverview
                  handleChange={this.handleChange}
                  appState={this.state.coffee}
                  onFetchItemBufferOne={this.onFetchItemBufferOne}
                  onFetchItemBufferTwo={this.onFetchItemBufferTwo}
                />
              }
            />
            <Route
              exact
              path="/product-details"
              element={
                <ProductDetails
                  onBuyItem={this.onBuyItem}
                  onShipItem={this.onShipItem}
                  onReceiveItem={this.onReceiveItem}
                  onPurchaseItem={this.onPurchaseItem}
                  handleChange={this.handleChange}
                  appState={this.state.coffee}
                />
              }
            />
            <Route
              exact
              path="/transaction-history"
              element={<TransactionHistory />}
            />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
