import React, { Component } from "react";
import QuantityPicker from "../quantityPicker/quantitypicker";
import "./product.css";

class Product extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      
        <div className="product">
          <img src={"/images/product/" + this.props.data.image} alt="product"/>
          <h5>{this.props.data.title}</h5>
          
          <div className="prices">
            <label className="total-value">total: ${this.getTotal()}</label>
            <label className="price-value">price: ${this.props.data.price.toFixed(2)}</label>
          </div>
          
          <QuantityPicker onQuantityChange={this.handleQuantityChange}></QuantityPicker>
        </div>
    );
  }

  getTotal = () => {
    let total = this.props.data.price * this.state.quantity;
    return total.toFixed(2);
  };

  handleQuantityChange = (qnty) => {
    this.setState({ quantity: qnty});
  };
}

export default Product;
 
           

            
