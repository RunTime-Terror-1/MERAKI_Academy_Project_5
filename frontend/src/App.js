import "./App.css";

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
}

export default App;
