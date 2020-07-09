import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { HomePage } from '../Home/HomePage';
import Dashboard from '../Dashboard/Dashboard';
import CreateMemory from '../Memory/CreateMemory';
import { MemoryProvider } from '../hooks/Provider';
import Detailpage from '../Memory/Detailpage';
import AboutUs from '../AboutUs/AboutUs';

export default function App() {
  return (
    <Router>
      <Switch>
        <MemoryProvider>
          <Route exact path="/" component={props => <HomePage {...props} />} />
          <Route exact path="/memories" component={CreateMemory}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/memory/:id" component={props => <Detailpage {...props}/>}/>
          <Route exact path="/about" component={AboutUs}/>
          <Route exact path="/detailpage" component={Detailpage} />
        </MemoryProvider>
      </Switch>
    </Router>
  );
}


