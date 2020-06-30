import React, {Component} from "react"
import LoginPage from './LoginPage.jsx'
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          password: '',
          email: '',
          admin: 'no'
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      };
    
      handleSubmit(e) {
        // Code to handle submit.
        e.preventDefault();
    
        const { username, password, email, admin } = this.state;
    
        const user = {
          username,
          password,
          email,
          admin,
        };
    
        axios
          .post("/register", user)
          .then((res) => {
            if (res.data) {
              this.setState({
                username: 'res.data.username',
                password: 'res.data.password',
                email: 'res.data.email',
                admin: 'res.data.admin'
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

      handleEmailChange(e) {
        this.setState({
          email: e.target.value
        });
      };

    render() {
        return (
        <div className="register-box">
        <form onSubmit={this.handleSubmit}>
        <label
          htmlFor="usernameRegister-input"
          id="usernameRegister-input"
          className="login-label"
        >
          Username:
        </label>
        <input
          onChange={this.handleUsernameChange}
          type="text"
          id="usernameRegister-input"
          className="login-input"
        />
        <label
          htmlFor="password-input"
          id="passwordRegister-input"
          className="login-label"
        >
          Password:
        </label>
        <input
          onChange={this.handlePasswordChange}
          type="password"
          id="passwordRegister-input"
          className="login-input"
        />
        <label
          htmlFor="email-input"
          id="email-input"
          className="email-label"
        >
          email:
        </label>
        <input
          onChange={this.handleEmailChange}
          type="text"
          id="email-input"
          className="login-input"
        />
        <label
          htmlFor="admin-input"
          id="admin-input"
          className="admin-label"
        >
          admin:
        </label>
        <input
          value="no"
          type="admin"
          id="admin-input"
          className="admin-input"
        />
        <div id="register-btns2">
          <button onSubmit={this.handleSubmit} id="register-submit2">
            Register
          </button> 
        </div>
        </form>
        </div>
        )}
}

export default Register 