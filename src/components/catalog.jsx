import React, { Component } from "react";
import "./catalog.css";
import Product from "./product";
import ProductService from "../../service/productService";

class Catalog extends Component {
  state = {
    product: [],
  };
  render() {
    //get data from service
    return (
      <div className="catalog-page">
        <h1>our selection</h1>
        <div>our products: {this.state.product.length} this is the current selection</div>
       
       {this.state.product.map((prod) => (<Product key={prod.id} title={prod.title}></Product>))}
      </div>
    );
  }

  //when the component is mounted ()
  conponentDidMount(){
     //good place to load data (fro server)
     let service = new ProductService();
     let data = service.getCatalog();

     //put data on state
     this.setState({product: data });
  }
}

export default Catalog;

/*
min info for the product cmp:
-image
-title
-code(sku)
-minimum
-total
*/
