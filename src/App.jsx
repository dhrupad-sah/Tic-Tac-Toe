import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calcullateWinner } from './winner';
import StatusMessage from './components/StatusMessage';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(false);

  const winner = calcullateWinner(squares);

  const handleSquareClick = clickedposition => {
    if (squares[clickedposition] || winner) {
      return;
    }

    setSquares(currSquares => {
      return currSquares.map((squareValue, position) => {
        if (position === clickedposition) {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      });
    });

    setIsXNext(currIsXNext => {
      return !currIsXNext;
    });
  };

  return (
    <div className="app">
      <StatusMessage isXNext={isXNext} winner={winner} squares={squares} />

      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
