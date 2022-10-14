import { Button, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Container, Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { DECREASE_COUNTER_1, DECREASE_COUNTER_2, INCREASE_COUNTER_1, INCREASE_COUNTER_2 } from "../../redux/action-types";
import { handleCounterAction } from "../../redux/actions/dashboard";

const Dashboard = () => {

  const dispatch = useDispatch();
  const store = useSelector((s:any) => s.counterReducer)

  const handleCounter = (code: any) => {
      switch(code) {
        case '1' : {
          dispatch(handleCounterAction(INCREASE_COUNTER_1, null))
          break;
        }
        case '2' : {
          dispatch(handleCounterAction(DECREASE_COUNTER_1, null))
          break;
        }
        case '3' : {
          dispatch(handleCounterAction(INCREASE_COUNTER_2, null))
          break;
        }
        case '4' : {
          dispatch(handleCounterAction(DECREASE_COUNTER_2, null))
        }
      }
  }

  return (
    <Stack>
      <Container sx={{ display: "flex", marginTop: 20 }}>
        <Typography sx={{ padding: 4 }}>Counter 1</Typography>
        <Button onClick={() => handleCounter('1')} variant="contained" >Add</Button>
        <Typography sx={{ padding: 4, backgroundColor: green[300] }}>{store.counter1}</Typography>
        <Button onClick={() => handleCounter('2')} variant="contained">Subtract</Button>
      </Container>
      <Container sx={{ display: "flex", marginTop: 4 }}>
        <Typography sx={{ padding: 4 }}>Counter 2</Typography>
        <Button onClick={() => handleCounter('3')} variant="contained">Add</Button>
        <Typography sx={{ padding: 4, backgroundColor: green[300] }}>{store.counter2}</Typography>
        <Button onClick={() => handleCounter('4')} variant="contained">Subtract</Button>
      </Container>
    </Stack>
  );
};

export default Dashboard;
