let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8);
  
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(8);
  };
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
  // this.test = _positionsToFlip(this, [2, 3], 'black')
}

Board.DIRS = [
  [ 0,  1],
  [ 1,  1], 
  [ 1,  0],
  [ 1, -1], 
  [ 0, -1], 
  [-1, -1],
  [-1,  0], 
  [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (this.isValidPos(pos) === false){
    throw Error('Not valid pos!'); 
  } else {
    return this.grid[x][y];
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let x = pos[0];
  let y = pos[1];

  if (this.grid[x][y] === undefined){
    return false;
  }

  if (this.grid[x][y].color === color){
    return true;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if( this.grid[x][y] === undefined ){
    return false;
  } else {
    return true;
  }
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if ( x < 0 || x >7 || y < 0 || y > 7) {
    return false;
  } else { 
    return true;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */

 function _positionsToFlip(board, pos, color, dir, piecesToFlip) {
  let x = pos[0] + dir[0];
  let y =  pos[1] + dir[1];
  let newPos = [x, y];

  if ((!board.isOccupied(newPos)) || (!board.isValidPos(newPos))) {
    return null;
  }
  
  if (board.isMine(newPos, color)) {
    if (piecesToFlip.length === 0) {
      return null;
    } else {
      return piecesToFlip;
    }
  }

  piecesToFlip.push(newPos);
  _positionsToFlip(board, newPos, color, dir, piecesToFlip);
}

// function _positionsToFlip(board, pos, color, dir) {
//   // let x = pos[0];
//   // let y = pos[1];
//   // let finalPos = []; 
//   // if (board.isMine(pos) === true) {
//   //   finalPos.push(pos); 
//   // } else if ((board.isOccupied(pos) === false) || (board.isValidPos(pos) === false)); { 
//   //   finalPos.push(null); 
//   // }

//   // if (dir === undefined) {
//   //   Board.DIRS.forEach(function (position) {
//   //     let x_pos = position[0];
//   //     let y_pos = position[1]; 
//   //     if ((board.isOccupied(position) === true) && (board.grid[x_pos][y_pos].color != color)) {
//   //       let new_start_x = x_pos + position[0];
//   //       let new_start_y = y_pos + position[1];
//   //       new_pos = [new_start_x, new_start_y];
//   //       Board._positionsToFlip(board, new_pos, color, position);
//   //     }
//   //   });
//   // } else { // dir is defined
//   //   let new_start_x = x_pos + x;
//   //   let new_start_y = y_pos + y;
//   //   new_pos = [new_start_x, new_start_y];
//   //   Board._positionsToFlip(board, new_pos, color, dir);
//   // }
//   // return finalPos;
// }

// function findVerticalDir(pos) {
//   let x = pos[0];
//   let y = pos[1];
//   for (let i = y; i < 8 ; i++ ) {
//     if (i < 8) || ()
//   }
//   for (let i = y; i > 0; i--) {
//   }
//}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  let x = pos[0];
  let y = pos[1];

  if (this.isOccupied(pos) === true) {
    return false;
  };

  for (let i = 0; i < Board.DIRS.length; i++) {
    let posFlips = _positionsToFlip(this, pos, color, Board.DIRS[i], []);
  }

  return true;
  
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;
