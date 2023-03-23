const statusMessage = ({ isXNext, winner, squares }) => {
  const noMovesLeft = squares.every(squareVal => squareVal !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMsg = () => {
    if (winner) {
      return <div>Winner is <span className={winner==='X' ? 'text-green' : 'text-orange'}>{winner}</span></div>;
    }
    if (!winner && noMovesLeft) {
      return <div> That is a TIE!!</div>;
    } else {
      return <div> Next player is <span className={isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}</span></div>;
    }
  };

  return <div className="status-message">{renderStatusMsg()}</div>;
  
};

export default statusMessage;
