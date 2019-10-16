const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

function Asteroid({pos, game}) {
  this.COLOR = 'blue';
  this.RADIUS = 5;
  this.vel = Util.randomVec(3);
  this.game = game;
  MovingObject.call(this, {pos: pos, vel: this.vel, radius: this.RADIUS, color: this.COLOR, game: this.game});
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function (otherObject) {
  
};

module.exports = Asteroid;