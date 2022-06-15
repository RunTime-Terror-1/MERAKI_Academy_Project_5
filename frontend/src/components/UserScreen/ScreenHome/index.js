import "./style.css";
import React, { useState, useContext } from "react";
import NavBar from "../NavBar";
import { MainNavigationMenu } from "../NavBar/NavigationMenu";

const ScreenHome = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="ScreenHome">
      {<NavBar setShowMenu={setShowMenu} showMenu={showMenu} />}

      {showMenu ? <MainNavigationMenu setShowMenu={setShowMenu} /> : <></>}

      <div id="welcome-div">
        <h1>You Can Order Food Online In Jordan</h1>
        <img src="https://previews.123rf.com/images/gkrphoto/gkrphoto2001/gkrphoto200100155/138448286-mix-of-fast-food-street-dishes-background-with-copy-space-top-view-natural-wooden-background-.jpg" />
      </div>

      <div id="join-us-div">
        <h1>
          Grow your restaurant brand with KHK<span>EATS</span>
        </h1>
        <img src="https://previews.123rf.com/images/gkrphoto/gkrphoto2001/gkrphoto200100155/138448286-mix-of-fast-food-street-dishes-background-with-copy-space-top-view-natural-wooden-background-.jpg" />
      </div>
    </div>
  );
};

export default ScreenHome;
