import React, { useState  } from 'react';
const Task3 = () => {
  const [firstname , setFirstName] = useState('')
  const [lastname , setLastName] = useState('')
  const [email , setEmail] = useState('')
  const [gender , setGender] = useState('Male')
  const [addr , setAddr] = useState('')
  const [job, setJob] = useState([]); 
  const [db , setDb] = useState([])

let result = "";
function getValue() {
    let checkboxes =
        document.getElementsByName('val');
    
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + ", ";
        }
    } setDb(result);  
}

const handleSubmit = (e) => {

    e.preventDefault();
    setItem([...item,{Firstname:firstname,Lastname:lastname,Email:email,Gender:gender,Address:addr,ProgramingLanguage:job , Databases:db}])
    setFirstName('')
    setLastName('')
    setEmail('')
    setGender('Male')
    setAddr('')
  };

const handleJobChange = (event) => {
const selectedValues = Array.from(event.target.selectedOptions).map(option => option.value);
    setJob(selectedValues);
};
  
const [item, setItem] = useState(() => {
    const savedState = localStorage.getItem("data");
    const item = JSON.parse(savedState);
    return item || [];
});

const updateItem = (event) => {
    event.preventDefault();
    var newItem = item.slice();
    newItem.push(item);
    setItem(newItem);
};

React.useEffect(()=>{  
       localStorage.setItem('data',JSON.stringify(item))   
}, [item])

const tdata= JSON.parse(localStorage.getItem('data',item))
const tfirstname = tdata.map((item) => {
  return (
    item.Firstname
    )
}); 

console.log(tfirstname);


console.log(tdata)
console.log(tfirstname)
const Table = () => {
  
  return (
    <div>
      <table>
        <tr>
        <th>Firstname: </th>
        <th>Lastname: </th>
        <th>Gender: </th>
        <th>Email: </th>
        <th>ProgramingLanguage: </th>
        <th>Databases: </th>
        </tr>    
      </table>
    </div>
  )
}



return(

<form onSubmit={handleSubmit }>

First Name: <input type = "text" name="name" value={firstname} onChange={(e) => setFirstName(e.target.value)}/><br /><br />

Last Name: <input type = "text" name="price" value={lastname} onChange={(e) => setLastName(e.target.value)}/><br /><br />

Enter Your Email: <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br /><br />

Select Your Gender: 
    <label><input type='radio' name="Gender" value="Male" defaultChecked onChange={(e) => setGender(e.target.value)}></input>Male</label>
    <label><input type='radio' name="Gender"  value="Female" onChange={(e) => setGender(e.target.value)}></input>Female</label>
    <br /><br />

Enter Your Address: <br /><br />
<textarea placeholder="Enter your Addr.." value={addr} onChange={(e) => setAddr(e.target.value)}></textarea>
<br /><br />

Programing Language: <br /><br /> 
<select multiple onChange={handleJobChange}>
<option>React js</option>
<option>Node js</option>
<option> Andriod</option>
<option>php</option>
</select><br /><br /> 

<div onChange={getValue}>
Databases: <br /><br /> 
<input type="checkbox" id="val1" name="val" value="MongoDB"/> 
<label for="val1"> Mongo DB</label><br />
<input type="checkbox" id="val2" name="val" value="MySQL" />
<label for="val2"> MySQL</label><br />
<input type="checkbox" id="val3" name="val" value="PostgreSQL" />
<label for="val3"> PostgreSQL</label><br /><br />
</div>

<div><Table /></div>

<input type = "submit" onSubmit={updateItem}/>

</form>

)}

export default Task3;