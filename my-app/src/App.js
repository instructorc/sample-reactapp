import React, { Component } from 'react';
import logo from './logo.svg';
//import Chart from './Chart';
import './App.css';

class App extends Component {
  render() {
    var name = "Sahasha";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {name}</h1>
        </header>
        
      </div>
    );
  }
}





export default App;


