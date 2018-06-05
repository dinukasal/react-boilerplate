import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import Header from './nav/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
