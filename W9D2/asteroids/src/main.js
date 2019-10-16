/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asteroid.js":
/*!*********************!*\
  !*** ./asteroid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./moving_object.js\");\n\nfunction Asteroid({pos, game}) {\n  this.COLOR = 'blue';\n  this.RADIUS = 5;\n  this.vel = Util.randomVec(3);\n  this.game = game;\n  MovingObject.call(this, {pos: pos, vel: this.vel, radius: this.RADIUS, color: this.COLOR, game: this.game});\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject) {\n  \n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./asteroid.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./ship.js\");\nfunction Game(){\n  this.DIM_X = window.canvas.width;\n  this.DIM_Y = window.canvas.height;\n  this.NUM_ASTEROIDS = 15;\n  this.asteroids = [];\n  this.addAsteroids();\n  // this.draw();\n  this.ship = new Ship({ pos: this.randomPosition(), game: this});\n  // this.allObj = [];\n  // this.allObjects();\n}\n\nGame.prototype.randomPosition = function () {\n  const x = Math.random() * this.DIM_X;\n  const y = Math.random() * this.DIM_Y;\n  return [x,y];\n};\n\nGame.prototype.addAsteroids = function() {\n  let counter = 0;\n  while(counter < this.NUM_ASTEROIDS){\n    let pos = this.randomPosition();\n    let a = new Asteroid({pos, game: this});\n    // a.draw();\n    this.asteroids.push(a);\n    counter++;\n  }\n};\n\nGame.prototype.draw = function() {\n  window.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  let objects = this.allObjects();\n  // console.log(objects);\n  objects.forEach(function(obj) {\n    obj.draw();\n  });\n};\n\nGame.prototype.moveObjects = function (vel) {\n  this.asteroids.forEach(function (asteroid) {\n    asteroid.move(asteroid.vel);\n  });\n  this.checkCollisions();\n};\n\nGame.prototype.wrap = function(pos) {\n   let x = pos[0]; \n   let y = pos[1]; \n\n   if( x < 0 ){\n    pos[0] = this.DIM_X;\n   }\n   if( y < 0 ) {\n    pos[1] = this.DIM_Y;\n   }\n   if (x > this.DIM_X) {\n     pos[0] = 0;\n   }\n   if (y > this.DIM_Y) {\n     pos[1] = 0;\n   }\n   return pos;\n};\n\nGame.prototype.checkCollisions = function() {\n  let that = this;\n  this.asteroids.forEach(function(asteroid) {\n    if (that.ship.isCollidedWith(asteroid) === true ) {\n      that.ship.relocate();\n    }\n  });\n};\n\nGame.prototype.allObjects = function() {\n  let allObj = [];\n  allObj.push(this.ship);\n  this.asteroids.forEach( function(asteroid) {\n    allObj.push(asteroid);\n  });\n  // allObj.concat(this.asteroids);\n  // console.log(allObj);\n  // console.log(this.asteroids);\n  return allObj;\n};\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./game.js?");

/***/ }),

