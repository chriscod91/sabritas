import React, { Component } from "react"; //<-creATED USING IMRC
import "./navBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  //<--created using cc
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ backgroundColor: "#blue" }}
      >
        
        <div className="container-fluid">
          <Link className="navbar-brand" to="/#">
            The Snack Bar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  catalog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us    
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin    
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
