import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar.js'
import Bookshelf from './components/Bookshelf.js'

export default class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }
  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleSearchTextChange}
        />
        <Bookshelf
          books={this.props.books}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}