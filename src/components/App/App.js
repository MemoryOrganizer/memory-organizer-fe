import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from '../Home/HomePage';
import Dashboard from '../Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/memories" component={Memory}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}


