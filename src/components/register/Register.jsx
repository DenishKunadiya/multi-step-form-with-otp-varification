import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <CssBaseline>
        <Container maxWidth="lg" sx={{ marginTop: 5 }}>
          <Box sx={{ bgcolor: "#bf7666", height: "100vh" }}>
            <Container>
              <Box sx={{ border: 1, textAlign: "center" }}>
                <Typography variant="h3">Register</Typography>
              </Box>
              {/* <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  marginTop: 5,
                }}
              >
                <TextField fullWidth label="@Username" id="fullWidth" />
              </Box> */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  marginTop: 5,
                }}
              >
                <TextField fullWidth label="Mobile number" id="fullWidth" />
              </Box>
              {/* <Box
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
                  color="secondary"
                  id="fullWidth"
                />
              </Box>

              <Box
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  marginTop: 5,
                }}
              >
                <input type="file" name="" id="" />
              </Box> */}
            </Container>
            <Container
              style={{
                display: "flex",
                // height: "100%",
                justifyContent: "center",
              }}
            >
              <Button variant="outlined">Register</Button>
            </Container>
            <Container>
              <p>
                already have an account <Link to="/login">Login</Link>
              </p>
            </Container>
          </Box>
        </Container>
      </CssBaseline>
    </div>
  );
}

export default Register;
