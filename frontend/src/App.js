import "./App.css";

import { SuperAdminPanel } from "./components/AdminPanle/SuperAdmin";
import { Route, Routes } from "react-router-dom";
import ScreenHome from "./components/Homepage/ScreenHome";
import AllRestarnts from "./components/AllRestarnts";
import NavBar from "./components/Homepage/NavBar";
import RestaurantPage from "./components/RestaurantPage";

const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path={"/"} element={<ScreenHome />} />
        <Route path="/SuperAdminPanel" element={<SuperAdminPanel />} />
        <Route path={"/AllRestarnts"} element={<AllRestarnts />} />
        <Route path={"/RestaurantPage"} element={<RestaurantPage />} />
      </Routes>
    </div>
  );
};

export default App;
