import React from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import Search from './components/Users/Search';
import User from './components/Users/User';
import About from './components/About/about';
import Alert from './components/Alert';
import GithubState from './context/GithubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {



  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <Alert />
          <Switch>
            <Route path="/" exact render={() => (
              <>
                <Search />
                <Users />
              </>
            )} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={User} />
          </Switch>
        </Router>
      </AlertState>
    </GithubState>

  )

}

export default App
