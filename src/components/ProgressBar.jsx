import React, { useState } from 'react'

function ProgressBar() {
    const [Freeform, setFreeform] = useState("");
    
  return (
    <div>ProgressBar
        <br />
        <textarea name="Freeform" id="Freeform"  onChange={(e) => setFreeform(e.target.value)}></textarea>
        <br />
        <progress max={50} value={Freeform.length}></progress>
        {Freeform.length}/50文字
    </div>
  )
}

export default ProgressBar