const { ethers } = require("ethers");
const SupplyChainArtifact = require("../contracts/SupplyChain.json");

/**
 * Class to handle all ethereum transactions/communications.
 */
class EthereumService {
  constructor() {
    // Default values
    this.App = {
      web3Provider: null,
      contracts: {},
      metamaskAccountID: "0x0000000000000000000000000000000000000000",
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

    // Use this when running ganache
    const networkID = "5777";

    // Use this when running on rinkeby and comment out the other
    // const contractAddress = SupplyChainArtifact.networks[network].address;

    const contractAddress = SupplyChainArtifact.networks[networkID].address;

    // Get an instance of the contract
    this.App.contracts.SupplyChain = new ethers.Contract(
      contractAddress,
      SupplyChainArtifact.abi,
      signer
    );
  }

  /**
   * Interact with the deployed contract to harvest coffee
   * @param  upc Universal product code for the harvested coffee
   * @param  originFarmerID Original address of the farmer
   * @param  originFarmName Name of the farmer
   * @param  originFarmInformation Information about the farm
   * @param  originFarmLatitude Latitude coordinates of the farm
   * @param  originFarmLongitude Longitude coordinates of the farm
   * @param  productNotes   Notes about the product
   */
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

    // Send transaction to the smart contract
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

  /**
   * Interact with the deployed contract to process coffee
   * @param upc Universal product code for the harvested coffee
   */
  async processItem(upc) {
    const { processItem } = this.App.contracts.SupplyChain;

    // Send transaction to the smart contract
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

  /**
   * Interact with the deployed smart contract to pack coffee
   * @param upc Universal product code for the harversted coffee
   */
  async packItem(upc) {
    const { packItem } = this.App.contracts.SupplyChain;

    // Send transaction to the smart contract
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

  /**
   * Interact with the deployed smart contract to mark coffee as sold
   * @param upc Universal code for the harvested coffee
   * @param cost Price for the coffee to be sold
   */
  async sellItem(upc, cost) {
    const { sellItem } = this.App.contracts.SupplyChain;

    // Price has to be in BigInt for it to work
    let price = cost * 1000000000000000000;
    price = price.toString();

    // Send transaction to the smart contract
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

  /**
   * Interact with the deployed smart contract to buy coffee
   * @param upc Universal code for the harvested coffee
   * @param cost Price for the coffee to be sold
   */
  async buyItem(upc, cost) {
    const { buyItem } = this.App.contracts.SupplyChain;

    // The value has to be in BigInt for it to work
    let walletValue = cost * 1000000000000000000;
    walletValue = walletValue.toString();

    // Send transaction to the smart contract
    try {
      const transaction = await buyItem(upc, {
        from: this.App.metamaskAccountID,
        value: walletValue,
        gasLimit: 4712388,
        gasPrice: 0,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Interact with the deployed smart contract to mark coffee as shipped
   * @param upc Universl code for the harvested coffee
   */
  async shipItem(upc) {
    const { shipItem } = this.App.contracts.SupplyChain;

    // Send transaction to the smart contract
    try {
      const transaction = await shipItem(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 0,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Interact with the deployed smart contract to mark coffee as received
   * @param upc Universl code for the harvested coffee
   */
  async receiveItem(upc) {
    const { receiveItem } = this.App.contracts.SupplyChain;

    // Send transaction to the smart contract
    try {
      const transaction = await receiveItem(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 0,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Interact with the deployed smart contract to mark coffee as purchased
   * @param upc Universal code for the harvested coffee
   */
  async purchaseItem(upc) {
    const { purchaseItem } = this.App.contracts.SupplyChain;

    // Send transaction to the smart contract
    try {
      const transaction = await purchaseItem(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 0,
      });
      await transaction.wait();
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Fetch buffer data from the blockchain using upc (buffer one)
   * @param upc Universal code for the harvested coffee
   * @returns Fetched data
   */
  async fetchItemBufferOne(upc) {
    const { fetchItemBufferOne } = this.App.contracts.SupplyChain;
    let transaction;

    // Send transaction to the smart contract
    try {
      transaction = await fetchItemBufferOne(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 0,
      });
    } catch (error) {
      console.log(error);
    }

    // Return the transaction data
    return transaction;
  }

  /**
   * Fetch buffer data from the blockchain using upc (buffer two)
   * @param upc Universal code for the harvested coffee
   * @returns Fetched data
   */
  async fetchItemBufferTwo(upc) {
    const { fetchItemBufferTwo } = this.App.contracts.SupplyChain;
    let transaction;

    // Send transaction to the smart contract
    try {
      transaction = await fetchItemBufferTwo(upc, {
        from: this.App.metamaskAccountID,
        gasLimit: 4712388,
        gasPrice: 0,
      });
      // await transaction.wait();
      console.log(transaction);
    } catch (error) {
      console.log(error);
    }

    // Return the transaction data
    return transaction;
  }

  /**
   * Fetches events from the deployed smart contract
   * @returns an array object containing events for harvested, processed, forsale, sold, shipped, received, purchased
   */
  async fetchEvents() {
    let events = {
      Harvested: [],
      Processed: [],
      ForSale: [],
      Sold: [],
      Shipped: [],
      Received: [],
      Purchased: [],
    };

    // Fetch harvested events
    const eventFilterHarvested =
      await this.App.contracts.SupplyChain.filters.Harvested();
    events.Harvested = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterHarvested
    );

    // Fetch processed events
    const eventFilterProcessed =
      await this.App.contracts.SupplyChain.filters.Processed();
    events.Processed = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterProcessed
    );

    // Fetch for sale events
    const eventFilterForSale =
      await this.App.contracts.SupplyChain.filters.ForSale();
    events.ForSale = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterForSale
    );

    // Fetch sold events
    const eventFilterSold = await this.App.contracts.SupplyChain.filters.Sold();
    events.Sold = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterSold
    );

    // Fetch shipped events
    const eventFilterShipped =
      await this.App.contracts.SupplyChain.filters.Shipped();
    events.Shipped = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterShipped
    );

    // Fetch received events
    const eventFilterReceived =
      await this.App.contracts.SupplyChain.filters.Received();
    events.Received = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterReceived
    );

    // Fetch purchase events
    const eventFilterPurchased =
      await this.App.contracts.SupplyChain.filters.Purchased();
    events.Purchased = await this.App.contracts.SupplyChain.queryFilter(
      eventFilterPurchased
    );

    // Return all the events
    return events;
  }
}

module.exports = EthereumService;
