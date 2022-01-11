import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Container>
            <Box sx={{ border: 1, textAlign: "center" }}>
              <Typography variant="h3">Login</Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: 5,
              }}
            >
              <TextField fullWidth label="Mobile number" id="fullWidth" />
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: 5,
              }}
            >
              <TextField fullWidth label="OTP" id="fullWidth" />
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                marginTop: 5,
              }}
            >
              <TextField
                fullWidth
                label="Password"
                id="fullWidth"
                color="secondary"
              />
            </Box>
          </Container>
          <Container
            style={{
              display: "flex",
              // height: "100%",
              justifyContent: "center",
            }}
          >
            <Button variant="outlined">Login</Button>
          </Container>
          <Container>
            <p>
              Don't have an account <Link to="/register">Regiter</Link>
            </p>
          </Container>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
