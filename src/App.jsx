import './styles.scss'
import Board from './components/Board'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(1);

  const onBtnClick = ()=>
  {
    setCounter((currCounter)=>
    {
      return currCounter +1;
    })
  }

  return (
   <div className='app'>
    <div>
      <button onClick={onBtnClick}>CLICK ME</button>
    </div>
    <div>
      {counter}
    </div>
    <div>
      <Board/>
    </div>
   </div>
  )
}

export default App
