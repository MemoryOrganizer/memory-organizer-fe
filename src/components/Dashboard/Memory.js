import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Memory extends Component {
  render() {

    return (
      <li>
        <Link to={`/memory/${this.props.memory._id}`}>
          <h4>{this.props.memory.title}</h4>
          { this.props.memory.date &&
          <h4>Date: {this.props.memory.date}</h4>
          }
        </Link>
      </li>
    );
  }
}
