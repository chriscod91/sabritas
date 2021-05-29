import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantitypicker";

class Product extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img
            src="https://picsum.photos/200/300
"
            alt="product"
          />
          <h5>product title here</h5>
          <div>
            <label>price per case: $50.00</label>
            <label>price per each: $1.25</label>
          </div>
          <QuantityPicker></QuantityPicker>

          <button btn btn-sm btn-info>
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
