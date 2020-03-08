import React from 'react';
import ReactDOM from 'react-dom';

import Book from './Book.js'

export default class Bookshelf extends React.Component {
  render() {
    const searchText = this.props.searchText;
    const items = [];
    this.props.books.forEach((book) => {

      if (book.title.indexOf(searchText) === -1) {
        return;
      }
      items.push(
        <Book
          description={book.description}
          title={book.title}
          author={book.author}
          key={book.title}
        />
      );
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}
