import React, { useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);
    return (
        <div>Counter
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>リセット</button>
        </div>
    )
}

export default CounterApp