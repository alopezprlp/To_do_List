import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <div className="w-full mt-5 h-[calc(100%-5rem)] bg-gray-100 rounded-md overflow-hidden overflow-y-auto">
      <Item/>
    </div>
  );
};

export default List;
