import React, { useState } from 'react'

function ToggleButton() {
    const [passWord, setPassword] = useState("");
    const [show, setShow] = useState(false);
    
    
    return (
        <div>
        <label>
            Password
            <input type={show ? "text" : "password"} value={passWord} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => setShow(!show)}>
                {show ? "非表示" : "表示"}
            </button>
        </label>
        </div>
    )
}

export default ToggleButton