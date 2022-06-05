import "./App.css";

import { Route, Routes } from "react-router-dom";

import ScreenHome from "./components/Homepage/ScreenHome";

 import AllRestarnts from "./components/AllRestarnts";

const  App=()=> {
  return <div className="App">Welcome APP
  
  <Routes>


  <Route path={"/"} element={<ScreenHome/>} />

  <Route path={"/AllRestarnts"} element={<AllRestarnts/>} />
  </Routes>
  
  
  
  </div>;
}

export default App;
