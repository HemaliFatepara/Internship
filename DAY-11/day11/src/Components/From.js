import React, { useState } from 'react'

export default function From (){

  const [firstName , setFirstName] = useState('')
  const [lastname , setLastName] = useState('')

  function handlefirstname (e) {
    setFirstName(e.target.value);
  }

  function handlelastname (e) {
    setLastName(e.target.value);
  }

  function handlereset (){
    setFirstName('')
    setLastName('')
  }

  return (

    <div>
      <from onSubmit = {e => e.preventDefault()}>
        <input type='text' placeholder='first name' value={firstName} onChange={handlefirstname}></input>
        <input type='text' placeholder='last name' value={lastname} onChange={handlelastname}></input><br /><br />
        <h1>hi, {firstName} {lastname}</h1>
        <button onClick={handlereset}>Reset</button>
      </from>
    </div>
  )

}