import React from 'react'
import { useState }  from 'react'
import AddFirstName from './AddFirstName'
import Data from './Data'


let nextId = 3;
const initialFirstNames = [
  { id: 0, firstname: 'Virat', done: true },
  { id: 1, firstname: 'Dhoni', done: false },
  { id: 2, firstname: 'Rohit', done: false },
];


export default function DataTable() {
  const[updateitem , setUpdateItem] = useState(
    initialFirstNames
    );
  
 


  function handleSubmit(firstname) {
    setUpdateItem([
      ...updateitem,
      {
        id: nextId++,
        firstname: firstname,
        done: false
      }
    ]);
  }

  function handleEdit(nextFirstname) {
    setUpdateItem(updateitem.map(t => {
      if (t.id === nextFirstname.id) {
        return nextFirstname;
      } else {
        return t;
      }
    })
    )
  }

  function handleDelete (firstnameId) {
    setUpdateItem(
      updateitem.filter(t => t.id !== firstnameId)
    )
  }

  return (
    <div>
      <AddFirstName 
      onAddFirstName={handleSubmit}
      />
      <Data 
      updateitem={updateitem}
      onEditFirstName={handleEdit}
      onDeleteFirstName={handleDelete}
      />
    </div>
  )

}