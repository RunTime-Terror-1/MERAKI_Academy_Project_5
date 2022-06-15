import "./style.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { setIsSignUpFormShown, setShowLoginForm } from "../../../redux/reducers/auth";

const NavBar = ({ showMenu, setShowMenu }) => {
  const navigate = useNavigate();
  const searchForRestaurant = () => {};
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => {
    return state;
  });
  const showLoginPop = () => {
    dispatch(setShowLoginForm(true));
    dispatch(setIsSignUpFormShown(true));
  };
  return (
    <div id="main-nav-bar">
      <div id="main-nav-bar-img-div">
        <AiOutlineMenu
          className="main-menu-btn"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <a href="http://localhost:3000/">
          <img src="https://img.freepik.com/free-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />
          <p>
            KHK<span>EATS</span>
          </p>
        </a>
      </div>

      <input
        placeholder="Search for restaurant"
        onChange={searchForRestaurant}
      />
      <div id="main-nav-bar-btns">
        <button
          onClick={() => {
            navigate("/AllRestarnts");
          }}
        >
          All Restaurants
        </button>
        {auth.isLoggedIn ? (
          <button>
            <div>
              <BiLogOut />
              <h4>LogOut</h4>
            </div>
          </button>
        ) : (
          <button onClick={showLoginPop}>My Account</button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
