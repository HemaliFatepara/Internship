import { useState } from 'react';

export default function TaskList({
    updateitem,
    onEditFirstName,
    onDeleteFirstName
}) {
  return (
    <ul>
      {updateitem.map(updateitem => (
        <li key={updateitem.id}>
          <Task
            updateitem={updateitem}
            onEditFirstName={onEditFirstName}
            onDeleteFirstName={onDeleteFirstName}
          />
        </li>
      ))}
    </ul>
  );
}

function Task({ updateitem, onEditFirstName, onDeleteFirstName }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={updateitem.firstname}
          onChange={e => {
            onEditFirstName({
              ...updateitem,
              firstname: e.target.value
            });
          }} /><br /><br />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    todoContent = (
      <>
        {updateitem.firstname}<br /><br />
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      {todoContent}
      <button onClick={() => onDeleteFirstName(updateitem.id)}>
        Delete
      </button><br /><br />
    </label>
  );
}
