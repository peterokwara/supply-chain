import { Component } from "react";
class Response extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="text-xl font-bold">Fetch data 1</h1>
          Item SKU {this.props.responseBufferOne.itemSKU}
          <br />
          Item UPC {this.props.responseBufferOne.itemUPC}
          <br />
          Owner ID {this.props.responseBufferOne.ownerID}
          <br />
          Farmer ID {this.props.responseBufferOne.originFarmerID}
          <br />
          Farm Name {this.props.responseBufferOne.originFarmName}
          <br />
          Farm Information {this.props.responseBufferOne.originFarmInformation}
          <br />
          Farm Latitude {this.props.responseBufferOne.originFarmLatitude}
          <br />
          Farm Longitude {this.props.responseBufferOne.originFarmLongitude}
        </div>
        <div>
          <h1 className="text-xl font-bold">Fetch data 2</h1>
          Item SKU {this.props.responseBufferTwo.itemSKU}
          <br />
          Item UPC {this.props.responseBufferTwo.itemUPC}
          <br />
          Owner ID {this.props.responseBufferTwo.productID}
          <br />
          Farmer ID {this.props.responseBufferTwo.productNotes}
          <br />
          Farm Name {this.props.responseBufferTwo.productPrice}
          <br />
          Farm Information {this.props.responseBufferTwo.itemState}
          <br />
          Farm Latitude {this.props.responseBufferTwo.distributorID}
          <br />
          Farm Longitude {this.props.responseBufferTwo.retailerID}
          <br />
          Farm Longitude {this.props.responseBufferTwo.consumerID}
        </div>
      </div>
    );
  }
}

export default Response;
