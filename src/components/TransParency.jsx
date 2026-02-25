import React, { useEffect, useRef, useState } from 'react'

function Transparency() {
    const [Opacity, setOpacity] = useState("100");

    return (
    <div>Transparency
        <div style={{
            width: '300px',
            height: '300px',
            backgroundColor: 'blue',
            opacity: Opacity/100,
            margin: '10px'
        }}></div>
        <br />
        <input type="range" 
            value={Opacity}
            min={'0'}
            max={'100'}
            onChange={(e) => setOpacity(e.target.value)}
        />
    </div>        

    )
}

export default Transparency