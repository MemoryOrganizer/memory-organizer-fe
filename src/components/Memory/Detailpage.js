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
    memory: {},
    photos: {},
    id: {}
  }

  componentDidMount() {
    get(`/memory/${this.props.match.params.id}`)
      .then(fetchedData => this.setState({ data: fetchedData.body }));
  }
  render() {

  
    return (
  
      <div>
        i am on the Detailpage


        
      </div>
    );
  }
}
