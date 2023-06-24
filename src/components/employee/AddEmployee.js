import React from "react";
import EmployeeForm from "./EmployeeForm";

function AddEmployee() {
  const employee = {
    name: "",
    email: "",
    phone: "",
    daysWorked: "",
    assignedCafe: "",
    gender: "",
  };

  return <EmployeeForm initialValues={employee} />;
}

export default AddEmployee;
