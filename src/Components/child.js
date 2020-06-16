import React, {useContext} from 'react';
import CounterContext from './counterContext';

const Child = () => {

    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return(
        <div>
            <h1>Context Counter</h1>
            <h3>Counter Value is: {counterValue[0]} </h3>
            <button onClick={()=>{counterValue[1](++counterValue[0])}} >Increment counter</button>
        </div>
    )
}

export default Child