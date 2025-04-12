import { useState } from "react";

export default function GameBoard({onSelectSquare, board}) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, playerSymbolIndex) => (
            <li key={playerSymbolIndex}>
              <button onClick={() => onSelectSquare(rowIndex, playerSymbolIndex)} disabled={playerSymbol}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      </li>)}
    </ol>
  );
}