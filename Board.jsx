import { useState } from "react";
import Square from "../Square/Square";
import "./Board.css";

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function calculateWinner(squares) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line };
    }
  }
  return null;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const result = calculateWinner(squares);
  const isDraw = !result && squares.every(Boolean);
  const gameFinished = Boolean(result) || isDraw;

  function handlePlay(index) {
    if (squares[index] || gameFinished) return;

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (result) {
    status = `Vencedor: ${result.player}`;
  } else if (isDraw) {
    status = "Empate!";
  } else {
    status = `Vez do jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="board-area">
      <div className={`status ${gameFinished ? "status-finished" : ""}`} role="status">
        <span className="status-dot" />
        {status}
      </div>

      <div className="board" aria-label="Tabuleiro do jogo da velha">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handlePlay(index)}
            isWinning={Boolean(result?.line.includes(index))}
          />
        ))}
      </div>

      <button className="new-game" onClick={handleNewGame} type="button">
        <span aria-hidden="true">↻</span> Novo Jogo
      </button>
      <p className="game-hint">Clique em uma casa vazia para jogar.</p>
    </div>
  );
}
