import { Component } from "react";
import Button from "../../Common/Button/Button";
import Link from "../../Common/Link/Link";
import ServiceFactory from "../../../factories/serviceFactory";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.connectWallet = this.connectWallet.bind(this);
  }
  connectWallet(e) {
    e.preventDefault();
    const ethereumService = ServiceFactory.get("ethereum-service");
    ethereumService.initWeb3();
  }
  render() {
    return (
      <header className="top-0 h-max my-4 flex flex-col px-4 md:px-12">
        <div className="flex flex-row justify-center items-center py-2">
          <h1 className="text-xl font-bold pb-1 content-center mr-auto invisible">
            Ketepa Coffeeeee
          </h1>
          <h1 className="text-4xl font-bold pb-1 content-center ">
            Ketepa Coffee
          </h1>
          <div className="flex ml-auto">
            <Button
              name="Connect Wallet"
              click={this.connectWallet}
              styles="bg-cyan-600 text-xs text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <Link link="/farm-details" name="Farm Details" />
          <Link link="/product-details" name="Product Details" />
          <Link link="/product-overview" name="Product Overview" />
          <Link link="/transaction-history" name="Transaction History" />
        </div>
      </header>
    );
  }
}

export default Header;
