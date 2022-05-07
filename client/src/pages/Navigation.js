import React from "react";
import { Link } from "react-router-dom";
import "./Navv.css";

import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <div className="navigaton">
        <Navbar.Brand href="#"> </Navbar.Brand>
  <nav className="item">
    <ul className="uu">
    <li>
          <Link exact to="/Home" activeClassName="nav-active">
            Home
          </Link>
        </li>

        <li>
          <Link exact to="/Presentation" activeClassName="nav-active">
            Pres
          </Link>
        </li>

        <li>
          <Link exact to="/Adherent" activeClassName="nav-active">
            Adherent
          </Link>
        </li>
        <li>
          <Link exact to="/register" activeClassName="nav-active">
            Registration
          </Link>
        </li>
        <li>
          <Link exact to="/login" activeClassName="nav-active">
            Login
          </Link>
        </li>
        <li>
          <Link exact to="/Contact" activeClassName="nav-active">
            Contact
          </Link>
        </li>

        </ul> 
        </nav>
      </div>
    </>
  );
};
export default Navigation;
