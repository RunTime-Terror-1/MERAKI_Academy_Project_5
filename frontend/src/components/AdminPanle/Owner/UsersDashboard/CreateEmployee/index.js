import React, { useContext, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Owner } from "../../../../../controllers/owner";
import { setRequests } from "../../../../../redux/reducers/superAdmin";
import { Gender } from "../../../../Registration/Register/GenderDiv";

export const CreateEmployee = ({
  setIsRestaurantDialogShown,
  currentIndex,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);

  const [shift, setShift] = useState("");
  const [salary, setSalary] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");

  const [isDialogShown, setIsDialogShown] = useState("");
  const dispatch = useDispatch();

  const { auth, superAdminPanel } = useSelector((state) => {
    return state;
  });
  const buildAlertDialog = ({ bgColor, color, text, text2 }) => {
    setTimeout(() => {
      setIsDialogShown(false);
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
          onChange={(e) => {
            setState(e.target.value);
          }}
          className="input"
        />
      </div>
    );
  };

  const createRestaurant = async () => {
    const { results } = await Owner.createRestaurant({
      lat: "none",
      lng: "none",
      location: shift,
      name: superAdminPanel.requests[currentIndex].restaurantName,
      Logo: salary,
      category: weeklyHours,
      token: auth.token,
    });

    if (results.affectedRows) {
      const requests = [...superAdminPanel.requests];
      await Owner.updateRequest({
        requestId: requests[currentIndex].id,
        state: "Completed",
        token: auth.token,
      });
      requests[currentIndex] = {
        ...requests[currentIndex],
        state: "Completed",
      };

      dispatch(setRequests(requests));
      setIsRestaurantDialogShown(false);
    }
  };
  return (
    <div id="signup-form">
      {isDialogShown ? (
        buildAlertDialog({
          bgColor: "green",
          color: "white",
          text: "Request Created Successfully",
          text2: `The response will be in few hours `,
        })
      ) : (
        <></>
      )}
      <div id="signup-form-inner">
        <div id="signup--exit-button">
          <button
            onClick={() => {
              setIsRestaurantDialogShown(false);
            }}
          >
            X
          </button>
        </div>

        <h1>Create Employee</h1>
        <hr />

        <div></div>

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
        </div>

        {createInput({
          placeholder: "Email",
          type: "text",
          key: "text",
          setState: setEmail,
        })}

        {createInput({
          placeholder: "Password",
          type: "password",
          key: "Password",
          setState: setPassword,
        })}
        <Gender setGender={setGender} errors={errors} setErrors={setErrors} />
        {createInput({
          placeholder: "Shift",
          type: "text",
          key: "Shift",
          setState: setShift,
        })}
        <div id="register-username-div">
          {createInput({
            placeholder: "Salary",
            type: "number",
            key: "Salary",
            setState: setSalary,
          })}
          {createInput({
            placeholder: "Weekly Hours",
            type: "number",
            key: "WeeklyHours",
            setState: setWeeklyHours,
          })}
        </div>

        <div id="signup-button-div">
          <button onClick={createRestaurant}>Create Restaurant</button>
        </div>
      </div>
    </div>
  );
};
