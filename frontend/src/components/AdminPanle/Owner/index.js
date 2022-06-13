import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { NavigationMenu } from "./NavigationMenu";
import "./style.css";
import { Users } from "./UsersDashboard";
import { Requests } from "./RequestsDashboard";
import { NavigationBarPanel } from "../SuperAdmin/NavigationBar";
import { Restaurants } from "../SuperAdmin/RestaurantDashboard";
import { Meals } from "./MealsDashboard";

export const OwnerPanel = () => {
  const dispatch = useDispatch();
  const [hideMenu, setHideMenu] = useState(false);
  const [isUsersShown, setIsUsersShown] = useState(0);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });

  return (
    <div style={{ width: "100vw", display: "flex" }}>
      {hideMenu ? <NavigationMenu setIsUsersShown={setIsUsersShown} /> : <></>}
      <div style={{ color: "red", width: "100%" }}>
        <NavigationBarPanel setHideMenu={setHideMenu} hideMenu={hideMenu} />
        {isUsersShown === 0 ? (
          <Users />
        ) : isUsersShown === 1 ? (
          <Requests />
        ) : isUsersShown === 2 ? (
          <Requests />
        ) :(
          <Meals  />
        )}
      </div>
    </div>
  );
};
