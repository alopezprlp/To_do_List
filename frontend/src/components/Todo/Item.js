import React from "react";
import { TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
const Item = ({ name, status }) => {
  return (
    <div
      className={`w-full p-2 bg-slate-200 ${
        status === "DONE" && "line-through"
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <p className="text-base truncate">{name}</p>
        <div className="flex items-center justify-between space-x-3 pl-2">
          <PencilAltIcon className="h-6 w-6 text-green-500 cursor-pointer" />
          <TrashIcon className="h-6 w-6 text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Item;
