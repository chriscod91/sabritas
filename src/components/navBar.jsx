import React, { Component } from "react"; //<-creATED USING IMRC
import "./navBar.css";
import "bootstrap/dist/js/bootstrap.bundle";

class NavBar extends Component {
  //<--created using cc
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-dark"
        style={{ backgroundColor: "#red" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Alexis Snacks
          </a>
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
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  catalog
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
