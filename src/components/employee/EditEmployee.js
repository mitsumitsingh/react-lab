import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import { GlobalContext } from "../../context/GlobalState";

export default function EditEmployee() {
  const { id } = useParams();
  const { employees } = useContext(GlobalContext);
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return <EmployeeForm initialValues={employee} action={"Edit"} />;
}
