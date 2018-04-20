import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myWorker from './test.worker';

class App extends Component {

  constructor() {
    super();
    this.state = {counter: 0};
  }

  componentDidMount() {
    const worker = new myWorker();
    worker.postMessage(this.state.counter);
    worker.addEventListener('message', event => this.setState({counter: event.data}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.counter}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
