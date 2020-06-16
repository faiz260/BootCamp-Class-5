import React, {useState} from 'react';
import './App.css';
import Parent from './Components/parent';
import CounterContext from './Components/counterContext'

function App() {

  // let [count, setCount] = useState(0)
  let countState = useState(0)

  return (
  <CounterContext.Provider value={countState} >
    <div>
     <Parent/>
    </div>
  </CounterContext.Provider>
  );
}

export default App;
