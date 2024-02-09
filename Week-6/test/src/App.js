import { useState , useEffect } from "react";
import './App.css';


function App() {
  let timer;
 
  const [count, setCount] = useState();
  const [values, setValues] = useState();


  const handleChange = (e) => {
    setValues(parseInt(e.target.value));
  };

  useEffect(() => {
    if (count) {
      timer = setTimeout(Start, 1000);
    }
  }, [count]);

  function Start() {
      setCount(count => count + 1)
  }

  function Pause(){
    clearTimeout(timer);
  }

  function Reset () {
    setCount(0)
    clearTimeout(timer);
  }
  

  return (
    <div>
      <div>
        <input type='text' id="visitors" onChange={handleChange} value={values}></input>
        {/* <input type='text' id="visitors" onChange={handleChange} value={input_val} ></input> */}
        <div>
        <h1>{count}</h1>
        <button onClick={Start}>Start</button>
        <button onClick={Pause}>Pause</button>
        <button onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );

 


}

export default App;
