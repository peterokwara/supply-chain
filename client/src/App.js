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
/**
 * Main application class
 */
class App extends Component {
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
            <Route exact path="/" element={<FarmDetails />} />
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
