import React from 'react'

const Cars = () => {
const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
      <h1>Who leaves in my garage?</h1>
      <ul>
        {cars.map((car , index) => (
            <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cars;
