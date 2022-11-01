import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderGrid = () => {
    const { productsData } = this.props;
    return productsData.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem item={product}></ProductItem>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderGrid()}</div>;
  }
}
