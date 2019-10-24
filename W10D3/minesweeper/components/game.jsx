import React from 'react';
import * as Minesweeper from './minesweeper';
import Tile from './tile';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(this.props.gridSize, this.props.numBombs)
    };
    this.updateGame = this.updateGame.bind(this);
    this.checkGameStatus = this.checkGameStatus.bind(this);
  }

  updateGame(tile, boolean ) {
    this.state.board.explore();
    this.setState({ board: this.state.board });
  }

  render() {
    const tiles = this.state.board.grid.map((row, i) => (
      <div className="row">
        {row.map((tile, j) => (
          // <div key={[i, j]}>
            <Tile board={this.state.board} pos={[i,j]} updateGame={this.updateGame} tileXXX={tile}/> 
        ))}
      </div>
    ))

    return (
      <div className="board">
        {tiles}
      </div>
    );
  }
}

export default Game;