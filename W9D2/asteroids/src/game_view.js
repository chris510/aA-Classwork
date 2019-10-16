const Game = require('./game.js');
const Util = require('./util.js');


function GameView() {
  this.game = new Game();
  this.ctx = window.ctx;
}

GameView.prototype.start = function() {
  let that = this;
  let vel = Util.randomVec(1);

  setInterval(function() {
    that.game.moveObjects(vel);
    that.game.draw();
    // that.game.checkCollisions();
    // that.game.ship.draw();
    // that.game.ship.relocate();
    // that.game.ship.draw();
  }, 20);
  this.bindKeyHandlers();
};


GameView.prototype.bindKeyHandlers = function() {
  let that = this;
  key('up', function(){ that.game.ship.power([0,-10]) });
  key('down', function(){ that.game.ship.power([0,10]) });
  key('left', function(){ that.game.ship.power([-10,0]) });
  key('right', function(){ that.game.ship.power([10,0]) });
};

module.exports = GameView;