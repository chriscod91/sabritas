import React, { Component } from "react"; //<-creATED USING IMRC
import "./navBar.css";

class NavBar extends Component {
  //<--created using cc
  render() {
    return <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd"}}>  
    <div className="container-fluid">
    <a className="navbar-brand" href="/#"><span className="A">A</span>lexis snacks</a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home <span className="sr-only">(current</span></a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/#">Catalog</a>
        </li>
    
      </ul>
    </div>
  </div>
</nav>;
  }
}

export default NavBar;
