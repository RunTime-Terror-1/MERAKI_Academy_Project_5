import React, { useState } from 'react'
import { Login } from '../../../controllers/login';

export const LoginComponent = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <div id = "owner-register-div">
        <div id = "owner-register-div-inner">
          <div >
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
                const res = await Login.login({
                  email,
                  password,
                });
              }}
            >
              Login 
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>{createOwner()}</>
  )
}
