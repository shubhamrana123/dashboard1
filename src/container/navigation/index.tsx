import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../screens/home";
import Profile from "../screens/profile";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
