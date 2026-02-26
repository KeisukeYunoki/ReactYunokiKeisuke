import React, { useEffect, useState } from 'react'

function BMICalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const heightInMeters = height / 100;
    const myBmi = (weight && height)
                ?
                (weight / heightInMeters ** 2).toFixed(2)
                :
                "計算不可";
    const [judgment, setJudgment] = useState("");
    useEffect(() => {
        if (myBmi === "計算不可") {
            setJudgment("判定不能")
            return;
        }
        
            if (Number(myBmi) < 18.5) {
                setJudgment("痩せ")
            } else if (18.5 <= Number(myBmi) && Number(myBmi) < 25) {
                setJudgment("普通")
            } else if (25 <= Number(myBmi)) {
                setJudgment("肥満")
            } 
        
    }, [myBmi]);

    return (
        <div>
            <div>BMICalculator</div>
            <div>
                身長：
                <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
                cm
            </div>
            <div>
                体重：
                <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                kg
            </div>
            <div>
                BMI：{myBmi}{myBmi !== "計算不可" && "nn"}
            </div>
            <div>
                判定：{judgment}
            </div>
        </div>
    )
}

export default BMICalculator