import RootNavigation from "./container/navigation";
import SignupScreen from "./container/screens/auth/Signup";

const App = () => {
  return (
    <>
      <RootNavigation />
      <SignupScreen/>
    </>
  );
};

export default App;
