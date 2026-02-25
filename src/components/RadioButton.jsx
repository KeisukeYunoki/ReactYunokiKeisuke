import React, { useState } from 'react'

const RadioButton = () => {
    const distinctionSex = [
    { id: 1, sex: "男性" },
    { id: 2, sex: "女性" }
    ];
    const [selectedSex, setSelectedSex] = useState("男性")
  return (
    <div>RadioButton
        <br />
            {distinctionSex.map((item) => 
                <label>
                    <input 
                    type ="radio" 
                    name="gender" 
                    checked={selectedSex === item.sex}
                    onChange={() => setSelectedSex(item.sex)}
                    />
                {item.sex}
                </label>)
            }
        <br />
            選択中：{selectedSex}
    </div>
    )
}

export default RadioButton