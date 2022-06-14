import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMeals, setOrders } from "../../../../redux/reducers/superAdmin";
import "./style.css";
import { Employee } from "../../../../controllers/employee";

export const createOption = (restaurant, index) => {
  return (
    <option key={restaurant.id} value={index}>
      {restaurant.name}
    </option>
  );
};

export const Orders = () => {
  const dispatch = useDispatch();
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false);
  const [isCreateMealDialogShown, setIsMealDialogShown] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState({});
  const [currentMeal, setCurrentMeal] = useState({});
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });
  const [resId, setResId] = useState(superAdminPanel.restaurants[0].id);

  const createButton = ({ onClick, text, state }) => {
    return (
      <button
        onClick={onClick}
        style={
          text !== "Edit"
            ? { backgroundColor: "red" }
            : { backgroundColor: "green" }
        }
      >
        {text}
      </button>
    );
  };
  const createRow = (order, index) => {
    console.log(order);
    return (
      <div className="user-row" key={order.id + order.name}>
        <h4>{index + 1}</h4>
        <h4>{order.name}</h4>
        <h4>{order.notes}</h4>
        <h4>{order.receipt} $</h4>
        <h4>{superAdminPanel.orders.length } </h4>
        <div id="edit-btns-div">
          {createButton({
            onClick: async () => {
              setCurrentMeal(order);
              setCurrentIndex(index);
              setIsUpdate(true);
              setIsMealDialogShown(true);
            },
            text: "Edit",
            state: order.state,
          })}
          {createButton({
            onClick: () => {
              setCurrentIndex(index);
              setCurrentMeal(order);
              setIsDeleteDialogShown(true);
            },
            text: "Delete",
            state: order.state,
          })}
        </div>
      </div>
    );
  };
  const deleteDialog = ({ title, text, state }) => {
    return (
      <div id="delete-pop">
        <div id="inner-delete-pop">
          <h3>{title}</h3>
          <p>{text}</p>
          <div id="edit-btns-div">
            {createButton({
              text: "Yes",
              onClick: async () => {
                deleteMeal(currentMeal.id);
                setIsDeleteDialogShown(false);
              },
            })}
            {createButton({
              text: "Cancel",
              onClick: async () => {
                setIsDeleteDialogShown(false);
              },
            })}
          </div>
        </div>
      </div>
    );
  };

  const deleteMeal = async () => {
    await Employee.deleteMealFromRestaurant({
      mealId: currentMeal.id,
      token: auth.token,
    });
    const meals = [...superAdminPanel.meals];
    meals.splice(currentIndex, 1);
    dispatch(setMeals(meals));
  };

  return (
    <div>
     
      <div id="selector-div">
        <h3>Restaurant Name</h3>
        <select
          onChange={async (e) => {
            const { orders } = await Employee.getAllOrder({
              token: auth.token,
              restaurantId: superAdminPanel.restaurants[e.target.value].id,
            });
            setResId(superAdminPanel.restaurants[e.target.value].id);
            dispatch(setOrders(orders));
          }}
        >
          {superAdminPanel.restaurants.map((restaurant, index) => {
            return createOption(restaurant, index);
          })}
        </select>
      </div>

      {isDeleteDialogShown ? (
        deleteDialog({
          text: "Meal will be Deleted, Are you sure?",
          title: "Delete Meal",
        })
      ) : (
        <></>
      )}

      <div className="user-dashboard" style={{ marginTop: "5px" }}>
        <div id="dash-title-div" className="user-row">
          <h4>ID</h4>
          <h4>STATE</h4>
          <h4>PHONE</h4>
          <h4>RECEIPT</h4>
          <h4>QUANTITY</h4>
          <h4>ACTIONS</h4>
        </div>
        {superAdminPanel.orders ? (
          superAdminPanel.orders.map((order, index) => {
            return createRow(order, index);
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
