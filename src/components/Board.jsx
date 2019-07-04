import React from "react";

import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: null
    };
    this.props.update(this.updateBoard.bind(this))
  }

  componentDidMount() {
    this.updateBoard();
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  updateBoard() {
    this.props.game()
    .then(res => {
      this.setState({ 
          squares: res.squares,
          xIsNext: res.xIsNext
     });
    });
  }

  handleClick(i) {
    this.props.takeTurn(i).then(
      () => {
        this.updateBoard()
      })
  }

  render() {
    let status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
