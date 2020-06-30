import React, { Component } from "react";
import Search from "./Search.jsx";
import Posts from "./Posts.jsx";
import QA from './QA.jsx';
import { Link, Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Modal from "./Modal.jsx";


class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: null
    };
    this._isMounted = false;
    this.lit = this.lit.bind(this);
  };

  lit(e) {
    e.preventDefault();

    this.setState({
      currentPost: e.target.id
    });

    return(<Redirect to="/qa" />);
  };

  componentDidMount() {
    this._isMounted = true;
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({ posts: data });
        }
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  render() {
    return (
      <Router>
        <div id="view">
          {/* <Search /> */}
          <Switch>
            <Route
              component={() => <Posts posts={this.state.posts} lit={this.lit} />}
              path="/main"
            />
            <Route path="/createpost" component={() => <Modal posts={this.state.posts} />}
            />
            <Route path="/qa" component={() => <QA currentPost={this.state.currentPost} />}
            />
          </Switch>
          <Link to="/createpost">
            <button id="create-btn">+</button>
          </Link>
        </div>
      </Router >
    );
  };
};

export default View;
