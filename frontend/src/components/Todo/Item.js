import React, { useState } from "react";
import {
  TrashIcon,
  PencilAltIcon,
  XIcon,
  CheckIcon,
} from "@heroicons/react/outline";
import { useGlobalContext } from "./../../context/index";
import { removeTask, changeStatus } from "../../context/action";
import Modal from "./../Modal";
const Item = ({ name, status, index, id, stats }) => {
  const { dispatch } = useGlobalContext();
  const [showModal, setModal] = useState(false);

  const deletTask = async () => {
    await fetch("http://localhost:5000/api/deleteTask", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(removeTask(data));
      });
  };

  const Toggle = async () => {
    await fetch("http://localhost:5000/api/changeStatus", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: stats }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(changeStatus({ id, status: stats }));
      });
  };

  return (
    <div
      className={`w-full p-2 ${
        index % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
      } hover:bg-slate-400 ${status === "DONE" && "line-through"}`}
    >
      <div className="flex flex-row justify-between items-center">
        <p className="text-base truncate">{name}</p>
        <div className="flex items-center justify-between space-x-3 pl-2">
          {status === "DONE" ? (
            <CheckIcon
              className="h-6 w-6 text-blue-500 cursor-pointer"
              onClick={() => Toggle()}
            />
          ) : (
            <XIcon
              className="h-6 w-6 text-gray-500 cursor-pointer"
              onClick={() => Toggle()}
            />
          )}

          <PencilAltIcon
            className="h-6 w-6 text-green-500 cursor-pointer"
            onClick={() => setModal(true)}
          />
          <TrashIcon
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={() => deletTask()}
          />
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setModal}
        name={name}
        id={id}
      />
    </div>
  );
};

export default Item;
