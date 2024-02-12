import React, { useState } from "react";
import { useEffect } from "react";

const Task2 = () => {
  let timer;
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const [updated, setUpdated] = useState(input);

  function handlechange(e) {
    if (e.target.value < 60) {
      setInput(parseInt(e.target.value));
    } else {
      alert("Please enter value between 0-59");
    }
  }

  useEffect(() => {
    if (updated) {
      timer = setTimeout(Start, 1000);
    }
  }, [updated]);

  function Start() {
    if (isActive === false && updated > 0) {
      setUpdated((updated) => updated - 1);
    } else if (updated === 0) {
      clearTimeout(timer);
    }
  }

  function Pause() {
    if (isActive === false) {
      setIsActive(true);
      clearTimeout(timer);
    } else if (updated > 0) {
      setUpdated((updated) => updated - 1);
      setIsActive(false);
    }
  }

  function Reset() {
    setIsActive(false);
    setInput("");
    setUpdated("");
    clearTimeout(timer);
  }

  const handleClick = () => {
    if (input === "") {
      alert("Please enter value....");
    } else {
      setUpdated(input);
    }
  };



  return (
    <div>
      <h3 className="font-sans text-4xl text-center text-neutral-950">
        Count Down
      </h3>
      <br />
      <input
        type="number"
        max="59"
        min="1"
        onChange={handlechange}
        value={input}
        placeholder="Please enter value...."
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <br />
      <br />
      <div>
        {" "}
        <span className="box-border h-32 w-32 p-4 border-4 border-indigo-500	">
          Remaining Minutes: {updated}
        </span>
      </div>
      <br />
      <br />

      <button
        onClick={() => {
          Start();
          handleClick();
        }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        // disabled={isActive }
      >
        Start
      </button>

      <button
        onClick={Pause}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        disabled={updated === ''}
      >
        {isActive ? "resume" : "Pause"}
      </button>

      <button
        onClick={Reset}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        disabled={updated === ''}
      >
        Reset
      </button>
    </div>
  );
};

export default Task2;
