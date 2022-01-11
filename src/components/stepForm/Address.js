import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Address = ({ formData, setForm, navigation, history }) => {
  const { otp, username, image, password } = formData;
  const submitForm = () => {
    history.push("/login");
  };
  return (
    <Container maxWidth="xs">
      <h3> Step : 2 </h3>
      <TextField
        label="otp"
        name="otp"
        value={otp}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="username"
        name="username"
        value={username}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="password"
        name="password"
        type="password"
        value={password}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <input
        label="image"
        name="image"
        type="file"
        value={image}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={submitForm}>
          Submit
        </Button>
      </div>
    </Container>
  );
};
