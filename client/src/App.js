import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/general/Home'
import Logout from './components/users/Logout'
import Login from './components/users/Login'
import Signup from './components/users/Signup'
import Navbar from './components/general/Navbar'
import {connect} from 'react-redux'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedin: false,
      currentUser: ''
    }
  }

  componentDidMount() {
    if(typeof localStorage === 'object'){
      try {
        const currentUser = localStorage.getItem('current_user')
        this.setState({
          currentUser: currentUser
        })
      } catch(e) {
        alert('App error')
      }
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/:other" component={Navbar}/>
        </Switch>
        <Route path="/dashboard" component={Dashboard}/>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  }
}

export default connect(mapStateToProps)(App)