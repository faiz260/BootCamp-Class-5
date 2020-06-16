import React, {useReducer} from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {

    let [state, dispatch] = useReducer(counterReducer, 0);
    console.log(state)
    return(
        <div>
            <h1>Reducer Counter</h1>
            <h3>Value of second child state is: {state} </h3>
            <button onClick={()=>dispatch('INCREMENT')} >Increment Reducer</button>
            <button onClick={()=>dispatch('DECREMENT')} >Decrement Reducer</button>
        </div>
    )
}

export default Child2