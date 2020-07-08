import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import UploadMemory from './UploadMemory';

export default class App extends Component {

  state = {
        token: localStorage.getItem("TOKEN"),
            user: ''
        }

  handleTokenChange = (myToken, user) => {
    this.setState({ token: myToken, user: user });
    localStorage.setItem("TOKEN", myToken);
  }

  render(){
    return (
      <div className="container"></div>
    )
  }

