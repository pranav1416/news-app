import React, { Component } from "react";
import { Navbar, NavLink } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg ">
        <Navbar.Brand href="#">News App</Navbar.Brand>
        <NavLink href="#">Home</NavLink>
      </Navbar>
    );
  }
}

export default NavBar;
