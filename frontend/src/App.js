import "./App.css";
import { SuperAdminPanel } from "./components/AdminPanle/SuperAdmin";
import { Route, Routes } from "react-router-dom";
import ScreenHome from "./components/UserScreen/ScreenHome";
import AllRestarnts from "./components/UserScreen/AllRestarnts";
import RestaurantPage from "./components/UserScreen/RestaurantPage";
import { LoginComponent } from "./components/Registration/Login";
import { OwnerPanel } from "./components/AdminPanle/Owner";
import CompleteOrder from "./components/UserScreen/YourCart/CompleteOrder";
import SortResturant from "./components/UserScreen/SortResturant";
import { useEffect } from "react";
import { User } from "./controllers/user";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "./redux/reducers/User";
import { ContactUs } from "./components/UserScreen/ScreenHome/ContactUs";
import { MainNavigationMenu } from "./components/UserScreen/NavBar/NavigationMenu";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { result } = await User.getAllRestaurants();
      dispatch(setRestaurants(result));
    })();
  }, []);
  const user = useSelector((state) => {
    return state.User;
  });
  return (
    <div className="App">
     
      {user.showMenu ? <MainNavigationMenu /> : <></>}
      <Routes>
        <Route path={"/"} element={<ScreenHome />} />
        <Route path={"/joinUs"} element={<ContactUs />} />
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
