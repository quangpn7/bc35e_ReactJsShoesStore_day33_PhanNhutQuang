import React, { Component } from "react";

export default class ProductItem extends Component {
  renderProducts = () => {
    const { item, setStateModal } = this.props;
    return (
      <div
        className="card mt-5 shoe_card"
        style={{
          minHeight: "530px",
        }}
      >
        <img src={item.image} alt="" />
        <div
          className="card-body"
          onClick={() => {
            setStateModal(item);
          }}
        >
          <h3 className="text-truncate">{item.name}</h3>
          <p className="fs-4">{item.price} $</p>
          <div className="d-flex">
            <button className="btn btn-lg btn-dark">Add to cart</button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn btn-lg btn-secondary ms-2"
            >
              View detail
            </button>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <div className="row">{this.renderProducts()}</div>;
  }
}
