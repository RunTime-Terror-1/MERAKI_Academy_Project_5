import React from "react";
import "./style.css";
import { HiUsers } from "react-icons/hi";
import { BiGitPullRequest, BiLogOut } from "react-icons/bi";
import { MdFastfood } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import {
  setMeals,
  setOrders,
  setRequests,
  setRestaurants,
  setUsers,
} from "../../../../redux/reducers/superAdmin";
import { Owner } from "../../../../controllers/owner";
import { Employee } from "../../../../controllers/employee";
import { User } from "../../../../controllers/user";

export const NavigationMenu = ({ setIsUsersShown }) => {
  const dispatch = useDispatch();
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  const userArea = ({
    name = "Khaled",
    imgUrl = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
  }) => {
    return (
      <div id="user-img-div">
        <div>
          <img src={imgUrl} />
        </div>
        <div>
          <h4>{name} </h4>
        </div>
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
        <h2>UMS</h2>
      </div>
      {userArea({})}

      {User.roleId === "2" ? (
        <div>
          <div id="user-management-div">
            <h4>User Management</h4>
          </div>
          {menuButton({
            text: "Employee",
            icon: <HiUsers />,
            onClick: async () => {
              const { users } = await Owner.getAllEmployee({
                token: auth.token,
              });
              setIsUsersShown(0);
              dispatch(setUsers(users));
            },
          })}
          {menuButton({
            text: "Requests",
            icon: <BiGitPullRequest />,
            onClick: async () => {
              const { requests } = await Owner.getOwnerRequests({
                token: auth.token,
              });
              setIsUsersShown(1);
              dispatch(setRequests(requests));
            },
          })}
          {menuButton({
            text: "My Restaurants",
            icon: <MdFastfood />,
            onClick: async () => {
              const { restaurants } = await Owner.getOwnerRestaurants({
                token: auth.token,
              });
              setIsUsersShown(2);
              dispatch(setRestaurants(restaurants));
            },
          })}
        </div>
      ) : (
        <></>
      )}

      <div id="user-management-div">
        <h4>Restaurant Management</h4>
      </div>
      {menuButton({
        text: "Orders",
        icon: <MdFastfood />,
        onClick: async () => {
          const { orders } = await Employee.getAllOrder({
            token: auth.token,
            restaurantId:
              User.roleId == "2"
                ? superAdminPanel.restaurants[0].id
                : superAdminPanel.restaurants[0].restaurant_id,
          });
       
          setIsUsersShown(4);
          dispatch(setOrders(orders));
        },
      })}
      {menuButton({
        text: "meals",
        icon: <MdFastfood />,
        onClick: async () => {
          const { meals } = await Employee.getAllMeals({
            token: auth.token,
            restaurant_id:
              User.roleId == "2"
                ? superAdminPanel.restaurants[0].id
                : superAdminPanel.restaurants[0].restaurant_id,
          });
          setIsUsersShown(3);
          dispatch(setMeals(meals));
        },
      })}
      <button id="logout-btn">
        <div id="logout-div">
          <BiLogOut />
          <h4>LogOut</h4>
        </div>
      </button>
    </div>
  );
};
