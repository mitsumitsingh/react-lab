import React, { Fragment, useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export const EditEmployee = (route) => {
  let history = useHistory();
  const { employees, editEmployee } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDirty, setIsDirty] = useState(false);
  const currentUserId = route.match.params.id;

  useEffect(() => {
    const employeeId = parseInt(currentUserId);
    const selectedUser = employees.find((emp) => emp.id === employeeId);
    setSelectedUser(selectedUser);
  }, [currentUserId, employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    history.push("/employees");
  };

  const handleCancel = () => {
    if (isDirty) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to cancel?"
        )
      ) {
        history.push("/employees");
      }
    } else {
      history.push("/employees");
    }
  };

  const handleOnChange = (userKey, value) => {
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [userKey]: value,
    }));
    setIsDirty(true);
  };

  if (!selectedUser || !selectedUser.id) {
    return <div>Employee Not Present</div>;
  }

  return (
    <Fragment>
      <Box marginTop={15}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box mb={5}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                fontWeight="bold"
                mb={2}
              >
                Name of Employee
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={selectedUser.name}
                onChange={(e) => handleOnChange("name", e.target.value)}
                placeholder="Enter Name"
                required
                inputProps={{
                  minLength: 6,
                  maxLength: 10,
                }}
                error={
                  selectedUser.name.length > 0 &&
                  (selectedUser.name.length < 6 ||
                    selectedUser.name.length > 10)
                }
                helperText={
                  selectedUser.name.length > 0 &&
                  (selectedUser.name.length < 6 ||
                    selectedUser.name.length > 10) &&
                  "Name should be between 6 and 10 characters."
                }
              />
            </Box>
            <Box mb={5}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                fontWeight="bold"
                mb={2}
              >
                Email Address
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={selectedUser.email_address}
                onChange={(e) =>
                  handleOnChange("email_address", e.target.value)
                }
                placeholder="Enter Email Address"
                required
                type="email"
              />
            </Box>
            <Box mb={5}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                fontWeight="bold"
                mb={2}
              >
                Phone Number
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={selectedUser.phone_number}
                onChange={(e) => handleOnChange("phone_number", e.target.value)}
                placeholder="Enter Phone Number"
                pattern="[89]\d{7}"
                required
                error={
                  selectedUser.phone_number.length > 0 &&
                  !/^[89]\d{7}$/.test(selectedUser.phone_number)
                }
                helperText={
                  selectedUser.phone_number.length > 0 &&
                  !/^[89]\d{7}$/.test(selectedUser.phone_number) &&
                  "Please enter a valid SG phone number."
                }
              />
            </Box>
            <Box mb={5}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                fontWeight="bold"
                mb={2}
              >
                Days Worked in Cafe
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={selectedUser.days_worked_in_cafe}
                onChange={(e) =>
                  handleOnChange("days_worked_in_cafe", e.target.value)
                }
                placeholder="Enter Days Worked in Cafe"
              />
            </Box>
            <Box mb={5}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                fontWeight="bold"
                mb={2}
              >
                Assigned Cafe
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={selectedUser.cafe_name}
                onChange={(e) => handleOnChange("cafe_name", e.target.value)}
                placeholder="Enter Cafe Name"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="success"
                fullWidth
                type="submit"
              >
                Edit Employee
              </Button>
            </Box>
            <Typography variant="subtitle2" mt={4} textAlign="center">
              <Link to="/" onClick={handleCancel}>
                Cancel
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Fragment>
  );
};
