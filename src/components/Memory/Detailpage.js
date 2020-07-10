import React, { Component } from 'react';
import { get } from '../../services/request';
import { Link } from 'react-router-dom';

export default class Detailpage extends Component {
  state = {
    id: {},
    data: {
      photos:[{}]
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.id);

    get(`/api/v1/memories/${this.props.match.params.id}`)
      .then(fetchedData => this.setState({ data: fetchedData }));
  }
  render() {
    console.log(this.state.data);
    const memoryData = this.state.data;
    const photoData = this.state.data.photos[0];

    return (
      <div>
        <h1>{memoryData.title}</h1>
        <h3>{memoryData.date}</h3>
        <h3>{memoryData.location}</h3>
        <h5>{memoryData.rating}</h5>
        <img src={photoData.url} alt={photoData.tags} />
        <h5>{photoData.tags}</h5>
        <h5>{memoryData.tags}</h5>
        <h5>{memoryData.description}</h5>
        <h5>{memoryData.privateNotes}</h5>
        <Link to="/dashboard"><button>Return to Dashboard</button></Link>
      </div>
    );
  }
}
