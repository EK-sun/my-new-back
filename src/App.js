import React, { Component } from 'react';
import connect from './modules/connect';
import { withRouter } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        {this.props.children}
      </div>
    );
  }
}

export default withRouter(connect(App, 'commons'));
