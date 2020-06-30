import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../action.js";
import { connect } from "react-redux";

class Admin extends Component {
  constructor() {
    super();
  };
  
  
  render() {
    return(
      <h1>Hello World!</h1>
    );
  };
};
  
  export default Admin;