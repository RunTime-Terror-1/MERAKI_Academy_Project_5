import "./style.css";
import React, { useState, useContext } from "react";
import NavBar from "../NavBar";
import { MainNavigationMenu } from "../NavBar/NavigationMenu";
import joinUs from "../../../assets/images/joinus.png";
import { useDispatch, useSelector } from "react-redux";
import { LoginComponent } from "../../Registration/Login";

const ScreenHome = () => {
  const dispatch = useDispatch()
  const {auth,User} = useSelector((state)=>{
    return state;
  })
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="homepage-div">
      {<NavBar />}
        {auth.showLoginForm?<LoginComponent/>:<></>}

     

      <div id="welcome-div">
        <h1>You Can Order Food Online In Jordan</h1>
        <img src="https://previews.123rf.com/images/gkrphoto/gkrphoto2001/gkrphoto200100155/138448286-mix-of-fast-food-street-dishes-background-with-copy-space-top-view-natural-wooden-background-.jpg" />
      </div>

      <div id="join-us-div">
        <h1>
          Join Us And Grow Your Restaurant Brand With  <span> KHK EATS</span>
        </h1>

        <div id="inner-join-us-div" >
          <img src={joinUs} />
          <div id="inner2-join-us-div">
            <h3>Become a Partner</h3>
            <p>
              Create your restaurant and control its flow, fill more tables and add your employees. Bring all your orders ,meals and restaurant
              data into one place so you can do what you want.
            </p>
            <button>Find More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenHome;
