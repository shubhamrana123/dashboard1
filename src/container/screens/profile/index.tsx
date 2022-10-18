import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate()
  return (
   <>
    <div>{"Profile Screen"}</div>
    <Container sx={{ display: "flex", marginTop: 4 }}>
          <Button onClick={() => navigate(-1)} variant="contained">
            Go Back
          </Button>
        </Container>
   </>
  );
};

export default Profile;
