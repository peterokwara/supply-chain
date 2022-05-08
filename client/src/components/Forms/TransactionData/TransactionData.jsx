import { Component } from "react";

/**
 * Component which renders transaction data
 */
class TransactionData extends Component {
  render() {
    let harvestedEvents;
    let processedEvents;
    let forSaleEvents;
    let soldEvents;
    let shippedEvents;
    let receivedEvents;
    let purchasedEvents;

    /**
     * Render Harvested events
     */
    if (this.props.upcEvents.Harvested) {
      const events = this.props.upcEvents.Harvested.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      harvestedEvents = (
        <div>
          <h1 className="text-xl font-bold">Harvested events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }

    /**
     * Render Processed events
     */
    if (this.props.upcEvents.Processed) {
      const events = this.props.upcEvents.Processed.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      processedEvents = (
        <div>
          <h1 className="text-xl font-bold">Processed events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }

    /**
     * Render ForSale events
     */
    if (this.props.upcEvents.ForSale) {
      const events = this.props.upcEvents.ForSale.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      forSaleEvents = (
        <div>
          <h1 className="text-xl font-bold">For Sale events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }

    /**
     * Render Sold events
     */
    if (this.props.upcEvents.Sold) {
      const events = this.props.upcEvents.Sold.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      soldEvents = (
        <div>
          <h1 className="text-xl font-bold">Sold events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }

    /**
     * Render Shipped events
     */
    if (this.props.upcEvents.Shipped) {
      const events = this.props.upcEvents.Shipped.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      shippedEvents = (
        <div>
          <h1 className="text-xl font-bold">Shipped events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }

    /**
     * Render Received events
     */
    if (this.props.upcEvents.Received) {
      const events = this.props.upcEvents.Received.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      receivedEvents = (
        <div>
          <h1 className="text-xl font-bold">Received events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }

    /**
     * Render Purchased events
     */
    if (this.props.upcEvents.Purchased) {
      const events = this.props.upcEvents.Purchased.map((events) => {
        return (
          <div keys={events.blockNumber} className="break-all">
            {events.blockHash}
          </div>
        );
      });

      purchasedEvents = (
        <div>
          <h1 className="text-xl font-bold">Purchased events</h1>
          <p>
            {events}
            <br />
          </p>
        </div>
      );
    }
    return (
      <div>
        {harvestedEvents}
        <br />
        {forSaleEvents}
        <br />
        {processedEvents}
        <br />
        {soldEvents}
        <br />
        {shippedEvents}
        <br />
        {receivedEvents}
        <br />
        {purchasedEvents}
      </div>
    );
  }
}

export default TransactionData;
