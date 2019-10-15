function Surrogate() {}

// Function.prototype.inherits = function(parent) {
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};


function MovingObject() {

}

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

console.log(Asteroid.prototype);
console.log(Asteroid.prototype.__proto__)
console.log(Ship.prototype);
console.log(Ship.prototype.__proto__);
