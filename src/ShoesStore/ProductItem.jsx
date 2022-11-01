import React, { Component } from "react";

export default class ProductItem extends Component {
  renderProducts = () => {
    const { item } = this.props;
    return (
      <div className="card mt-5">
        <img src={item.image} alt="" />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p>{item.price} $</p>
        </div>
      </div>
    );
  };
  render() {
    return <div className="row">{this.renderProducts()}</div>;
  }
}
