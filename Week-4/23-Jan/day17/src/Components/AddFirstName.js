import { React , useState } from 'react';

export default function AddFirstName({ onAddFirstName }) {
  const [firstname, setFirstName] = useState('');
  const [item, setItem] = useState(() => {
    const savedState = localStorage.getItem("data");
    const item = JSON.parse(savedState);
    return item || [];
    });

  const handlelocal = (e) => {
    e.preventDefault();
    setItem([...item,{Firstname:firstname}])
    setFirstName('')
  };

//   React.useEffect(()=>{  
//     localStorage.setItem('data',JSON.stringify(item))   
//   }, [item])

  return (
    <div>
    <form onSubmit={handlelocal}>
      <input
        placeholder="Enater Firstname"
        value={firstname}
        onChange={e => setFirstName(e.target.value)}
      />
      <button onClick={() => {
        setFirstName('');
        onAddFirstName(firstname);
      }}>submit</button>
      </form>
    </div>
  )
}
