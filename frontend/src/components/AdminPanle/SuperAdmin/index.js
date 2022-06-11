import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../redux/reducers/superAdmin";
import { NavigationMenu } from "./NavigationMenu";
import "./style.css";
import { Users } from "./UsersDashboard";
import { Requests } from "./requestsDashboard";
import { NavigationBarPanel } from "./NavigationBar";
export const SuperAdminPanel = () => {
  const dispatch = useDispatch();
  const [hideMenu,setHideMenu] = useState(false);
  const [isUsersShown, setIsUsersShown] = useState(3);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    // just for test
    (async () => {
      const usersResponse = await SuperAdmin.getAllRequests({
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGVJZCI6MSwiY2FydElkIjozLCJpYXQiOjE2NTQ0NTYzMTZ9.k_orJs2F3mmDFmCm6UVE7nK4HuzTc9tRorjl7hYQ4ew`,
      });

      dispatch(setRequests([...usersResponse.requests]));
    })();
  }, []);

  return (
    <div style={{ width: "100vw", display: "flex" }}>
      {hideMenu?<NavigationMenu setIsUsersShown={setIsUsersShown} />:<></>}
      <div style={{ color: "red", width: "100%" }}>
        <NavigationBarPanel setHideMenu={setHideMenu} hideMenu={hideMenu}/>
        {isUsersShown === 0
          ? <Users/>
          :(isUsersShown === 1?<Requests/>:<></>)} 
      </div>
    </div>
  );
};
