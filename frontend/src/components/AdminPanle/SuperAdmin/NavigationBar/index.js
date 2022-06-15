import React, { useState } from "react";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";

//AiOutlineMenu
export const NavigationBarPanel = ({setHideMenu ,hideMenu }) => {
  const userArea = ({
    name = "Khaled",
    imgUrl = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  }) => {
    return (
      <div id="user-img2-div">
        <div>
          <img src={imgUrl} />
        </div>
        <div>
          <h4>{name} </h4>
        </div>
      </div>
    );
  };
  return (
    <div id="NavigationBarPanel">
      <AiOutlineMenu color="white" onClick={() => {
        setHideMenu(!hideMenu)
      }} />
      <div>{userArea({})}</div>
    </div>
  );
};
