import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin';
import Feeling from '../Feeling/Feeling';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import HeaderBar from '../HeaderBar/HeaderBar';


class App extends Component {

    render() {
      return (
        <Router>  
        <div className="App">
          <HeaderBar />

          <br />
          <ul>
          {/* <li><Link to ="/admin"><Button>Admin</Button></Link></li> */}
          {/* <li><Link to ="/start"><Button color="primary">Start Feedback</Button></Link></li> */}
          {/* <li><Link to ="/understanding">Understanding</Link></li> */}
          {/* <li><Link to ="/support">Support</Link></li> */}
          {/* <li><Link to ="/comments">Comments</Link></li>  */}
        </ul>
        <Route exact path = "/admin" component={Admin} />
        <Route exact path = "/start" component={Feeling} />
        <Route exact path = "/understanding" component={Understanding} />
        <Route exact path = "/support" component={Support} />
        <Route exact path = "/comments" component={Comments} />
        <Route exact path = "/thankYou" component={ThankYou} />
        </div>
        </Router>
      );
    }
  }

export default connect()(App);
