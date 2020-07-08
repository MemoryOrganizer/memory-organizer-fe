import React, { Component } from 'react';
import request from 'superagent';

export default class CreateMemory extends Component {
  state = {
    // title: '',
    // description: '',
    // date: '',
    // photo: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    request.post('/api/v1/memories', {

    });


  }
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Title</h3>
          <input value={this.state.title} name='title' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Description</h3>
          <input value={this.state.description} name='description' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Date</h3>
          <input value={this.state.date} name='date' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Location</h3>
          <input value={this.state.location} name='location' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Participants</h3>
          <input value={this.state.participants} name='participants' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Rating</h3>
          <input value={this.state.rating} name='rating' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Tags</h3>
          <input value={this.state.tags} name='tags' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Private Notes</h3>
          <input value={this.state.privateNotes} name='privateNotes' onChange={this.handleChange} ></input>
        </label>
        <label>
          <h3>Photo (optional)</h3>
          <input value={this.state.photo} name='photo' type='file' onChange={this.handleChange}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
