import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';
import Images from "./components/images";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Images/>
      </div>
    );
  }
}

export default App;
