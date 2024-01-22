import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [firstname , setFirstName] = useState('')
    const [lastname , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [gender , setGender] = useState('Male')
    const [addr , setAddr] = useState('')
    const [job, setJob] = useState([]); 
    const [db , setDb] = useState('')

const handleJobChange = (event) => {
  const selectedValues = Array.from(event.target.selectedOptions).map(option => option.value);
  setJob(selectedValues);
  setDb(selectedValues)
};
    

    const submit = e => {
        e.preventDefault()
        console.log("FirstName: " + firstname)
        console.log("LastName: " + lastname)
        console.log("Email: " + email)
        console.log("Gender: " + gender)
        console.log("Address: " + addr)
        console.log("Job Role: " + job )
        console.log("Job Role: " + db )
    }
  return (
    <div>
       <form onSubmit={submit}>
        <div>
            First Name: <input type='text' value={firstname} onChange={event => setFirstName(event.target.value)}></input><br /><br />
            Last Name: <input type='text' value={lastname} onChange={event => setLastName(event.target.value)}></input><br />
        </div> <br />
        <div>
            Enter Your Email: <input type='email' value={email} onChange={event => setEmail(event.target.value)}></input><br />
        </div><br />
        <div>
            Select Your Gender: 
          <label><input type='radio' name="Gender" value="Male" defaultChecked onChange={event => setGender(event.target.value)}></input>Male</label>
          <label><input type='radio' name="Gender"  value="Female" onChange={event => setGender(event.target.value)}></input>Female</label>
        </div><br />
        <div>
            Enter Your Address: <br /><br />
            <textarea placeholder="Enter your Addr.." value={addr} onChange={event => setAddr(event.target.value)}></textarea>
        </div><br />
        <div>
            
        Programing Language: <br /><br /> <select multiple onChange={handleJobChange}>
        
                <option>React js</option>
                <option>Node js</option>
                <option> Andriod</option>
                <option>php</option>
        
            </select>
        </div><br />
        <div>
            Databases: <br /><br /> 
                <input type="checkbox" id="val1" name="val1" value="Mongo DB"  /> 
                <label for="val1"> Mongo DB</label><br />
                <input type="checkbox" id="vehicle2" name="val2" value="MySQL" />
                <label for="val2"> MySQL</label><br />
                <input type="checkbox" id="vehicle3" name="val3" value="PostgreSQL" />
                <label for="veal3"> PostgreSQL</label><br /><br />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
