function MovingObject({pos, vel, radius, color, game}) {
  this.x = pos[0];
  this.y = pos[1];
  this.vel = vel;
  this.radius = radius;
  this.color = color;
  // this.ctx = window.canvas.getContext("2d");
  this.ctx = window.ctx;
  this.game = game;
}

MovingObject.prototype.draw = function() {
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();

  this.ctx.arc(
    this.x,
    this.y,
    this.radius,
    0,
    2 * Math.PI
    //optional: clockwise/counter-clock
  );

  this.ctx.fill();
};

MovingObject.prototype.move = function(vel) {
  this.x += vel[0];
  this.y += vel[1];

  let newPos = this.game.wrap([this.x, this.y]);
  this.x = newPos[0];
  this.y = newPos[1];
  // console.log(newPos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let xAxis = Math.pow((otherObject.x - this.x), 2);
  let yAxis = Math.pow((otherObject.y - this.y), 2);
  let axisTotal = xAxis + yAxis;
  let totalDist = Math.sqrt(axisTotal);
  let totalRadius = otherObject.radius + this.radius;

  if (totalDist > totalRadius) {
    // console.log(false);
    return false;
  } else {
    // console.log(true);
    return true;
  }
};

MovingObject.prototype.collideWith = function(otherObject) {
  
};



module.exports = MovingObject;