/***/ "./game_view.js":
/*!**********************!*\
  !*** ./game_view.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./game.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./util.js\");\n\n\nfunction GameView() {\n  this.game = new Game();\n  this.ctx = window.ctx;\n}\n\nGameView.prototype.start = function() {\n  let that = this;\n  let vel = Util.randomVec(1);\n\n  setInterval(function() {\n    that.game.moveObjects(vel);\n    that.game.draw();\n    // that.game.checkCollisions();\n    // that.game.ship.draw();\n    // that.game.ship.relocate();\n    // that.game.ship.draw();\n  }, 20);\n  this.bindKeyHandlers();\n};\n\n\nGameView.prototype.bindKeyHandlers = function() {\n  let that = this;\n  key('up', function(){ that.game.ship.power([0,-10]) });\n  key('down', function(){ that.game.ship.power([0,10]) });\n  key('left', function(){ that.game.ship.power([-10,0]) });\n  key('right', function(){ that.game.ship.power([10,0]) });\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./game_view.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./game_view.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./ship.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\nwindow.Ship = Ship;\n\n//  const canvas = document.getElementById('game-canvas');\nwindow.canvas = null;\nwindow.ctx = null;\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  window.canvas = document.getElementById('game-canvas');\n  window.ctx = window.canvas.getContext(\"2d\");\n  console.log('DOM fully loaded and parsed');\n  // const g = new Game();\n  const gv = new GameView();\n  gv.start();\n  // const mo = new MovingObject({\n  // pos: [30, 30],\n  // vel: [10, 10],\n  // radius: 5,\n  // color: \"#00FF00\",\n  // game: gv.game\n  // });\n  console.log(gv.game.asteroids);\n  console.log(gv.game.ship);\n  gv.game.ship.relocate();\n  console.log('RELOCATED');\n  gv.game.ship.relocate();\n  console.log(gv.game.ship);\n\n  // mo.draw();\n\n  // const no = new Asteroid({ pos: [50, 30], game: g});\n  // no.draw();\n  // const ship = new Ship({pos:[50, 40], game: g});\n  // ship.draw();\n  \n  \n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./moving_object.js":
/*!**************************!*\
  !*** ./moving_object.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject({pos, vel, radius, color, game}) {\n  this.x = pos[0];\n  this.y = pos[1];\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n  // this.ctx = window.canvas.getContext(\"2d\");\n  this.ctx = window.ctx;\n  this.game = game;\n}\n\nMovingObject.prototype.draw = function() {\n  this.ctx.fillStyle = this.color;\n  this.ctx.beginPath();\n\n  this.ctx.arc(\n    this.x,\n    this.y,\n    this.radius,\n    0,\n    2 * Math.PI\n    //optional: clockwise/counter-clock\n  );\n\n  this.ctx.fill();\n};\n\nMovingObject.prototype.move = function(vel) {\n  this.x += vel[0];\n  this.y += vel[1];\n\n  let newPos = this.game.wrap([this.x, this.y]);\n  this.x = newPos[0];\n  this.y = newPos[1];\n  // console.log(newPos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let xAxis = Math.pow((otherObject.x - this.x), 2);\n  let yAxis = Math.pow((otherObject.y - this.y), 2);\n  let axisTotal = xAxis + yAxis;\n  let totalDist = Math.sqrt(axisTotal);\n  let totalRadius = otherObject.radius + this.radius;\n\n  if (totalDist > totalRadius) {\n    // console.log(false);\n    return false;\n  } else {\n    // console.log(true);\n    return true;\n  }\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  \n};\n\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./moving_object.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./util.js\");\n\n// const Game = require('./game');\n\nfunction Ship({pos, game}) {\n  this.pos = pos;\n  this.RADIUS = 8;\n  this.COLOR = 'black';\n  this.vel = [0,0];\n  this.game = game\n  MovingObject.call(this, { pos: this.pos, vel: this.vel, radius: this.RADIUS, color: this.COLOR, game: this.game });\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.power = function(impulse) {\n\n  this.x += impulse[0];\n  this.y += impulse[1];\n\n  let newPos = this.game.wrap([this.x, this.y]);\n  this.x = newPos[0];\n  this.y = newPos[1];\n  console.log(\"move position\");\n  console.log(this.x);\n  console.log(this.y);\n};\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.x = this.pos[0];\n  this.y = this.pos[1];\n}\n\n// Ship.prototype.bindKeyHandlers = function() {\n//   let that = this;\n//   key('up', function(){ that.power([0,3]) });\n//   key('down', function(){ that.power([0,-3]) });\n//   key('left', function(){ that.power([3,0]) });\n//   key('right', function(){ that.power([-3,0]) });\n// };\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./ship.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\nwindow.Util = Util;\n\n//# sourceURL=webpack:///./util.js?");

/***/ })

/******/ });