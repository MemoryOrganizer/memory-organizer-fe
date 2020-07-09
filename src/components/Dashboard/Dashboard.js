import React, { Component } from 'react';
import { get } from '../../services/request';
import Memory from './Memory';
import { Link } from 'react-router-dom';

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
        <Link to='/memories'>Create a memory</Link>
        <h2>Dashboard</h2>
        <h3>Your memories</h3>
        {this.state.data 
          ? <ul>{this.state.data.map((memory) => <Memory key={memory._id} memory={memory} />)}</ul>
          : <h4>Create some memories!</h4>
      
        }

      </div>
    );
  }
}
