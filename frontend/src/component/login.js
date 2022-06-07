import React, { useState } from "react";
import axios from "axios";

const[email,setEmail]=useState("");
const[password,setpassword]=useState("");
const[message,setmessage]=useState("");

export const Login = () => {

    const LoginUser=()=>{
        axios.post("http://localhost:5000/login/",{
            email,
            password,

        })
        .then((result)=>{
            return setmessage("login successfully");
        })
        .catch((err)=>{
            return setmessage("Login Failed");
        })
    }

  return (
    <div className="loginContiner">
      Login
      <hr id="lineColorLogin" />
      <input
        type="text"
        placeholder="Enter your Email : "
        onChange={(e) => {
          e.target.value;
        }}
      />
      <input
        type="password"
        placeholder="Enter your password : "
        onChange={(e) => {
          e.target.value;
        }}
      />
      <button id="login" onClick={{LoginUser}}>Login</button>
      Don't have an account?
      <link id="toRegisterPage" href="">
        Create an account
      </link>
    </div>
  );
};
export default Login;
