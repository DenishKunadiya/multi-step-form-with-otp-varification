import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Names = ({ formData, setForm, navigation }) => {
  // const { phone } = formData;
  const [phone, setPhone] = useState(null);

  const secondStepVerify = () => {
    console.log("phone button was clicked", phone);

    navigation.next();
  };

  return (
    <Container
      maxWidth="sm"
      style={{ border: "2px solid black", marginTop: "5rem", padding: "5rem" }}
    >
      <h3> Sign Up </h3> <h3>Step : 1 </h3>
      <TextField
        label="Enter Mobile Number"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={secondStepVerify}
      >
        Next
      </Button>
    </Container>
  );
};
