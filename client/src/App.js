import FarmDetails from "./routes/Coffee/FarmDetails/FarmDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import ServiceFactory from "./factories/serviceFactory";
import EthereumService from "./services/ethereumService";
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
        productID: "",
        sku: "",
        upc: "",
        ownerID: "",
        originFarmerID: "",
        originFarmerName: "",
        originFarmInformation: "",
        originFarmLatitude: "",
        originFarmLongitude: "",
        productNotes: "",
        itemState: "",
        productPrice: "",
      },
      showSpinner: true,
      showModal: true,
    };
  }

  onHarvestItem = async (event) => {
    event.preventDefault();
    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.getMetamaskAccountID();
      await EthereumService.initSupplyChain();
      await EthereumService.harvestItem(
        this.state.coffee.upc,
        this.state.coffee.originFarmerID,
        this.state.coffee.originFarmName,
        this.state.coffee.originFarmInformation,
        this.state.coffee.originFarmLatitude,
        this.state.coffee.originFarmLongitude,
        this.state.coffee.productNotes
      );
    } catch (error) {
      console.log(error);
    }

    this.props.appState(this.state.upc);
  };

  onProcessItem = async (event) => {
    event.preventDefault();

    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.processItem(this.state.upc);
    } catch (error) {
      console.log(error);
    }

    this.props.appState(this.state.upc);
  };

  onPackItem = async (event) => {
    event.preventDefault();

    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.packItem(this.state.coffee.upc);
    } catch (error) {
      console.log(error);
    }

    this.props.appState(this.state.upc);
  };

  onSellItem = async (event) => {
    event.preventDefault();

    const EthereumService = ServiceFactory.get("ethereum-service");

    try {
      await EthereumService.sellItem(
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
            <Route exact path="/farm-details" element={<FarmDetails />} />
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
