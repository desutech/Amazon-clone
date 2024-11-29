import React, { createContext, useReducer } from "react";

export const DataContecxt = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContecxt.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContecxt.Provider>
  );
};
