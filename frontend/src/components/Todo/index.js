import React from "react";
import Form from "./Form";
import List from "./List";
const Todo = () => {
  return <div className="max-w-4xl mx-auto bg-white h-4/5 mt-10 rounded-md shadow-md p-6">
      <Form/>
      <List/>
  </div>;
};

export default Todo;
