import React, { Component } from "react";
import "./product.css";
import QuantityPicker from "./quantitypicker";

class Product extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="product">
          <img src={"/images/product/" + this.props.data.image} alt="product"/>
          
          <h5 className="title">{this.props.data.title}</h5>
          <div>
            <label className="total-value">price per case: $50.00</label>
            <label className="price-value">price per each: $1.25</label>
          </div>
          
          <QuantityPicker></QuantityPicker>

          <button className="btn btn-sm btn-info">
            <i className="fa fa-cart-plus" aria-hidden="true"></i> 
            Add
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Product; 
           

            
