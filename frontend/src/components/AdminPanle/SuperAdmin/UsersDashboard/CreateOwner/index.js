import React, { useState } from "react";
import { SuperAdmin } from "../../../../../controllers/superAdmin";

export const CreateOwnerDialog = ({auth}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegisterShown, setIsRegisterShown] = useState(false);

  const createInput = ({ placeholder, setState, type = "text", key = "" }) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setState(e.target.value);
          }}
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
            <button
              onClick={async () => {
                const res = await SuperAdmin.createOwner({
                  email,
                  firstName,
                  lastName,
                  password,
                  token: auth.token,
                });
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  };
  return <div>
      {createOwner()}
  </div>;
};
