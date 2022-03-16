import React from "react";

const Form = () => {
  return (
    <form className="flex items-center justify-between space-x-5">
      <div className=" w-full h-auto">
        <input
          placeholder="Type..."
          autoFocus={true}
            className="w-full shadow appearance-none border rounded py-1 px-1 md:py-2 md:px-3 text-gray-700 leading-tight focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
