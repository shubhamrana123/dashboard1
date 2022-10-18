import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";

import BackgroundImage from "../../../assets/image/background-image-auth.png";
import AppLogo from "../../../assets/image/infrablok-logo.png";
import GoogleButton from "../../../assets/image/google-button.png";

const LoginScreen = () => {
  // const navigate = useNavigate();
  const styles = {
    flex: 1,
    paperContainer: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "100vh",
    },
  };
  return (
    <Paper style={styles.paperContainer}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3} style={{ backgroundColor: "white", padding: 20 }}>
          <Grid item xs={3}>
            <CardMedia
              component="img"
              sx={{
                height: "41px",
                width: "200px",
              }}
              image={AppLogo}
              alt="green iguana"
              onClick={() => alert("hi")}
            />
          </Grid>
          <Typography
            sx={{
              marginTop: 1.5,
              fontWeight: "bold",
              fontSize: "22px",
              lineHeight: "48px",
            }}
          >
            Login{" "}
          </Typography>
          <Grid>
            <CardMedia
              component="img"
              sx={{
                height: 36,
                cursor: "pointer",
                marginTop: 1.5,
              }}
              image={GoogleButton}
              alt="green iguana"
              //   onClick={() => alert("hi")}
            />
          </Grid>
          <Divider sx={{ marginTop: 2 }} orientation="horizontal">
            <Typography sx={{ fontSize: 10, color: "#425466" }}>or</Typography>
          </Divider>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              sx={{ marginTop: 2, width: 325 }}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              sx={{ marginTop: 2, width: 325 }}
            />
          </div>
          <Stack display={'flex'} alignItems={'center'} marginTop={2}>
            <Button variant="contained" disableElevation>
              Login
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginScreen;
