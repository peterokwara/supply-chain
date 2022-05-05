import { Component } from "react";
import Button from "../../Common/Button/Button";
import Link from "../../Common/Link/Link";
import ServiceFactory from "../../../factories/serviceFactory";
import Menu from "../Menu/Menu";

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
          <Menu />
          <h1 className="text-xl font-bold pb-1 content-center mr-auto invisible">
            Ketepa Coffee
          </h1>
          <h1 className="text-xl font-bold pb-1 content-center ">
            Ketepa Coffee
          </h1>
          <div className="flex ml-auto">
            <Button
              name="Connect Wallet"
              click={this.connectWallet}
              styles="bg-cyan-600 text-xs text-white mx-2 px-4 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </div>
        <div className="hidden md:flex md:flex-row lg:flex lg:flex-row justify-center">
          <Link
            styles="px-2 text-xs"
            link="/farm-details"
            name="Farm Details"
          />
          <Link
            styles="px-2 text-xs"
            link="/product-details"
            name="Product Details"
          />
          <Link
            styles="px-2 text-xs"
            link="/product-overview"
            name="Product Overview"
          />
          <Link
            styles="px-2 text-xs"
            link="/transaction-history"
            name="Transaction History"
          />
        </div>
      </header>
    );
  }
}

export default Header;
