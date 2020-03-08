import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }
  render() {
    const searchText = this.props.searchText;
    return (
      <form>
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={this.handleSearchTextChange}
        />
      </form>
    );
  }
}