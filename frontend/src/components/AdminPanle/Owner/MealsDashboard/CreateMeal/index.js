import React, { useContext, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Owner } from "../../../../../controllers/owner";
import { Gender } from "../../../../Registration/Register/GenderDiv";
import { ErrorsDiv } from "../../../../Registration/Register/ErrorsDiv";
import { Registration } from "../../../../../controllers/registration";
import { Employee } from "../../../../../controllers/employee";

export const CreateMeal = ({ setIsMealDialogShown }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [restaurant_id, setRestaurant_id] = useState("");
  const [isDialogShown, setIsDialogShown] = useState("");
  const dispatch = useDispatch();

  const { auth, superAdminPanel } = useSelector((state) => {
    return state;
  });
  const buildAlertDialog = ({ bgColor, color, text, text2 }) => {
    setTimeout(() => {
      setIsDialogShown(false);
      setIsMealDialogShown(false);
    }, 2500);

    return (
      <div id="Alert">
        <div style={{ backgroundColor: `${bgColor}` }}>
          <p>
            <strong style={{ color: `${color}` }}>{text}</strong>
            <br />
            <small style={{ color: `${color}` }}>{text2}</small>
          </p>
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
          min={1}
          onChange={(e) => {
            setState(e.target.value);
          }}
          className="input"
        />
      </div>
    );
  };

  const createMeal = async () => {
    const response = await Employee.createMeal({
      category,
      imgUrl,
      name,
      price,
      restaurant_id,
      token: auth.token,
    });
    console.log(response);
    if (response.success) {
      setIsDialogShown(true);
    }
  };
  return (
    <div id="signup-form">
      {isDialogShown ? (
        buildAlertDialog({
          bgColor: "green",
          color: "white",
          text: "Meal Created Successfully",
          text2: `The meal is added to the stor `,
        })
      ) : (
        <></>
      )}
      <div id="signup-form-inner">
        <div id="signup--exit-button">
          <button
            onClick={() => {
              setIsMealDialogShown(false);
            }}
          >
            X
          </button>
        </div>

        <h1>Create Meal</h1>
        <hr />

        <div></div>

        {createInput({
          placeholder: "Meal Name",
          type: "text",
          key: "FirstName",
          setState: setName,
        })}
        {createInput({
          placeholder: "Meal Image Url",
          type: "text",
          key: "LastName",
          setState: setImgUrl,
        })}

        {createInput({
          placeholder: "Category",
          type: "text",
          key: "Category",
          setState: setCategory,
        })}

        {createInput({
          placeholder: "Price",
          type: "number",
          key: "Price",
          setState: setPrice,
        })}

        {createInput({
          placeholder: "Restaurant Id",
          type: "number",
          key: "Restaurant Id",
          setState: setRestaurant_id,
        })}

        <div id="signup-button-div">
          <button onClick={createMeal}>Create Employee</button>
        </div>
      </div>
    </div>
  );
};
