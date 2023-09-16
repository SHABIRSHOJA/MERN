//import logo from './logo.svg';
//import './App.css';

import React from "react";
import Classprops from "./Classprops";

import Functionprops from "./Functionalprops";

class App extends React.Component {
  render() {
    return (
      <div>
        <Classprops name="Learner 1" place="kabul" ><p>This is components</p></Classprops>
        <Classprops name="Learner 2" place="nengrahar" ><button>click</button></Classprops>
        <Classprops name="Learner 3" place="mazar"></Classprops>
        <Functionprops name="Learner 4" place="Wardak"></Functionprops>
      </div> 
    );
  }
}

export default App;
