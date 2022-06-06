import "./App.css";

import { Route, Routes } from "react-router-dom";

import ScreenHome from "./components/Homepage/ScreenHome";

 import AllRestarnts from "./components/AllRestarnts";
import NavBar from "./components/Homepage/NavBar";

const  App=()=> {
  return <div className="App">
  <NavBar/>
  <Routes>
  <Route path={"/"} element={<ScreenHome/>} />

  <Route path={"/AllRestarnts"} element={<AllRestarnts/>} />
  </Routes>
  
  
  
  </div>;
}

export default App;
