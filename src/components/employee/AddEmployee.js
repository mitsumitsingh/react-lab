import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { useHistory, Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const AddEmployee = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [daysWorkedInCafe, setDaysWorkedInCafe] = useState("");
  const [cafeName, setCafeName] = useState("");
  const [gender, setGender] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const { addEmployee } = useContext(GlobalContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name,
      email_address: emailAddress,
      phone_number: phoneNumber,
      days_worked_in_cafe: daysWorkedInCafe,
      cafe_name: cafeName,
      gender: gender,
    };
    addEmployee(newEmployee);
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
                Name of employee
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIsDirty(true);
                }}
                placeholder="Enter name"
                pattern=".{6,10}"
                required
                error={name.length > 0 && (name.length < 6 || name.length > 10)}
                helperText={
                  name.length > 0 &&
                  (name.length < 6 || name.length > 10) &&
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
                value={emailAddress}
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                  setIsDirty(true);
                }}
                placeholder="Enter Email Address"
                type="email"
                required
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
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setIsDirty(true);
                }}
                placeholder="Enter Phone Number"
                pattern="[89]\d{7}"
                required
                error={
                  phoneNumber.length > 0 && !/^[89]\d{7}$/.test(phoneNumber)
                }
                helperText={
                  phoneNumber.length > 0 &&
                  !/^[89]\d{7}$/.test(phoneNumber) &&
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
                Days Worked In Cafe
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={daysWorkedInCafe}
                onChange={(e) => {
                  setDaysWorkedInCafe(e.target.value);
                  setIsDirty(true);
                }}
                placeholder="Enter Days Worked In Cafe"
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
                value={cafeName}
                onChange={(e) => {
                  setCafeName(e.target.value);
                  setIsDirty(true);
                }}
                placeholder="Enter Cafe Name"
              />
            </Box>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                  setIsDirty(true);
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
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
                Add Employee
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
