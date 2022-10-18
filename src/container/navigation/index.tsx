import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "../screens/auth/login";
import ErrorScreen from "../screens/error";
import Dashboard from "../screens/home";
import Profile from "../screens/profile";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/error" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
