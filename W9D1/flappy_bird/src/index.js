import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
const newGame = new FlappyBird(canvas);

newGame.restart();
