import React from "react";
import "./style.css";
import { HiUsers } from "react-icons/hi";
import { BiGitPullRequest, BiLogOut } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../../redux/reducers/superAdmin";
import { Owner } from "../../../../controllers/owner";
import { AiOutlineMenu } from "react-icons/ai";

export const MainNavigationMenu = ({ setShowMenu}) => {
  const dispatch = useDispatch();
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  const userArea = () => {
    return (
      <div id="main-nav-bar-img-div">
        <img src="https://img.freepik.com/free-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" />
        <p>
          KHK<span>EATS</span>
        </p>
      </div>
    );
  };

  const menuButton = ({ text, onClick, icon }) => {
    return (
      <div className="Nav-menu-btn">
        {icon}
        <button onClick={onClick}>{text}</button>
      </div>
    );
  };

  return (
    <div id="nav-menu-bar">
      <div id="title-nav-bar">
      <AiOutlineMenu
          className="main-menu-btn"
          onClick={() => {
            setShowMenu(false)
          }}
        />
      </div>
      {userArea({})}
      <div id="user-management-div">
        <h4>REGISTRATION</h4>
      </div>
      {menuButton({ text: "Sign up", icon: <HiUsers />, onClick: async () => {
        const {users} = await SuperAdmin.getAllUsers({token:auth.token});
        setShowMenu(0);
        dispatch(setUsers(users))
      } })}
      {menuButton({
        text: "Login",
        icon: <BiGitPullRequest />,
        onClick:async () => {
          const {requests} =await SuperAdmin.getAllRequests({token:auth.token});
          setShowMenu(1);
          dispatch(setRequests(requests))
        },
      })}
      <div id="user-management-div">
        <h4>JOIN US</h4>
      </div>
      {menuButton({
        text: "Create Your Restaurant",
        icon: <MdFastfood />,
        onClick: async () => {
          const {restaurants} = await SuperAdmin.getAllRestaurants({token:auth.token});
          setShowMenu(2);
          dispatch(setRequests(restaurants))
        },
      })}
      {/* <button id="logout-btn">
        <div id="logout-div">
          <BiLogOut />
          <h4>LogOut</h4>
        </div>
      </button> */}
    </div>
  );
};
