import React, { Component } from 'react';
import { get } from '../../services/request';
import Memory from './Memory';
import { Link } from 'react-router-dom';
import CSS from '../App/App.css';

export default class Dashboard extends Component {
  state = { data: [{ title: '' }] }

  componentDidMount() {
    get('/api/v1/memories')
      .then(res => this.setState({ data: res }));
  }


  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='/memories'><h3>Create a memory</h3></Link>
        <h3>Your memories</h3>
        {this.state.data
          ? <ul>{this.state.data.map((memory) => <Memory key={memory._id} memory={memory} />)}</ul>
          : <h4>Create some memories!</h4>

        }

      </div>
    );
  }
}
