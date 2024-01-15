import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div>
        <h3>Лічильник</h3>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)} className='minus'> - Мінус</button>
        <button onClick={increase} className='plus'>Плюс +</button>

      </div>
    </div>
  );
}

export default App;
