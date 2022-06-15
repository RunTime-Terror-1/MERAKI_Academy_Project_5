import "./style.css";

import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = ({showMenu,setShowMenu}) => {
  const navigate = useNavigate();
  const searchForRestaurant = () => {};
  return (
    <div id="main-nav-bar">
      <div id="main-nav-bar-img-div">
        <AiOutlineMenu
          className="main-menu-btn"
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        />
        <img src="https://img.freepik.com/free-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />
        <p>
          KHK<span>EATS</span>
        </p>
      </div>

      <input
        placeholder="Search for restaurant"
        onChange={searchForRestaurant}
      />
      <div id = "main-nav-bar-btns">
        <button>All Restaurants</button>
        <button>My Account</button>
      </div>
    </div>
  );
};

export default NavBar;
