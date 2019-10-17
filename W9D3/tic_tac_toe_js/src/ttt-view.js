const Board = require("./board.js");
const Game = require("./game.js");

class View {
  constructor(game, $ttt) {
  this.$ttt = $ttt;
  this.game = game;
  this.setupBoard();
  this.bindEvents();
  }

  bindEvents() {
    let $square = this.$ttt.find(".square");
    $square.on("click", (e) => {
      $square = $(e.currentTarget);
      this.makeMove($square);

    });
  }

  makeMove($square) {
    $square.addClass("click");

    const pos = $square.attr("data-pos");
    const parsedX = [parseInt(pos[0])];
    const parsedY = [parseInt(pos[2])];
    const newPos = parsedX.concat(parsedY);
  
    this.game.playMove(newPos);
    
    $square.text(this.game.currentPlayer);
    if (this.game.currentPlayer === "x") {
      $square.addClass("x");
    } else {
      $square.addClass("o");
    }
    
    if (this.game.board.winner()) {
      setTimeout(() => {
        alert(`${this.game.currentPlayer} wins!`);
        location.reload();
      }, 100);
    }

  //  this.game.board.grid.forEach((position) => {
  //    let sum = 0;
  //   if (position) {
  //     sum += 1;
  //     if (sum === 9) {
  //       alert('NO ONE LOST');
  //     }
  //   }
  //  });

  }

  setupBoard() {
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      const $row = $("<ul>").addClass("row");
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
        $row.append($square);
      }
      this.$ttt.append($row);
    }
    
  }
}


module.exports = View;
