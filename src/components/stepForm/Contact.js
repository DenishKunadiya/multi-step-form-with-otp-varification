import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Contact = ({ formData, setForm, navigation }) => {
  // const { username, password } = formData;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("");
  const submitForm = (e) => {
    console.log("Final submit button was clicked");

    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("userImage", userImage);
    // createBlog(formData).then(() => {
    //   history.push("/blog");
    // });
    console.log("formdata", formData);
  };
  return (
    <Container
      maxWidth="xs"
      style={{ border: "2px solid black", marginTop: "5rem", padding: "5rem" }}
    >
      <h3> Other Detail </h3>
      <TextField
        label="Enter Username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <input
        type="file"
        name="userImage"
        id=""
        onChange={(e) => setUserImage(e.target.files[0])}
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
        <Button color="primary" variant="contained" onClick={submitForm}>
          Submit Form{" "}
        </Button>{" "}
      </div>{" "}
    </Container>
  );
};
