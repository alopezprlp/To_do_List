import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Todo from "./components/Todo";
import { useGlobalContext } from "./context";
import { FILL_STORED_LIST } from "./context/constants";
const App = () => {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    const fetchApi = async () => {
      fetch("http://localhost:5000/api/getAllTasks")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: FILL_STORED_LIST,
            payload: data,
          });
          console.log(data);
        });
    };
    fetchApi();
  }, []);

  return (
    <div className="text-3xl font-bold underline w-full h-screen bg-gray-200">
      <Nav />
      <Todo />
    </div>
  );
};

export default App;
