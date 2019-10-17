const View = require("./ttt-view.js");
const Game = require("./game.js");

window.View = View;
window.Game = Game;

  $(() => {
    const $ttt = $(".ttt");
    const g = new Game();
    const v = new View(g, $ttt);
    // console.log("Create!");
  });
