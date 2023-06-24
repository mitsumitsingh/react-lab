import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  InputLabel,
  Input,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
} from "@mui/material";
import { GlobalContext } from "../../context/GlobalState";

function EmployeeForm({ initialValues, action }) {
  const [employee, setEmployee] = useState(initialValues);
  const [cafeList, setCafeList] = useState([]);
  const { addEmployee, editEmployee } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    setEmployee(initialValues);
    getAssignedCafe();
  }, [initialValues]);

  const getAssignedCafe = async () => {
    try {
      const response = await axios.get(
        "https://6496d62183d4c69925a32706.mockapi.io/Example/getDropdown"
      );
      const cafes = response.data.map((cafe, index) => (
        <MenuItem key={index} value={cafe}>
          {cafe}
        </MenuItem>
      ));
      setCafeList(cafes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setEmployee(initialValues);
    getAssignedCafe();
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Edit") {
      editEmployee(employee);
    } else {
      addEmployee(employee);
    }
    history.push("/employees");
  };

  return (
    <Box maxWidth={400} mx="auto" marginTop={4} marginBottom={4}>
      <Typography variant="h6" gutterBottom>
        {action === "Edit" ? "Edit Employee" : "Add Employee"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={employee.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={employee.phone}
            onChange={handleChange}
          />
        </FormControl>
        <FormGroup>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="daysWorked">Days Worked in Cafe</InputLabel>
            <Input
              id="daysWorked"
              name="daysWorked"
              type="number"
              value={employee.daysWorked}
              onChange={handleChange}
            />
            <FormHelperText>
              Number of days the employee has worked in the cafe.
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              defaultValue={employee.gender}
              id="gender"
              name="gender"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel id="assignedCafeLabel">Assigned Cafe</InputLabel>
            <Select
              name="assignedCafe"
              id="assignedCafe"
              value={employee.assignedCafe}
              label="AssignedCafe"
              onChange={handleChange}
            >
              {cafeList}
            </Select>
          </FormControl>
        </FormGroup>
        <Button type="submit" variant="contained" color="primary">
          {action === "Edit" ? "Save Changes" : "Add Employee"}
        </Button>
      </form>
    </Box>
  );
}

export default EmployeeForm;
