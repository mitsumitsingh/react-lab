import React, { createContext, useReducer, useEffect } from "react";
import {
  reducer,
  fetchEmployees,
  removeEmployee,
  addEmployee,
  editEmployee,
} from "./EmployeeReducer";

const initialState = {
  employees: [],
  cafe: [],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchEmployees(dispatch);
  }, []);

  const handleRemoveEmployee = (id) => {
    removeEmployee(dispatch, id);
  };

  const handleAddEmployee = (employee) => {
    addEmployee(dispatch, employee);
  };

  const handleEditEmployee = (employee) => {
    editEmployee(dispatch, employee);
  };

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        removeEmployee: handleRemoveEmployee,
        addEmployee: handleAddEmployee,
        editEmployee: handleEditEmployee,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
