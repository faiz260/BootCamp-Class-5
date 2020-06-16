import React from 'react';
import Child from './child'
import Child2 from './Child2'

const Parent = (props) => {
    return(
        <div>
            <h1>This is parent</h1>
            <Child  />
            <Child2/>
        </div>
    )
}

export default Parent