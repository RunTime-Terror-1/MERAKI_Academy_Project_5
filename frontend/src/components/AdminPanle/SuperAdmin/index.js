import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../controllers/superAdmin";
import { setRequests, setUsers } from "../../../redux/redusers/superAdmin";
import { NavigationBar } from "./NavigationMenu";

export const SuperAdminPanel = () => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(false);
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
  const showUsers = (user) => {
    return (
      <div key={user.id}>
        <h1>{user.firstName}</h1>
        <h1>{user.lastName}</h1>
        <h1>{user.email}</h1>
      </div>
    );
  };
  const showRequests = (request) => {
    return (
      <div key={request.id}>
        <h1>{request.id}</h1>
        <h1>{request.state}</h1>
        <h1>{request.owner_Id}</h1>
        <h1>{request.restaurantName}</h1>
      </div>
    );
  };

  return (
    <div>
      <NavigationBar />
      {isUsersShown
        ? superAdminPanel.users.map((ele) => {
            return showUsers(ele);
          })
        : superAdminPanel.requests.map((ele) => {
            return showRequests(ele);
          })}
    </div>
  );
};
