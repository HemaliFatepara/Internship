import { useRef, useState } from "react";

export default function Stopwatch(){
    const [startTime , setStartTime] = useState(null);
    const [now , setNow] = useState(null);
    const intervelRef = useRef(null) ;

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervelRef.current);
        intervelRef.current = setInterval(() => {
            setNow(Date.now());
        } , 10);
    }

    function hanldeStop(){
        clearInterval(intervelRef.current);
    }

    let secondpassed = 0;
    if (startTime != null && now != null){
        secondpassed = (now - startTime) / 1000 ;
    }

    return (
        <div>
            <h1>Time Passed: {secondpassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={hanldeStop}>Stop</button>
        </div>
    );
}