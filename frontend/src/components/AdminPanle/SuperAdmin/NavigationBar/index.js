import React, { useState } from "react";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";

//AiOutlineMenu
export const NavigationBarPanel = ({setHideMenu ,hideMenu }) => {
  const userArea = ({
    name = "Khaled",
    imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/347px-Lionel_Messi_20180626.jpg",
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
