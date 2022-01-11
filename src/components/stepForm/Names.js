import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Names = ({ formData, setForm, navigation }) => {
  const { phone } = formData;

  return (
    <Container maxWidth="xs">
      <h3> Sign Up </h3> <h3>Step : 1 </h3>
      <TextField
        label="Enter Mobile Number"
        name="phone"
        value={phone}
        onChange={setForm}
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
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
