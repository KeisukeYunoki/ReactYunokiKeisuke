import React, { useState } from 'react'

function AddressAuto() {
    const [postNum, setPostNum] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const handleSearch = () => {
        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postNum}`)
            .then(response => response.json())
            .then(data => {
                setAddress1(data.results[0].address1)
                setAddress2(data.results[0].address2)
                setAddress3(data.results[0].address3)
            })
            .catch(error => {
                console.error('リクエストエラー:', error);
            })
        };

    const handleCrear = () => {
        setPostNum("");
        setAddress1("");
        setAddress2("");
        setAddress3("");
    }
 
    return (
        <div>
            <div>AddressAuto</div>
            <div>
                郵便番号
                <input type="text" value={postNum} onChange={(e) => setPostNum(e.target.value)}/>
                <button onClick={() => handleSearch()}>自動入力</button>
                <button onClick={() => handleCrear()}>クリア</button>
            </div>
            <>都道府県：{address1}</>
            <br />
            <>市区町村：{address2}</>
            <br />
            <>町域：{address3}</>
        </div>
    )
}

export default AddressAuto