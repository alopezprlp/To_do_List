import React, { useState, useRef } from "react";
import { useGlobalContext } from "./../../context/index";
import { ADD_TASK } from "./../../context/constants";
const Form = () => {
  const [name, setName] = useState("");
  const { dispatch } = useGlobalContext();
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.length) {
      alert("Can not store an empty value. Please type a task.");
      return;
    }
    await fetch("http://localhost:5000/api/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: ADD_TASK,
          payload: {
            id: data.id,
            name: data.name,
          },
        });
        setName("");
        inputRef.current.focus();
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between space-x-5"
    >
      <div className=" w-full h-auto">
        <input
          ref={inputRef}
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Type..."
          autoFocus={true}
          className="w-full shadow appearance-none border rounded py-1 px-1 md:py-2 md:px-3 text-gray-700 leading-tight focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
