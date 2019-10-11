// Mx.Mary Jingleheimer Schmidt
// Mx.Brian Jingleheimer Schmidt
// Mx.Leo Jingleheimer Schmidt
// undefined

// function titleize(names, callback) {
//   let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
//   callback(titleized);
// }

// titleize(["Mary", "Brian", "Leo"], (print) => {
//   print.forEach(print => console.log(print));
// });

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.trumpet = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  pickTrickToPlay = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.trick[pickTrickToPlay]}!`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant, callback) {
  console.log(`${elephant.name} is trotting by!`);
  callback(paradeHelper);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);
};