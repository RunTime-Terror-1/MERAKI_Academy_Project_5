import react, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMeals, setOrders } from "../../../../redux/reducers/superAdmin";
import "./style.css";
import { Employee } from "../../../../controllers/employee";
import { ShowDetails } from "./OrderDetails";

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
  const [currentIndex, setCurrentIndex] = useState({});
  const [currentOrder, setCurrentOrder] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });
  const [resId, setResId] = useState(superAdminPanel.restaurants[0].id);

  let ordersId = [];
  const orderMeals = {};

  const createButton = ({ onClick, text, state }) => {
    return <button onClick={onClick}>{text}</button>;
  };
  const createRow = (order, index) => {
    return (
      <div className="user-row" key={order.id + order.name + index}>
        <h4>{index + 1}</h4>
        <h4>{order.state}</h4>
        <h4>{order.notes}</h4>
        <h4>{order.receipt} $</h4>
        <h4>{superAdminPanel.orders.length} </h4>
        <div id="edit-btns-div">
          {createButton({
            onClick: async () => {
              ordersId = [];
  
              setCurrentOrder(orderMeals[order.id]);
              setCurrentIndex(index);
              setShowDetails(true);
            },
            text: "Details",
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
                deleteMeal(currentOrder.id);
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
      mealId: currentOrder.id,
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
      {showDetails ? (
        <ShowDetails
          currentOrder={currentOrder}
          setShowDetails={setShowDetails}
          currentIndex={currentIndex}
        />
      ) : (
        <></>
      )}

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
            if (!ordersId.includes(order.id)) {
              orderMeals[order.id] = [order];
              ordersId.push(order.id);
              return createRow(order, index);
            } else {
              orderMeals[order.id] = [...orderMeals[order.id], order];
            }
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
