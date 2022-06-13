import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Registration } from "../../../../controllers/registration";
import { ErrorsDiv } from "../../Register/ErrorsDiv";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSignUpFormShown,
  setlogin,
} from "../../../../redux/reducers/auth";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => {
    return state;
  });
  let [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const createInput = ({ placeholder, setState, type = "text", key = "" }) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setErrors(
              Registration.removeErrors({
                isLoginForm: false,
                key: key,
                value: e.target.value,
                errors,
              })
            );
            setState(e.target.value);
          }}
          className="input1"
        />
      </div>
    );
  };
  const login = async () => {
    const inputForm = {
      Email: email,
      Password: password,
    };

    errors = Registration.checkFormErrors({
      isLoginForm: true,
      inputForm: inputForm,
    });

    if (errors.length === 0) {
      email = email.toLowerCase().trim();
      const response = await Registration.login({
        email,
        password,
      });

      dispatch(setlogin(response.token));
      if (response.message !== "Login Successful") {
        setErrors([...errors, response.message]);
      }else{
        navigate("/")
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div id="login-form-email-password-div">
     <p id="login-label">login</p> 
      <br/>
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
      <ErrorsDiv errors={errors} />
      <br/>
       
      <div>

        <button id="login-button" onClick={login}>
          Login
        </button>
        <br/>
        <br/>
      

        <button id="login-button-Google" onClick="">
          Continue with Google
        </button>

        <br/>
         
      </div>
       
      <div id="create-new-account-button">
        <button
          onClick={() => {
            dispatch(setIsSignUpFormShown());
          }}
        >

           
          Create New Account
        </button>
        <br/>

        <br/>
      <div id="to-create-user">
       
      </div>
      </div>
    </div>
  );
};
