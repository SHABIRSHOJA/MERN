//import logo from './logo.svg';
//import './App.css';

import React from "react";
import "./App.css";

import NewCopm from "./Components/NewComp";

class App extends React.Component{

  styles={
      fontstyle : "bold",
      color : "teal"
  };
  render(){
    return (
      <div className="App">
        <h1 style={this.styles}>Welcom</h1>

        <NewCopm></NewCopm>
      </div>
    );
  }
}

export default App;
