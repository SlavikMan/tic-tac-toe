import React, { useState } from "react";
import Square from "./Square";
import "./Style.css";

function MainPage() {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );
  const [currTurn, setCurrTurn] = useState(true);

  function checkWinner(squares: Array<string | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  }

  let winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Now: " + (currTurn ? "X" : "O");
  }
  function handleClick(i: number) {
    let newArr = [...squares];
    if (newArr[i] || winner) {
      return;
    }
    if (currTurn) {
      newArr[i] = "X";
    } else {
      newArr[i] = "O";
    }
    setCurrTurn(!currTurn);
    setSquares(newArr);
    checkWinner(newArr);
  }

  return (
    <div className="main">
      <h1>TIC-TAC-TOE</h1>
      <h3>{status}</h3>
      <div className="board">
        <div className="row">
          <Square value={squares[0]} fillCell={() => handleClick(0)} />
          <Square value={squares[1]} fillCell={() => handleClick(1)} />
          <Square value={squares[2]} fillCell={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} fillCell={() => handleClick(3)} />
          <Square value={squares[4]} fillCell={() => handleClick(4)} />
          <Square value={squares[5]} fillCell={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} fillCell={() => handleClick(6)} />
          <Square value={squares[7]} fillCell={() => handleClick(7)} />
          <Square value={squares[8]} fillCell={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
