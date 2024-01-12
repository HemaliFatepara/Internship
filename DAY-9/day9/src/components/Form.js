import React, { useState , useRef , useEffect } from 'react'

const Form = () => {

  const [inputs , setInputs] = useState({})
  const [textarea ,setTextarea] = useState("The content of a textarea goes in the value attribute")
  const [myCar , setCar]=useState("Volvo")
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTextarea(event.target.addr)
    setCar(event.target.car)
    setInputs(values=> ({...values , [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs, null, 2));
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Enter Your Name:
        <input type='text' name='username' value={inputs.username || ""} onChange={handleChange} />
        <h1>Render Count: {count.current}</h1>
      </label>
      <br />
      <br />
      <br />
      <label>
        Enter Your age:
        <input type='number' name='age' value={inputs.age || "" } onChange={handleChange} />
      </label>
      <br />
      <br />
      <br />
      <label>
        Enter Your address:
        <textarea name='addr' value={textarea} onChange={handleChange} />
      </label>
      <br />
      <br />
      <br />
      <label>
        Select Your car model:
        <select name='car' value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </label>
      <br />
      <br />
      <br />
      
        <input type='submit' />
      </form>
    </div>
  )
}

export default Form 
