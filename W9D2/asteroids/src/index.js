const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');
const Ship = require('./ship.js');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;

//  const canvas = document.getElementById('game-canvas');
window.canvas = null;
window.ctx = null;
window.addEventListener('DOMContentLoaded', (event) => {
  window.canvas = document.getElementById('game-canvas');
  window.ctx = window.canvas.getContext("2d");
  console.log('DOM fully loaded and parsed');
  // const g = new Game();
  const gv = new GameView();
  gv.start();
  // const mo = new MovingObject({
  // pos: [30, 30],
  // vel: [10, 10],
  // radius: 5,
  // color: "#00FF00",
  // game: gv.game
  // });
  console.log(gv.game.asteroids);
  console.log(gv.game.ship);
  gv.game.ship.relocate();
  console.log('RELOCATED');
  gv.game.ship.relocate();
  console.log(gv.game.ship);

  // mo.draw();

  // const no = new Asteroid({ pos: [50, 30], game: g});
  // no.draw();
  // const ship = new Ship({pos:[50, 40], game: g});
  // ship.draw();
  
  
});
