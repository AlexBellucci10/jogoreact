import React from 'react';
import ReactDOM from 'react-dom';
import './estilo.css';

class Quadrado extends React.Component {
  render() {
    return (
      <button
        className="quadrado"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quadrados: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const quadrados = this.state.quadrados.slice();
    quadrados[i] = 'X';
    this.setState({quadrados: quadrados});
  }

  renderQuadrado(i) {
    return (
      <Quadrado
        value={this.state.quadrados[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderQuadrado(0)}{this.renderQuadrado(1)}{this.renderQuadrado(2)}
        </div>
        <div className="board-row">
          {this.renderQuadrado(3)}{this.renderQuadrado(4)}{this.renderQuadrado(5)}
        </div>
        <div className="board-row">
          {this.renderQuadrado(6)}{this.renderQuadrado(7)}{this.renderQuadrado(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
