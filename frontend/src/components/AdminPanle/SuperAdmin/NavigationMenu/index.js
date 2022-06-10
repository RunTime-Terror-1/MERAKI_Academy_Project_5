import React from "react";
import "./style.css";
import { HiUsers } from "react-icons/hi";
import { BiGitPullRequest } from "react-icons/bi";
import {MdFastfood}  from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../../redux/reducers/superAdmin";

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  const userArea = ({
    name = "Khaled",
    imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/347px-Lionel_Messi_20180626.jpg",
  }) => {
    return (
      <div  id="user-img-div">
        <div>
          <img src={imgUrl} />
        </div>
        <h2>{name} </h2>
      </div>
    );
  };

  const menuButton = ({ text, onClick, icon }) => {
    return (
      <div className="Nav-menu-btn">
        <button onClick={onClick}>{text}</button>
        {icon}
      </div>
    );
  };

  return (
    <div id="nav-menu-bar">
      <div id= "title-nav-bar">
        <h2>UMS</h2>
      </div>
      {userArea({})}
      <div>
        <h4>User Management</h4>
      </div>
      {menuButton({ text: "Users", icon: <HiUsers />, onClick: () => {} })}
      {menuButton({ text: "Requests", icon: < BiGitPullRequest />, onClick: () => {} })}
      {menuButton({ text: "Restaurants", icon: <MdFastfood />, onClick: () => {} })}
    </div>
  );
};
