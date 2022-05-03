import FarmDetails from './routes/Coffee/FarmDetails/FarmDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"
import ProductOverview from './routes/Coffee/ProductOverview/ProductOverview';
import ProductDetails from './routes/Coffee/ProductDetails/ProductDetails';
import TransactionHistory from './routes/Coffee/TransactionHistory/TransactionHistory';

// import init from "./js/initServices";

// init.initServices();

function App() {
  return (
    <div className="App h-screen grid grid-rows-[160px,1fr,100px] lg:grid-rows-[110px,1fr,80px]">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/farm-details" element={<FarmDetails />} />
          <Route exact path="/product-overview" element={<ProductOverview />} />
          <Route exact path="/product-details" element={<ProductDetails />} />
          <Route exact path="/transaction-history" element={<TransactionHistory />} />
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
