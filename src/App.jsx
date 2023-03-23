import './styles.scss'
import Board from './components/Board'
import { useState } from 'react';
import { calcullateWinner } from './winner';

function App() {

  const [squares, setSquares] = useState( Array(9).fill(null) );

  const [isXNext, setIsXNext] = useState(false);


  const winner = calcullateWinner(squares);
  const nextPlayer = isXNext ? 'X' : 'O';

  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`

  const handleSquareClick = (clickedposition)=>{

    if(squares[clickedposition] || winner)
    {
      return;
    }

    setSquares((currSquares)=>
    {
      return currSquares.map((squareValue,position)=>
      {
        if(position===clickedposition)
        {
          return isXNext ? 'X' : 'O';
        }

        return squareValue;
      })
    })

    setIsXNext((currIsXNext)=>
    {
      return !currIsXNext;
    })

  }


  return (
   <div className='app'>
    <div>
      <button className='bold'> TIC TAC TOE </button>
    </div>
   <div>
    <h2>
      {statusMessage};
    </h2>
   </div>
    <div>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
   </div>
  )
}

export default App
