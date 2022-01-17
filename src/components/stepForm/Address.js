import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/material";
import background from "../../assets/background.jpg";

export const Address = ({ formData, setForm, navigation }) => {
  // const { otp } = formData;
  // const { phone, username, password, address, zip } = formData;
  const [otp, setOtp] = useState(null);
  const submitOTP = () => {
    console.log("OTP is submitted", otp);
    navigation.next();
  };
  return (
    <Container
      maxWidth="xs"
      style={{
        border: "2px solid black",
        marginTop: "5rem",
        padding: "5rem",
      }}
    >
      <h3> ONE TIME PASSWORD </h3>{" "}
      <TextField
        label="Enter OTP"
        name="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
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
          Back{" "}
        </Button>{" "}
        <Button color="primary" variant="contained" onClick={submitOTP}>
          Next{" "}
        </Button>{" "}
      </div>{" "}
    </Container>
  );
};
