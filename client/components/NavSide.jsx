import React, { Component } from 'react';
import axios from 'axios';

class navSide extends Component {
  constructor(props) {
    super(props);

    this.loadCategories = this.loadCategories.bind(this);
  };

  loadCategories() {
    // Add code here.
    const categoriesMenuItems = [];

    axios.get('/loadcategories')
      .then(res => {
        const categories = res.data;

        for (let i = 0; i < categories.length; i++) {
          categoriesMenuItems.push(
            <div class="sidemenu-items">
              <a href="#">
                <li>{categories[i]}</li>
              </a>
            </div>
          );
        };
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    return categoriesMenuItems;
  };

  render() {
    return (
      <div id="nav-side">
        <ul id="listed-categories">
          <a>
            <li>UNIT 1: JS Fundamentals</li>
          </a>
          <a>
            <li>UNIT 2: Data Structures &amp; Algorithms</li>
          </a>
          <a>
            <li>UNIT 3: Algorithms</li>
          </a>
          <a>
            <li>UNIT 4: Snake Game</li>
          </a>
          <a>
            <li>UNIT 5: React</li>
          </a>
          <a>
            <li>UNIT 6: Redux</li>
          </a>
          <a>
            <li>UNIT 7: AJAX</li>
          </a>
          <a>
            <li>UNIT 8: Node</li>
          </a>
          <a>
            <li>UNIT 9: Express</li>
          </a>
          <a>
            <li>UNIT 10: Databases</li>
          </a>
          <a>
            <li>UNIT 11: Authentication</li>
          </a>
          <a>
            <li>UNIT 12: Testing</li>
          </a>
          <a>
            <li>UNIT 13: Build Tools &amp; Webpack</li>
          </a>
          <a>
            <li>MISCELLANEOUS</li>
          </a>
        </ul>
      </div>
    );
  };
};

export default navSide;
