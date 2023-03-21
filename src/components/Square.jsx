const Square = ({value, onSquareClick})=>
{
  return <button type="button" className="square" onClick={onSquareClick}> {value} </button>
}
 
export default Square;