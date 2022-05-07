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
    this.state = {
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
      },
      showSpinner: true,
      showModal: true,
    };

    this.onHarvestItem = this.onHarvestItem.bind(this);
    this.onProcessItem = this.onProcessItem.bind(this);
    this.onPackItem = this.onPackItem.bind(this);
    this.onSellItem = this.onSellItem.bind(this);
  }

  onHarvestItem = async (event) => {
    event.preventDefault();
    const ethereumService = ServiceFactory.get("ethereum-service");
    // const upc = 1;
    // const originFarmerID = 1;
    // const originFarmName = "bbb";
    // const originFarmInformation = "ddd";
    // const originFarmLatitude = "22";
    // const originFarmLongitude = "33";
    // const productNotes = "333";
    console.log(
      this.state.coffee.upc,
      this.state.coffee.originFarmerID,
      this.state.coffee.originFarmerName,
      this.state.coffee.originFarmInformation,
      this.state.coffee.originFarmLatitude,
      this.state.coffee.originFarmLongitude,
      this.state.coffee.productNotes
    );
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
      // await ethereumService.harvestItem(
      //   upc,
      //   originFarmerID,
      //   originFarmName,
      //   originFarmInformation,
      //   originFarmLatitude,
      //   originFarmLongitude,
      //   productNotes
      // );
    } catch (error) {
      console.log(error);
    }
  };

  onProcessItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.processItem(this.state.upc);
    } catch (error) {
      console.log(error);
    }

    this.props.appState(this.state.upc);
  };

  onPackItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.packItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }

    this.props.appState(this.state.upc);
  };

  onSellItem = async (event) => {
    event.preventDefault();

    const ethereumService = ServiceFactory.get("ethereum-service");

    try {
      await ethereumService.sellItem(
        this.state.coffee.upc,
        this.state.coffee.price
      );
    } catch (error) {
      console.log(error);
    }

    this.props.appState(this.state.upc);
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
    await ethereumService.getMetamaskAccountID();
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
              element={<ProductOverview />}
            />
            <Route exact path="/product-details" element={<ProductDetails />} />
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
