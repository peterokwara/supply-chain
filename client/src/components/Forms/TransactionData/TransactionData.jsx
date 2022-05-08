import { Component } from "react";
class TransactionData extends Component {
  render() {
    let harvestedEvents;
    let processedEvents;
    let forSaleEvents;
    let soldEvents;
    let shippedEvents;
    let receivedEvents;
    let purchaseEvents;

    // console.log(this.props.upcEvents);
    // /**
    //  * Render ForSale events
    //  */
    // if (this.props.upcEvents.ForSale) {
    //   const events = this.props.upcEvents.ForSale.map((events) => {
    //     return (
    //       <div keys={events.blockNumber} className="break-all">
    //         {events.blockHash}
    //       </div>
    //     );
    //   });

    //   forSaleEvents = (
    //     <div>
    //       <div className="text-xl font-bold">For Sale events</div>
    //       <p>
    //         {events}
    //         <br />
    //       </p>
    //     </div>
    //   );
    // }

    return <div>{forSaleEvents}</div>;
  }
}

export default TransactionData;
