import React from "react";
import Item from "./Item";
import { useGlobalContext } from "../../context";

const List = () => {
  const { state } = useGlobalContext();
  return (
    <div className="w-full mt-5 h-[calc(100%-5rem)] bg-gray-100 rounded-md overflow-hidden overflow-y-auto">
      {state.taskList?.map((e, i) => (
        <Item key={i} name={e.name} status={e.status} index={i} id={e.id} stats={e.status === 'DONE' ? 'PENDING' : 'DONE'}/>
      ))}
    </div>
  );
};

export default List;
