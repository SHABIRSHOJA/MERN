//import logo from './logo.svg';
//import './App.css';
import Functionalcomponent from './Components/Functionalcomponent';
import {Classcomponents, Classcomponents1} from './Components/Classcomponent';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';
function App() {
  return (
  <div>
    <h1>Hello and welcome</h1>
        <h1>This video is about components</h1>
        <Functionalcomponent></Functionalcomponent>
        <Classcomponents></Classcomponents>
        <Classcomponents1></Classcomponents1>
        <Click></Click>
        <Counter></Counter>

        <ParentComp></ParentComp>
  </div> 
  );
}

export default App;
