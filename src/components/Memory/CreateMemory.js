import React, { Component } from 'react';
import { post, photoPost } from '../../services/request';
import { useHistory } from 'react-router-dom';

export default class CreateMemory extends Component {
  state = {}


  handleSubmit = event => {
    
    event.preventDefault();
    

    post('/api/v1/memories', this.state)
      .then((res) => {

        const formData = new FormData();
        formData.append('memory', res._id);
        formData.append('photo', this.state.photo);
        return photoPost('/api/v1/photos', formData);
  
      })
      .then((res) => {
        this.props.history.push({
          pathname: '/detailpage',
          response: res
        });
      });

  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h3>Title (required)</h3>
          <input value={this.state.title} name='title' required  onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Description</h3>
          <input value={this.state.description} name='description' onChange={this.handleChange}/>
        </label>
        <label>
          <h3>Date</h3>
          <input value={this.state.date} name='date' type='date' onChange={this.handleChange}/>
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
          <input value={this.state.rating} name='rating' type='number' min='1' max='5' onChange={this.handleChange}/>
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
          <h3>Photo</h3>
          <input name='photo' type='file' onChange={({ target }) => this.setState({ photo: target.files[0] })}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}
