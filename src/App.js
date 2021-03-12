import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import axios from 'axios';
import Search from './components/Users/Search';
import User from './components/Users/User';
import About from './components/About/about';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(false);
  const [alert, setalertfunc] = useState(null);

  const showuserdom = async () => {
    setloading(true);
    const res = await axios.get('https://api.github.com/users');
    setUsers(res.data)
    setloading(false);
  }
  useEffect(() => {
    showuserdom();
  }, [])


  const searchUser = async (text) => {
    setloading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    setUsers(res.data.items);
    setloading(false);
  }
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
    const res = await axios.get(`https://api.github.com/user/${username}`);
    setUser(res.data);
    setloading(false);
  }

  return (
    <Router>
      <div>
        <Navbar title="Github Finder" icon="fab fa-github" />
        <Alert alert={alert} />
        <Switch>
          <Route path="/" exact render={props => (
            <>
              <Search searchUser={searchUser} setAlert={setAlert} clearUsers={clearUsers}
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
  )

}

export default App
