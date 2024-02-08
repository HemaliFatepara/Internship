import React from "react";

const Btn = () => {

  const handleClick = () => {
    alert('button clicked');
  };

  const handleReset = () => {
    alert('hello')
  };

  return (
    <div>

    <button onClick={handleClick}>
        Click
      </button>

      <hr />

      <button onClick={handleReset}>Reset</button> 
    </div>
  );
};

export default Btn;
