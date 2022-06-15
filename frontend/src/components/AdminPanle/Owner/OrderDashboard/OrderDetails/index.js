import React, { useContext, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Owner } from "../../../../../controllers/owner";
import { Gender } from "../../../../Registration/Register/GenderDiv";
import { ErrorsDiv } from "../../../../Registration/Register/ErrorsDiv";
import { Registration } from "../../../../../controllers/registration";

export const ShowDetails = ({ currentOrder, setShowDetails, currentIndex }) => {
  const [isDialogShown, setIsDialogShown] = useState("");
  const dispatch = useDispatch();
  let total = 0;
  const { auth, superAdminPanel } = useSelector((state) => {
    return state;
  });
  const buildAlertDialog = ({ bgColor, color, text, text2 }) => {
    setTimeout(() => {
      setIsDialogShown(false);
      setShowDetails(false);
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

  return (
    <div id="signup-form">
      {isDialogShown ? (
        buildAlertDialog({
          bgColor: "green",
          color: "white",
          text: "Employee Created Successfully",
          text2: `The employee can start his job `,
        })
      ) : (
        <></>
      )}
      <div id="order-inner">
        <div id="signup--exit-button">
          <button
            onClick={() => {
              setShowDetails(false);
            }}
          >
            X
          </button>
        </div>

        <h1 style={{ color: "black" }}>ORDER DETAILS</h1>
        <hr />
        <div id="title-div1" className="meal-row">
          <h5>#</h5>
          <h5>Meal Name</h5>
          <h5>QUANTITY</h5>
          <h5>Price</h5>
        </div>
        {currentOrder.map((meal, index) => {
          total = total + meal.quantity * meal.price;
          return (
            <div>
              <div className="meal-row1">
                <h5>{index + 1}</h5>
                <h5>{meal.name}</h5>
                <h5>{meal.quantity}</h5>
                <h5>{meal.price} $</h5>
              </div>
            </div>
          );
        })}

        <div id="title-div1" className="meal-row3">
          <h5>BUILDING #</h5>
          <h5>STREET</h5>
          <h5>CITY</h5>
          <h5>PHONE</h5>
          <h5>TOTAL</h5>
        </div>
        <div className="meal-row2">
          <h5>{currentOrder[0].buldingNumber}</h5>
          <h5>{currentOrder[0].street}</h5>
          <h5>{currentOrder[0].city}</h5>
          <h5>{currentOrder[0].notes}</h5>
          <h5>{total} $</h5>
        </div>
        <div id="order-btn">
          <button>Complete The Order</button>
          <button style={{ backgroundColor: "red" }}>Reject The Order</button>
        </div>
      </div>
    </div>
  );
};
