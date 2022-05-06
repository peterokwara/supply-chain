const { ethers } = require("ethers");
const SupplyChainArtifact = require("../contracts/SupplyChain.json");

/**
 * Class to handle all ethereum transactions/communications.
 */
class EthereumService {
  constructor() {
    this.App = {
      web3Provider: null,
      contracts: {},
      emptyAddress: "0x0000000000000000000000000000000000000000",
      sku: 0,
      upc: 0,
      metamaskAccountID: "0x0000000000000000000000000000000000000000",
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
    };
  }

  /**
   * Initialize web3
   */
  async initWeb3() {
    // Find or inject Web3 provider
    if (window.ethereum) {
      // A Web3Provider wraps a standard Web3 provider, which is
      // what Metamask injects as window.ethereum into each page
      this.App.web3Provider = new ethers.providers.Web3Provider(
        window.ethereum
      );
      try {
        // Request account access
        await this.App.web3Provider.send("eth_requestAccounts", []);
      } catch (error) {
        // User denied account access
        console.error("User denied account access");
      }
      // Legacy dapp browsers..
    } else if (window.web3) {
      this.App.web3Provider = window.web3.provider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      this.App.web3Provider = new ethers.providers.JsonRpcProvider(
        "http://localhost:7545"
      );
    }
  }

  /**
   * Get Metamask Account ID
   */
  async getMetamaskAccountID() {
    // Retrieve accounts
    const accounts = await this.App.web3Provider.listAccounts();
    this.App.metamaskAccountID = accounts[0];
  }

  /**
   * Initialize the supply chain
   */
  async initSupplyChain() {
    // Connect to web3
    const signer = this.App.web3Provider.getSigner();
    const network = await this.App.web3Provider.getNetwork();
    const networkID = "5777";
    console.log(SupplyChainArtifact.networks[networkID]);
    const contractAddress = SupplyChainArtifact.networks[networkID].address;
    this.App.contracts.SupplyChain = new ethers.Contract(
      contractAddress,
      SupplyChainArtifact.abi,
      signer
    );
  }

  async harvestItem(
    upc,
    originFarmerID,
    originFarmName,
    originFarmInformation,
    originFarmLatitude,
    originFarmLongitude,
    productNotes
  ) {
    const { harvestItem } = this.App.contracts.SupplyChain;
    try {
      const transaction = await harvestItem(
        upc,
        this.App.metamaskAccountID,
        originFarmName,
        originFarmInformation,
        originFarmLatitude,
        originFarmLongitude,
        productNotes,
        {
          from: this.App.metamaskAccountID,
          gasLimit: 4712388,
          gasPrice: 100000000000,
        }
      );
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }
  async processItem(upc) {
    const { processItem } = this.App.contracts.SupplyChain;
    try {
      const transaction = await processItem(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 100000000000,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }
  async packItem(upc) {
    const { packItem } = this.App.contracts.SupplyChain;
    try {
      const transaction = await packItem(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 100000000000,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }

  async sellItem(upc, cost) {
    const { sellItem } = this.App.contracts.SupplyChain;
    const price = ethers.utils.formatUnits(cost, "wei");
    try {
      const transaction = await sellItem(upc, price, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 100000000000,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }
  async buyItem(upc) {}
  async shipItem(upc) {}
  async receiveItem(upc) {}
  async purchaseItem(upc) {}
  async fetchItemBufferOne(upc) {}
  async fetchItemBufferTwo(upc) {}
}

module.exports = EthereumService;
