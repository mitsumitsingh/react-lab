import axios from "axios";

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        ...state,
        employees: action.payload,
        error: null,
      };
    case "FETCH_EMPLOYEES_FAILURE":
      return {
        ...state,
        employees: [],
        error: action.payload,
      };
    case "REMOVE_EMPLOYEE_SUCCESS":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
        error: null,
      };
    case "REMOVE_EMPLOYEE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ADD_EMPLOYEE_SUCCESS":
      return {
        ...state,
        employees: [...state.employees, action.payload],
        error: null,
      };
    case "ADD_EMPLOYEE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "EDIT_EMPLOYEE_SUCCESS":
      const updatedEmployee = action.payload;

      const updatedEmployees = state.employees.map((employee) => {
        if (employee.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return employee;
      });

      return {
        ...state,
        employees: updatedEmployees,
        error: null,
      };
    case "EDIT_EMPLOYEE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchEmployees = async (dispatch) => {
  try {
    const response = await axios.get(
      "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
    );
    const employees = response.data;

    dispatch({
      type: "FETCH_EMPLOYEES_SUCCESS",
      payload: employees,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_EMPLOYEES_FAILURE",
      payload: error.message,
    });
  }
};

export const removeEmployee = async (dispatch, id) => {
  try {
    console.log("Record Deleted" + id);

    await axios.delete(`https://api.example.com/employees/${id}`);

    dispatch({
      type: "REMOVE_EMPLOYEE_SUCCESS",
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: "REMOVE_EMPLOYEE_FAILURE",
      payload: error.message,
    });
  }
};

export const addEmployee = async (dispatch, employee) => {
  try {
    const response = await axios.post(
      "https://api.example.com/employees",
      employee
    );
    const newEmployee = response.data;

    dispatch({
      type: "ADD_EMPLOYEE_SUCCESS",
      payload: newEmployee,
    });
  } catch (error) {
    dispatch({
      type: "ADD_EMPLOYEE_FAILURE",
      payload: error.message,
    });
  }
};

export const editEmployee = async (dispatch, employee) => {
  try {
    await axios.put(
      `https://api.example.com/employees/${employee.id}`,
      employee
    );

    dispatch({
      type: "EDIT_EMPLOYEE_SUCCESS",
      payload: employee,
    });
  } catch (error) {
    dispatch({
      type: "EDIT_EMPLOYEE_FAILURE",
      payload: error.message,
    });
  }
};
