
const Ship = require('./ship.js');
function Game(){
  this.DIM_X = window.canvas.width;
  this.DIM_Y = window.canvas.height;
  this.NUM_ASTEROIDS = 15;
  this.asteroids = [];
  this.addAsteroids();
  // this.draw();
  this.ship = new Ship({ pos: this.randomPosition(), game: this});
  // this.allObj = [];
  // this.allObjects();
}

Game.prototype.randomPosition = function () {
  const x = Math.random() * this.DIM_X;
  const y = Math.random() * this.DIM_Y;
  return [x,y];
};

Game.prototype.addAsteroids = function() {
  let counter = 0;
  while(counter < this.NUM_ASTEROIDS){
    let pos = this.randomPosition();
    let a = new Asteroid({pos, game: this});
    // a.draw();
    this.asteroids.push(a);
    counter++;
  }
};

Game.prototype.draw = function() {
  window.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  let objects = this.allObjects();
  // console.log(objects);
  objects.forEach(function(obj) {
    obj.draw();
  });
};

Game.prototype.moveObjects = function (vel) {
  this.asteroids.forEach(function (asteroid) {
    asteroid.move(asteroid.vel);
  });
  this.checkCollisions();
};

Game.prototype.wrap = function(pos) {
   let x = pos[0]; 
   let y = pos[1]; 

   if( x < 0 ){
    pos[0] = this.DIM_X;
   }
   if( y < 0 ) {
    pos[1] = this.DIM_Y;
   }
   if (x > this.DIM_X) {
     pos[0] = 0;
   }
   if (y > this.DIM_Y) {
     pos[1] = 0;
   }
   return pos;
};

Game.prototype.checkCollisions = function() {
  let that = this;
  this.asteroids.forEach(function(asteroid) {
    if (that.ship.isCollidedWith(asteroid) === true ) {
      that.ship.relocate();
    }
  });
};

Game.prototype.allObjects = function() {
  let allObj = [];
  allObj.push(this.ship);
  this.asteroids.forEach( function(asteroid) {
    allObj.push(asteroid);
  });
  // allObj.concat(this.asteroids);
  // console.log(allObj);
  // console.log(this.asteroids);
  return allObj;
};


module.exports = Game;