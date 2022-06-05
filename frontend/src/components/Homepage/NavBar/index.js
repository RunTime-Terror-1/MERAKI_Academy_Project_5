import './style.css'

import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="NavBar"><h1>Aklat</h1>
        <button onClick={
          () => {
            navigate("/AllRestarnts")
          }

        }>AllRestarnts</button>




      </div>
    </>
  );
};

export default NavBar;