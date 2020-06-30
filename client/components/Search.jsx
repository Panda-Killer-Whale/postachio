import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      search: ''
    };
  };

  handleChange(e) {
    this.setState({ search: e.target.value })
  };

  search() {
    const searchQuery = { value: this.state.search };
    console.log(searchQuery);
    axios.post('/search', searchQuery)
    .then((res) => {
      // Add search functionality here
      const searchResults = res.data;
      console.log(searchResults);
    })
    .catch(() => console.log('yo this search is fucked up'));
  };

  render() {
    return (
      <div id="Search">
        <input
          type='search'
          id='search-input'
          placeholder='What is your question?'
          onChange={this.handleChange}
        />
        <button id="search-btn" onClick={this.search}>Search</button>
      </div>
    );
  };
};

export default Search;
