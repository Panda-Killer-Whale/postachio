import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      admin: false,
      isLoggedIn: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  };

  handleSubmit(e) {
    // Code to handle submit.
    e.preventDefault();

    const { username, password } = this.state;

    const user = {
      username,
      password,
    };

    axios
      .post("/login", user)
      .then((res) => {
        if (res.data) {
          this.setState({
            isLoggedIn: true,
          });
          console.log(state);
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  };


  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/main" />;
    };

    return (
      <div id="login-box">
        <a
          href="http://github.com/login/oauth/authorize?client_id=018afc8e70d311f82880&redirect_uri=http://localhost:3000/user/login/callback"
          id="github-a"
        >
          <button id="github-btn">
            Sign in with Github
            <img src="./assets/fa-github.svg" alt="Github" id="fa-github" />
          </button>
        </a>
        <form onSubmit={this.handleSubmit}>
          <label
            htmlFor="username-input"
            id="username-input"
            className="login-label"
          >
            Username:
          </label>
          <input
            onChange={this.handleUsernameChange}
            type="text"
            id="username-input"
            className="login-input"
          />
          <label
            htmlFor="password-input"
            id="password-input"
            className="login-label"
          >
            Password:
          </label>
          <input
            onChange={this.handlePasswordChange}
            type="password"
            id="password-input"
            className="login-input"
          />
          <div id="login-btns">
            <button onSubmit={this.handleSubmit} id="login-btn">
              Login
            </button>
            <Link to="/signup">
              <button id="register-btn">
                Register
              </button>
            </Link>
            {/* <a href="#" id="register">
              Register
            </a> */}
          </div>
        </form>
      </div>
    );
  };
};

export default LoginPage;
