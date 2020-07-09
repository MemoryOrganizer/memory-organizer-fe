import React, { Component } from 'react';
import { get, patch, del } from '../../services/request';

//first make fake data to stle
//get rout
// put rout
//pull in eddit routs 
//conditinal rendering 
//

export default class Detailpage extends Component {
  state = {
    id: {},
    data: {
      photos:[]
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
    const photoData = this.state.data.photos;
    
  
    return (
  
      <div>
        <h1>{memoryData.title}</h1>
        <h1>{memoryData.date}</h1>
        <h1>{memoryData.location}</h1>
        <h1>{memoryData.rating}</h1>
        <img src={photoData.url} alt={photoData.tags} />
        <h1>{photoData.tags}</h1>
        <h1>{memoryData.tags}</h1>
        <h1>{memoryData.description}</h1>
        <h1>{memoryData.privateNotes}</h1>       
      </div>
    );
  }
}
