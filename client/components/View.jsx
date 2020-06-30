import React, { Component } from "react";
import Search from "./Search.jsx";
import Posts from "./Posts.jsx";
import QA from './QA.jsx';
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
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
    // console.log('it is lit');
    e.preventDefault();
    console.log('E.TARGET.ID', e.target.id);
    this.setState({
      currentPost: e.target.id
    });
  };

  componentDidMount() {
    console.log("Mounted");
    this._isMounted = true;
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (this._isMounted) {
          this.setState({ posts: data });
        }
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  };

  render() {
    // console.log(this.state.posts)
    for (let i = 0; i < this.state.posts.length; i++) {
      const post = this.state.posts[i];
      // console.log(post.id);
      // this.state.currentPost = post.id;
    }
    return (
      <Router>
        <div id="view">
          <Search />
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
