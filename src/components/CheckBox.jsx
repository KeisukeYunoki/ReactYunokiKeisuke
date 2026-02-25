import React from 'react'
import { useState } from 'react';

function CheckBox() {
    const items = [
        { id: 1, items: "寿司" },
        { id: 2, items: "天ぷら" },
        { id: 3, items: "焼肉" }
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const handleToggle = (name) => {
        selectedItems.includes(name) 
        ?
        setSelectedItems(selectedItems.filter((item) => item !== name))
        :
        setSelectedItems([...selectedItems, name])
    };
  return (
    <div>CheckBox
        <br />
        {items.map((item) => <label><input type ="checkbox" onChange={() => handleToggle(item.items)} /> {item.items} </label>)}
        <br />
        選択中：{selectedItems.length === 0 ? "なし" : selectedItems.join(", ")}
    </div>
  )
}

export default CheckBox