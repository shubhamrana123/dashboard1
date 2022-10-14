import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";

const ErrorScreen = () => {
  return (
    <Stack display={"flex"} direction={"row"}>
      <Stack>
        <Container sx={{ display: "flex", marginTop: 20, alignItems:'center', justifyContent:'center' }}>
          <Typography sx={{ padding: 4 }}>Error Screen</Typography>
         
        </Container>
      </Stack>
     
    </Stack>
  );
};

export default ErrorScreen;
