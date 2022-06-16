import "./style.css";
import React, { useState, useContext } from "react";
import NavBar from "../NavBar";
import joinUs from "../../../assets/images/joinus.png";
import about from "../../../assets/images/about.png";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ScreenHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, User } = useSelector((state) => {
    return state;
  });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="homepage-div">
      {<NavBar />}

      <div id="welcome-div">
        <h1>You Can Order Food Online In Jordan</h1>
        <img src="https://previews.123rf.com/images/gkrphoto/gkrphoto2001/gkrphoto200100155/138448286-mix-of-fast-food-street-dishes-background-with-copy-space-top-view-natural-wooden-background-.jpg" />
      </div>

      <div id="join-us-div">
        <h1>
          Join Us And Grow Your Restaurant Brand With <span> KHK EATS</span>
        </h1>

        <div id="inner-join-us-div">
          <img src={joinUs} />
          <div id="inner2-join-us-div">
            <h3>Become a Partner</h3>
            <p>
              Create your restaurant and control its flow, fill more tables and
              add your employees. Bring all your orders ,meals and restaurant
              data into one place so you can do what you want.
            </p>
            <button
              onClick={() => {
                navigate("/joinUs", { state: true });
              }}
            >
              Find More
            </button>
          </div>
        </div>
      </div>
      <div id="join-us-div">
        <h1>ABOUT US</h1>
        <div id="inner-join-us-div">
          <img src={about} />
          <div id="inner2-join-us-div">
            <h1>We Are KHK<span style={{fontSize:"25px"}}>EATS</span> </h1>
            <p >
              At KHK EATS, we want to provide a chance for you to search for a restaurant and get the food you love delivered.In addition to 
              that you can create your Own restaurant and be one of our family . We aim to make all restaurants data in Jordan available for all people inside or outside Jordan
            </p>
            <hr/>
             
          </div>
        </div>
      </div>

 
      <div id="join-us-div">
        <div>Restaurants
          <a></a>

        </div>
        <div>Popular Cuisines

        </div>
        <div>Popular Areas

        </div>
        <div>Follow us on
          <img/>
          <img/>
          <img/>
          <img/>
          

        </div>

      </div>
    </div>
  );
};

export default ScreenHome;
