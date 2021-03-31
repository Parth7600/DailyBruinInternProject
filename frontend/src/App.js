import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CreateSource from './components/CreateSource';
import AllSources from './components/AllSources';
import UpdateSource from './components/UpdateSource';
import DeleteSource from './components/DeleteSource';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path = "/create" exact={true} component={CreateSource}/>
        <Route path = "/" exact={true} component={AllSources}/>
        <Route path = "/update/:id" exact={true} component={UpdateSource}/>
        <Route path = "/delete/:id" exact={true} component={DeleteSource}/>
      </Switch>
    </Router>
  );
}

export default App;
