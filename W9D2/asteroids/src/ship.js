const MovingObject = require('./moving_object.js');
const Util = require('./util');

// const Game = require('./game');

function Ship({pos, game}) {
  this.pos = pos;
  this.RADIUS = 8;
  this.COLOR = 'black';
  this.vel = [0,0];
  this.game = game
  MovingObject.call(this, { pos: this.pos, vel: this.vel, radius: this.RADIUS, color: this.COLOR, game: this.game });
}

Util.inherits(Ship, MovingObject);

Ship.prototype.power = function(impulse) {

  this.x += impulse[0];
  this.y += impulse[1];

  let newPos = this.game.wrap([this.x, this.y]);
  this.x = newPos[0];
  this.y = newPos[1];
  console.log("move position");
  console.log(this.x);
  console.log(this.y);
};

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.x = this.pos[0];
  this.y = this.pos[1];
}

// Ship.prototype.bindKeyHandlers = function() {
//   let that = this;
//   key('up', function(){ that.power([0,3]) });
//   key('down', function(){ that.power([0,-3]) });
//   key('left', function(){ that.power([3,0]) });
//   key('right', function(){ that.power([-3,0]) });
// };

module.exports = Ship;