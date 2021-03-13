import React from 'react';
import Navbar from './components/Navbar';
import User from './components/Users/User';
import About from './components/About/about';
import NotFound from './components/NotFound';
import Alert from './components/Alert';
import GithubState from './context/GithubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AlertState from './context/alert/AlertState';

import './App.css';
import Home from './components/Home';

const App = () => {



  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={User} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>

  )

}

export default App
