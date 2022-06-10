import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { CreateOwnerDialog } from "./CreateOwner";

export const Users = () => {
  const dispatch = useDispatch();
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });

  const { auth } = useSelector((state) => {
    return state;
  });

  const showUsers = (user) => {
    return (
      <div key={user.id} id="user-div">
        <h4>{user.id}</h4>
        <h4>{user.firstName + " " + user.lastName}</h4>
        <h4>{user.email}</h4>
        <h4>{user.role_id}</h4>
        <h4>{user.lastName}</h4>
        <div>
          <button
            onClick={async () => {
              await SuperAdmin.deleteOwner({
                token: auth.token,
                ownerId: user.id,
                restaurantName: "",
              });
            }}
          >
            Delete
          </button>
          <button onClick={() => {}}>Edit</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div style={{ textAlign: "start", height: "100px" }}>
        <p>
          <strong>Users</strong> you can,edit or delete users{" "}
        </p>
        <button
          onClick={() => {
            setIsRegisterShown(!isRegisterShown);
          }}
        >
          + User
        </button>
      </div>
      {isRegisterShown ? <CreateOwnerDialog auth={auth} /> : <></>}
      <div key={"//d"} id="user-div">
        <h4>#</h4>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Role</h4>
        <h4>last Login</h4>
        <h4>Actions</h4>
      </div>
      {superAdminPanel.users.map((ele) => {
        return showUsers(ele);
      })}
    </div>
  );
};
