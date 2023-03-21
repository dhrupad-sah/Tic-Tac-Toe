import { useState } from 'react';
import Square from './Square';

const Board = props => {

  const [squares, setSquares] = useState( Array(9).fill(null) );

  const handleSquareClick = (clickedposition)=>{

    setSquares((currSquares)=>
    {
      return currSquares.map((squareValue,position)=>
      {
        if(position===clickedposition)
        {
          return 'X';
        }

        return squareValue;
      })
    })

  }

  const renderSquare = (position)=>
  {
    return <Square value = {squares[position]} onSquareClick={()=> handleSquareClick(position)}/>
  }
  return (

    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      </div>
      <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
