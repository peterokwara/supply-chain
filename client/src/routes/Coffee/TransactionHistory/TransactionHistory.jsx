import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";

class TransactionHistory extends Component {
  render() {
    return (
      <div className="overflow-auto">
        <PageHeading name="Transaction History" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Button
            buttonName="Load Events"
            buttonClick={this.props.onFetchEvents}
            buttonStyle="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
          />
          <br />
        </form>
      </div>
    );
  }
}

export default TransactionHistory;
