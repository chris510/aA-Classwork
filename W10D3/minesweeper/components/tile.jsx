import React from 'react';
import * as Minesweeper from './minesweeper';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "",
      status: "tile unexplored",
      tile: new Minesweeper.Tile(this.props.board, this.props.pos),
      updateGame: this.props.updateGame,
      tileXXX: this.props.tileXXX
    };
    this.changeText = this.changeText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeText() {

    if (this.state.tile.bombed) {
      this.setState({ status: "tile bombed", displayText: "\u1F4A3"});
    } else if (this.state.tile.explored) {
      this.setState({ status: "tile explored" });
    } else if (this.state.tile.flagged) {
      this.setState({ status: "tile flagged", displayText: "\u2691" });
    } else if (!this.state.tile.flagged) {
      this.setState({ status: "tile unexplored", displayText: "" });
    }
  }

  handleClick(event) {
    if (event.altKey) {
      let flagged = this.state.tile.toggleFlag();
      this.changeText();
      this.updateGame(this.state.tileXXX, flagged);
      console.log("alt + click works");
    } else {
      let explored = this.state.tile.explore();
      this.changeText();
      this.updateGame(this.state.tileXXX, explored);
      console.log("You Clicked!");
    }
  }

  render() {

    return (
      <div className={this.state.status} onClick={this.handleClick}>
        {this.state.displayText}
      </div>
    );
  }

}

export default Tile;
