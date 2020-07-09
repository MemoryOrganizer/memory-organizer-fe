import React, { Component } from 'react';

//first make fake data to stle
//get rout
// put rout
//pull in eddit routs 
//conditinal rendering 
//

export default class Detailpage extends Component {
  render() {
    const memory = this.props.location.responseMemory;
    const photo = this.props.location.responsePhoto;
    return (
  
      <div>
        <h2>{memory.title}</h2>
        <h2>{memory.date}</h2>
        <h2>{memory.location}</h2>
        <h2>{memory.rating}</h2>
        <img src={photo.url} alt={photo.tags} />
        <h2>{photo.tags}</h2>
        <h2>{memory.tags}</h2>
        <h2>{memory.description}</h2>
        <h2>{memory.privateNotes}</h2>

        
      </div>
    );
  }
}
