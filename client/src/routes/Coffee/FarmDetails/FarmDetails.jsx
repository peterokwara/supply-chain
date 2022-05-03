import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";

class FarmDetails extends Component {
  render() {
    return (
      <div className="overflow-auto">
        <PageHeading name="Farm Details" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Label name="Farmer ID" />
          <Input />
          <Label name="Farm Name" />
          <Input />
          <Label name="Farm Information" />
          <Input />
          <Label name="Farm Longitude" />
          <Input />
          <Label name="Farm Latitude" />
          <Input />
          <div className="flex flex-row pt-2 flex-wrap">
            <Button
              name="Harvest"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Process"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Pack"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="For Sale"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default FarmDetails;
