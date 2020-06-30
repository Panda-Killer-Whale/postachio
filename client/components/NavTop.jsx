import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavTop extends Component {
  constructor(props) {
    super(props);

    this.adminPage = this.adminPage.bind(this);
  };

  adminPage() {
    // if account is admin, return li
    // else return nothing
    // if(this.props.admin) {
      return (
        <Link to="/admin">
          <li id="admin-link">Admin</li>
        </Link>
      );
    // };
  };

  render() {
    return (
      <div>
        <nav id="navtop">
          <div id="logo">
            <h1>postachio 2.0</h1>
            <img src="./assets/logo.png" id="logo-img" />
            <br />
            <h6 id="software-engineers">by brian, garrett, jeho, silvia, wayne</h6>
          </div>
          <ul id="navtop-list">
            <Link to="/main">
              <li id="home-link">Home</li>
            </Link>
            <li id="myaccount-link">My Account</li>
            <Link to="/">
              <li id="signout-link">Sign Out</li>
            </Link>
            {this.adminPage()}
          </ul>
        </nav>
      </div>
    );
  };
};

export default NavTop;
