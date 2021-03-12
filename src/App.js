import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';
import Search from './components/Users/Search';
import User from './components/Users/User';
import About from './components/About/about';
import Alert from './components/Alert';
import GithubState from './context/GithubState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);
  const [alert, setalertfunc] = useState(null);

  const showuserdom = async () => {
    setloading(true);
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    setUsers(res.data)
    setloading(false);
  }
  useEffect(() => {
    showuserdom();
  }, [])



  const clearUsers = () => {
    setUsers([]);
    setloading(false);
  }

  const setAlert = (msg, type) => {
    setalertfunc({
      alert: { msg, type }
    });
    setTimeout(() => {
      setalertfunc(null);
    }, 5000);
  }

  const getUser = async username => {


    setloading(true);
    const res = await axios.get(`https://api.github.com/user/${username}?client_id=
    ${process.env.REACT_APP_CLIENT_ID}
    &client_secret=
    ${process.env.REACT_APP_CLIENT_SECRET}`);

    setUser(res.data);
    setloading(false);
  }

  return (
    <GithubState>
      <Router>
        <div>
          <Navbar title="Github Finder" icon="fab fa-github" />
          <Alert alert={alert} />
          <Switch>
            <Route path="/" exact render={props => (
              <>
                <Search setAlert={setAlert} clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false} />
                <Users loading={loading} users={users} />
              </>
            )} />
            <Route path="/about" component={About} />
            <Route path="/user/:login" render={props => (
              <User getUser={getUser} {...props} loading={loading} user={user} />
            )} />
          </Switch>

        </div>
      </Router>
    </GithubState>

  )

}

export default App
