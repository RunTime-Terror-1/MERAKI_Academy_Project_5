import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../redux/reducers/superAdmin";
import { NavigationBar } from "./NavigationMenu";
import "./style.css";
import { Users } from "./UsersDashboard";
import { Requests } from "./requestsDashboard";
export const SuperAdminPanel = () => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(true);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    // just for test
    (async () => {
      const usersResponse = await SuperAdmin.getAllRequests({
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInJvbGVJZCI6MSwiY2FydElkIjozLCJpYXQiOjE2NTQ0NTYzMTZ9.k_orJs2F3mmDFmCm6UVE7nK4HuzTc9tRorjl7hYQ4ew`,
      });

      dispatch(setRequests(usersResponse.requests));
    })();
  }, []);

  return (
    <div style={{ width: "100vw", display: "flex" }}>
      <NavigationBar />
      <div style={{ color: "red", width: "100%" }}>
     
        {isUsersShown
          ? <Users/>
          :< Requests/>}
      </div>
    </div>
  );
};
