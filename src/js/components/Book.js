import React from 'react';
import ReactDOM from 'react-dom';

export default class Book extends React.Component {
  render() {
    const description = this.props.description;
    const title = this.props.title;
    const author = this.props.author;
    return (
      <li>
        <p>{description}</p>
        <p>{title}</p>
        <p>{author}</p>
      </li>
    );
  }
}