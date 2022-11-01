import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Launch demo modal
          </button> */}
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header ">
                  <h5 className="modal-title display-4" id="exampleModalLabel">
                    {content.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <img
                    src={content.image}
                    alt=""
                    className="d-block w-100 shoe_img"
                  />
                  <p>{content.description}</p>
                  <p className="display-4">$ {content.price}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
