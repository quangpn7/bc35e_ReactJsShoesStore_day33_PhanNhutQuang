import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderGrid = () => {
    const { productsData, setStateModal } = this.props;
    return productsData.map((product, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-12" key={index}>
          <ProductItem
            item={product}
            setStateModal={setStateModal}
          ></ProductItem>
        </div>
      );
    });
  };
  render() {
    return <div className="row gx-5">{this.renderGrid()}</div>;
  }
}
