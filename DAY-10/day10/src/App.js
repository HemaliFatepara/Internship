import './App.css';
import Gallery from './Components/Gallery';
import Profile from './Components/Profile';
import List from './Components/List';
import React from 'react'
import Counter from './Components/Counter';
import Clock from './Components/Clock';
const App = () => {
  return (
  <div>
      <div>
        <List />
      </div>
      <div>
        <Clock /><br />
      </div>
      <div>
        <Counter />
      </div><br />
      <div>
        <Gallery />
      </div>
      <div>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      </div>
     
  </div>
  )
}

export default App


   
 
 

     
