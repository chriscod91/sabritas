import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";


class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-page">
        <div className="jumbotron">
          <h1 className="display-4">
            welcome to <b>The Snack Bar</b>
          </h1>
          <p className="lead">underneath is a link to our fantastic catalog</p>
          <div className="container">
              <img src="/images/products/product-icon2.jpg" alt="" />
              <p className="title">click here</p>
              <div className="overlay"></div>
         <Link className="btn btn-info btn" to="/catalog" role="button">
            Our Catalog
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </Link>
          
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
