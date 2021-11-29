import './App.css';
import MakeGrid from './components/grid_maker';
import React,{useState} from 'react';
function App() {
  const [display, setDisplay]=useState(false);
  const handleClick=()=>{
    setDisplay(true)
  }
  return (
    <div className="App">
      <img className='title-image' alt='' src="https://res.cloudinary.com/lennyj/image/upload/v1593515673/58f37720a4fa116215a9240f_1.png"/>
      <h1 className='title'>Memory Game</h1>
      {display ? null: <button onClick={handleClick}>Start</button>}
      {display ? <MakeGrid/> : null}
    </div>
  );
}

export default App;
