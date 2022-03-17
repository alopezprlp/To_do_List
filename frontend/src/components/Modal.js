import React, { useState } from "react";
import { updateTask } from "../context/action";
import { useGlobalContext } from "../context";

const Modal = ({ showModal, setShowModal, name, id }) => {
  const { dispatch } = useGlobalContext();
  const [inputName, setInputName] = useState(name);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!inputName.length) {
        alert("Can not store an empty value. Please type a task.");
        return;
      }
      await fetch("http://localhost:5000/api/updateTask", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name: inputName }),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch(updateTask({ id, name: inputName }));
          setShowModal(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50 mx-auto w-full">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Actualizar Tarea</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    <h1 className="text-2xl mb-2">Tarea</h1>

                    <input
                      onChange={(e) => setInputName(e.target.value)}
                      value={inputName}
                      placeholder="Type..."
                      autoFocus={true}
                      className="w-full shadow appearance-none border rounded py-1 px-1 md:py-2 md:px-3 text-gray-700 leading-tight focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                    >
                      Actualizar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
