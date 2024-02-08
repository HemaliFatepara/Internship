import React from 'react'
import { useEffect , useState } from 'react';


const Time = () => {
const [count , setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 5000);
      } , []);
  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default Time
