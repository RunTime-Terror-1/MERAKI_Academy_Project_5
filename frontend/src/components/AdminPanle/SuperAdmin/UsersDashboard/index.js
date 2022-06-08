import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { User } from "../../../../controllers/user";
import auth from "../../../../redux/reducers/auth";
import { setRequests, setUsers } from "../../../../redux/reducers/superAdmin";

export const Users = () => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterShown, setIsRegisterShown] = useState(true);
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

  const createInput = ({ placeholder, setState, type = "text", key = "" }) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => {}}
          className="input"
        />
      </div>
    );
  };

  const createOwner = () => {
    return (
      <div>
        <div>
          <div id="register-username-div">
            {createInput({
              placeholder: "First Name",
              type: "text",
              key: "FirstName",
              setState: setFirstName,
            })}
            {createInput({
              placeholder: "Last Name",
              type: "text",
              key: "LastName",
              setState: setLastName,
            })}
            {createInput({
              placeholder: "Email",
              type: "text",
              key: "Email",
              setState: setEmail,
            })}
            {createInput({
              placeholder: "Password",
              type: "password",
              key: "Password",
              setState: setPassword,
            })}
            <button></button>
          </div>
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
        <button onClick={() => {
          setIsRegisterShown(!isRegisterShown)
        }}>+ User</button>
      </div>
      {isRegisterShown ? createOwner() : <></>}
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
