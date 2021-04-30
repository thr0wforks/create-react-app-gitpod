import React from 'react';
import './App.css';
import GameBoard from './gameBoard';

function App() {
  return <>
    <svg className="wood" xmlns="http://www.w3.org/2000/svg"><filter id="a"><feTurbulence type="fractalNoise" baseFrequency=".1 .01"/><feColorMatrix values="0 0 0 .11 .69 0 0 0 .09 .38 0 0 0 .08 .14 0 0 0 0 1"/></filter><rect width="100%" height="100%" filter="url(#a)"/></svg>            
    <div className="App">
      <GameBoard players={[
        'Gio',
        //'Maria',
        //'Ana',
        'Dressa'
      ]} />
    </div>
  </>;
}

export default App;
