import React, {useState} from 'react';
import './App.css';
import Board from './components/Board/Board.jsx';
import Button from './components/Button/Button';

function App() {

  const [start, setStart] = useState(false)

  const handleClick = () => {
    setStart(true)
  }

  return (
    <div className="main">
      <h2>Tic-Tac-Toe</h2>
      {
        start ? <Board /> : (
          <>
            <div className="splash">
              <img className="splash-image" src='/x.png' alt="X"/> : 
              <img className="splash-image" src='/o.png' alt="X"/>
            </div>
            <Button onPress={handleClick}>Start</Button>
          </>
        )
      }
    </div>
  );
}

export default App;
