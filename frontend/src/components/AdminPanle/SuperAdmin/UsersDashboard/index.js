import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setUsers } from "../../../../redux/reducers/superAdmin";
import { CreateOwnerDialog } from "./CreateOwner";
import "./style.css";

export const Users = () => {
  const dispatch = useDispatch();
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });

  const { auth } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    (async () => {
      const data = await SuperAdmin.getAllUsers({ token: auth.token });
      dispatch(setUsers(data.users));
    })();
  }, []);
  const createButton = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };
  const createRow = (user) => {
    return (
      <div id="user-row">
        <h4>{user.id}</h4>
        <h4>{user.firstName + " " + user.lastName}</h4>
        <h4>{user.email}</h4>
        <h4>{user.role}</h4>
        <h4>{"user.lastLogin"}</h4>
        <div id="edit-btns-div">
          {createButton({ onClick: () => {}, text: "Delete" })}
          {createButton({ onClick: () => {}, text: "Edit" })}
        </div>
      </div>
    );
  };
  return (
    <div>
      <p>
        <strong>Users</strong> you can add,update and remove users
      </p>
      <button> + Users</button>
      <div style={{ marginTop: "5px"}}>
        <div id="user-row"  style={{backgroundColor:"rgb(34, 35, 36)",color:"white"}} >
          <h4>ID</h4>
          <h4>NAME</h4>
          <h4>EMAIL</h4>
          <h4>ROLE</h4>
          <h4>LAST LOGIN</h4>
          <h4>ACTIONS</h4>
        </div>
        {superAdminPanel.users.length ? (
          superAdminPanel.users.map((user) => {
            return createRow(user);
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
