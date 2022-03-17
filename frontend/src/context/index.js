import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
  taskList: [],
};

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };

export const useGlobalContext = () => useContext(GlobalContext);
