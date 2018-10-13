import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

    render() {
      return (
        <Router>  
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>

          <br />
          <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/admin">Admin</Link></li>
          <li><Link to ="/start">Start Feedback</Link></li>
        </ul>
        <Route exact path = "/admin" component={Admin} />
        <Route exact path = "/start" component={Feeling} />
        {/* <Route exact path = "/" component={Home} /> */}
        </div>
        </Router>
      );
    }
  }

export default connect()(App);
