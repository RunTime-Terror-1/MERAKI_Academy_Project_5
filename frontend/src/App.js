import "./App.css";

import { SuperAdminPanel } from "./components/AdminPanle/SuperAdmin";
import { Route, Routes } from "react-router-dom";
import ScreenHome from "./components/UserScreen/ScreenHome"
import AllRestarnts from "./components/UserScreen/AllRestarnts";
import RestaurantPage from "./components/UserScreen/RestaurantPage";
import { LoginComponent } from "./components/UserScreen/Login";
import { RegisterComponent } from "./components/Registration/Register";
import { Loginw } from "./components/Registration/Login";


const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path={"/"} element={<ScreenHome />} />
        <Route path="/SuperAdminPanel" element={<SuperAdminPanel />} />
        <Route path={"/AllRestarnts"} element={<AllRestarnts />} />
        <Route path={"/RestaurantPage"} element={<RestaurantPage />} />
        <Route path={"/register"} element={<RegisterComponent />} />
        <Route path={"/login"} element={<Loginw />} />
    

  
        
      </Routes>
    </div>
  );
};

export default App;
