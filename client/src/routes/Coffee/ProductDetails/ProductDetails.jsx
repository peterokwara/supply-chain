import { Component } from "react";
import Button from "../../../components/Common/Button/Button";
import Input from "../../../components/Forms/Input/Input";
import Label from "../../../components/Forms/Label/Label";
import PageHeading from "../../../components/Common/PageHeading/PageHeading";

class ProductDetails extends Component {
  render() {
    return (
      <div className="overflow-auto">
        <PageHeading name="Product Details" />
        <form className="flex flex-col px-4 md:px-12 lg:px-40 overflow-auto">
          <Label name="Product Notes" />
          <Input />
          <Label name="Product Price" />
          <Input />
          <Label name="Distributor ID" />
          <Input />
          <Label name="Retailer ID" />
          <Input />
          <Label name="Distributor ID" />
          <Input />
          <div className="flex flex-row pt-2 flex-wrap">
            <Button
              name="Buy"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Ship"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Receive"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
            <Button
              name="Purchase"
              styles="bg-cyan-600 text-base text-white mx-2 px-8 py-2 my-2 text-center rounded-full shadow font-sans font-normal"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default ProductDetails;
