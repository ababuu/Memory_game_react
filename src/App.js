import './App.css';
import MakeGrid from './components/grid_maker';
import React,{useState} from 'react';
function App() {
  const [display, setDisplay]=useState(false)
  return (
    <div className="App">
      <img src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png"/>
      <button>Start</button>
      
    </div>
  );
}

export default App;
