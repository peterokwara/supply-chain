const Web3 = require("web3");
const TruffleContract = require("@truffle/contract");
const jsonSupplyChain = "../contracts/SupplyChain.json"

/**
 * Class to handle all ethereum transactions/communications.
 */
class EthereumService {
    constructor(appInfo) {
        appInfo = {
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

    // Initialize web3
    async initWeb3() {
        // Find or inject Web3 provider
        if (window.ethereum) {
            this.appInfo.web3Provider = window.ethereum;

            try {
                // Request account access
                await window.ethereum.enable();
            } catch (error) {

                // User denied account access
                console.error("User denied account access")
            }
            // Legacy dapp browsers..
        } else if (window.web3) {
            this.appInfo.web3Provider = window.web3.provider;
        }
        // If no injected web3 instance is detected, fall back to Ganache
        else {
            this.appInfo.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
        }

        await this.getMetamaskAccountID();

        await this.initSupplyChain();
    }

    // Get metamask account ID
    async getMetamaskAccountID(web3Provider) {
        const web3 = new Web3(web3Provider);

        // Retrieve accounts
        web3.eth.getAccounts((err, res) => {
            if (err) {
                console.log('Error: ', err)
            }
            console.log('getMetaskID: ', res)
            this.appInfo.metamaskAccountID = res[0];
        })
    }

    // Initialize the supply chain
    initSupplyChain() {
        const SupplyChainArtifact = jsonSupplyChain;
        this.appInfo.SupplyChain = TruffleContract(SupplyChainArtifact);
        this.appInfo.contracts.SupplyChain.setProvider(this.appInfo.web3Provider);
    }

    async harvestItem(
        productID,
        sku,
        upc,
        ownerID,
        originFarmerID,
        originFarmName,
        originFarmInformation,
        originFarmLatitude,
        originFarmLongitude,
        productNotes,
        itemState
    ) { }
    async processItem(upc) { }
    async packItem(upc) { }
    async sellItem(upc, price) { }
    async buyItem(upc) { }
    async shipItem(upc) { }
    async receiveItem(upc) { }
    async purchaseItem(upc) { }
    async fetchItemBufferOne(upc) { }
    async fetchItemBufferTwo(upc) { }
}

module.exports = EthereumService;
