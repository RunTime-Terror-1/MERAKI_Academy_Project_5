import { useSelector, useDispatch } from "react-redux";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../controllers/superAdmin";
import { setUsers } from "../../../redux/redusers/superAdmin";

export const SuperAdminPanel = () => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(true);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    (async () => {
      const usersResponse = await SuperAdmin.getAllUsers;
      dispatch(setUsers(usersResponse.users));
    })();
  }, []);
  const showUsers = (user) => {
      return (<div>
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
          <h1>{user.email}</h1>
      </div>)
  };
  const showRequests = () => {
    return <></>
  };

  return <div>{isUsersShown ? superAdminPanel.users.map((ele)=>{
      return showUsers(ele);
  }) : showRequests()}</div>;
};
