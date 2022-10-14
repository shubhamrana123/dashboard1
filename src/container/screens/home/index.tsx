import { Button, Typography } from "@mui/material";
import { green, purple } from "@mui/material/colors";
import { Container, Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREASE_COUNTER_1,
  DECREASE_COUNTER_2,
  INCREASE_COUNTER_1,
  INCREASE_COUNTER_2,
} from "../../redux/action-types";
import { fetchPosts, handleCounterAction } from "../../redux/actions/dashboard";

const Dashboard = () => {
  const dispatch = useDispatch<any>();
  const {allPosts, counter1, counter2} = useSelector((s: any) => s.counterReducer);

  const handleCounter = (code: any) => {
    switch (code) {
      case "1": {
        dispatch(handleCounterAction(INCREASE_COUNTER_1, null));
        break;
      }
      case "2": {
        dispatch(handleCounterAction(DECREASE_COUNTER_1, null));
        break;
      }
      case "3": {
        dispatch(handleCounterAction(INCREASE_COUNTER_2, null));
        break;
      }
      case "4": {
        dispatch(handleCounterAction(DECREASE_COUNTER_2, null));
      }
    }
  };

  const fetchAllPosts = async () => {
    // const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    // console.log("All posts =", posts);
    dispatch(fetchPosts())
    // console.log("All posts =", allPosts);
  };

  return (
    <Stack display={"flex"} direction={"row"}>
      <Stack>
        <Container sx={{ display: "flex", marginTop: 20 }}>
          <Typography sx={{ padding: 4 }}>Counter 1</Typography>
          <Button onClick={() => handleCounter("1")} variant="contained">
            Add
          </Button>
          <Typography sx={{ padding: 4, backgroundColor: green[300] }}>
            {counter1}
          </Typography>
          <Button onClick={() => handleCounter("2")} variant="contained">
            Subtract
          </Button>
        </Container>
        <Container sx={{ display: "flex", marginTop: 4 }}>
          <Typography sx={{ padding: 4 }}>Counter 2</Typography>
          <Button onClick={() => handleCounter("3")} variant="contained">
            Add
          </Button>
          <Typography sx={{ padding: 4, backgroundColor: green[300] }}>
            {counter2}
          </Typography>
          <Button onClick={() => handleCounter("4")} variant="contained">
            Subtract
          </Button>
        </Container>
        <Container sx={{ display: "flex", marginTop: 4 }}>
          <Button onClick={fetchAllPosts} variant="contained">
            Fetch All Posts
          </Button>
        </Container>
      </Stack>
      <Stack>
        <Typography
          sx={{ margin: 1, padding: 2, backgroundColor: purple[500] }}
        >
          {"Post title"}
        </Typography>
        {allPosts?.map((item: { title: string, id: number }) => {
          return (
            <Typography
              key={item.id}
              sx={{ margin: 1, padding: 2, backgroundColor: purple[100] }}
            >
              {item.title}
            </Typography>
          );
        })}
      
      </Stack>
    </Stack>
  );
};

export default Dashboard;
