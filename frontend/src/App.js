import "./App.css";
import {Route,Routes} from "react-router-dom"
import { SuperAdminPanel } from "./components/AdminPanle/SuperAdmin";
import { Route, Routes } from "react-router-dom";
import ScreenHome from "./components/Homepage/ScreenHome";
import AllRestarnts from "./components/AllRestarnts";
import NavBar from "./components/Homepage/NavBar";
import RestaurantPage from "./components/RestaurantPage";



const  App=()=> {
  return <div className="App">
  <NavBar/>
  <Routes>
  <Route path={"/"} element={<ScreenHome/>} />

  <Route path={"/AllRestarnts"} element={<AllRestarnts/>} />

  <Route path={"/RestaurantPage"} element={<RestaurantPage/>} />



  </Routes>
  
  
  
  </div>;

function App() {
  return <div className="App">
    <Routes>
      <Route path="/" element={<SuperAdminPanel/>} />
    </Routes>
    </div>;
}

export default App;
