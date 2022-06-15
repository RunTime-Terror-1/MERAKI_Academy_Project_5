import "./App.css";
import { SuperAdminPanel } from "./components/AdminPanle/SuperAdmin";
import { Route, Routes } from "react-router-dom";
import ScreenHome from "./components/UserScreen/ScreenHome"
import AllRestarnts from "./components/UserScreen/AllRestarnts";
import RestaurantPage from "./components/UserScreen/RestaurantPage";
import { LoginComponent } from "./components/Registration/Login";
import { OwnerPanel } from "./components/AdminPanle/Owner";
import CompleteOrder from "./components/UserScreen/YourCart/CompleteOrder";
import SortResturant from "./components/UserScreen/SortResturant";




const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route path={"/"} element={<ScreenHome />} />
        <Route path="/SuperAdminPanel" element={<SuperAdminPanel />} />
        <Route path="/OwnerPanel" element={<OwnerPanel />} />
        <Route path={"/AllRestarnts"} element={<AllRestarnts />} />
        <Route path={"/RestaurantPage"} element={<RestaurantPage />} />
        <Route path={"/login"} element={<LoginComponent />} />
        <Route path={"/SortResturants"} element={<SortResturant />} />
        <Route path={"/CompleteOrder"} element={<CompleteOrder />} />
    
  
        
      </Routes>
    </div>
  );
};

export default App;
