import React, { useState } from 'react'

function ProgressBar() {
    const [Freeform, setFreeform] = useState("");
    const Max_Length = 50; 
    
  return (
    <div>ProgressBar
        <br />
        <textarea 
          name="Freeform" 
          id="Freeform"  
          onChange={(e) => setFreeform(e.target.value)}
          maxLength={Max_Length}
          style={{
            width: '300px',
            height: '100px',
            border: '1px solid black',
            borderRadius: '5px',
          }}
        >
        </textarea>
        <br />
        <progress max={Max_Length} value={Freeform.length}></progress>
        {Freeform.length}/{Max_Length}文字
    </div>
  )
}

export default ProgressBar