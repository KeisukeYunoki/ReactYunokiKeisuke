import React, { useState } from 'react'

function FormatDetermination() {
    const [email, setEmail] = useState("");
    const [telephonenumber, setTelephoneNumber] = useState("");
    const [hasemailError, setHasEmailError] = useState(false);
    const [hasteleError, setHasTeleError] = useState(false);
    
    const handleEmail = () => {
        if (email === "") {
            setHasEmailError(false);
            return;
        }
        // メール判断条件：^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        const conditionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            conditionEmail.test(email)
            ?
            setHasEmailError(false)
            :
            setHasEmailError(true);
    }

    const handleTele = () => {
        if (telephonenumber === "") {
            setHasTeleError(false);
            return;
        }
        // 携帯電話判断条件：/\A0[5789]0[-(]?\d{4}[-)]?\d{4}\z/
        const conditionTele = /^0[5789]0[-(]?\d{4}[-)]?\d{4}$/;
            conditionTele.test(telephonenumber)
            ?
            setHasTeleError(false)
            :
            setHasTeleError(true);
    }


  return (
    <div>FormatDetermination
        <br />
        メールアドレス　
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmail}/>
        {
            hasemailError
            &&
            <div style={{
                color: 'red',
                fontWeight: 'bold'
            }}>※メールアドレス形式が不正です</div>
        }
        <br />
        電話番号　　　　
        <input type="tel"  value={telephonenumber} onChange={(e) => setTelephoneNumber(e.target.value)} onBlur={handleTele}/>
        {
            hasteleError
            &&
            <div style={{
                color: 'red',
                fontWeight: 'bold'
            }}>※電話番号形式が不正です</div>
        }
        <br />
        <button>送信</button>
    </div>
  )
}

export default FormatDetermination