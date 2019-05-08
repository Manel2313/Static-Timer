import React, { Component } from 'react';
import Timer from './components/sectionTimer/timer.js'
import './App.css'
class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

export default App;