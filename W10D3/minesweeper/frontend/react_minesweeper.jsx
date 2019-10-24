import React from 'react';
import ReactDOM from 'react-dom';

import Game from '../components/game';


const Root = () => {
  return (
    <div>
      <Game gridSize={9} numBombs={6}/>
    </div>
  );
};


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
