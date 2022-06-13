import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMeals, setRequests, setUsers } from "../../../../redux/reducers/superAdmin";
import { Owner } from "../../../../controllers/owner";
import "./style.css";
import { CreateMeal } from "./CreateMeal";
import { Employee } from "../../../../controllers/employee";


export const Meals = () => {
  const dispatch = useDispatch();
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false);

  const [isCreateMealDialogShown, setIsMealDialogShown] = useState(false);

  const [currentIndex, setCurrentIndex] = useState({});

  const [currentRequest, setCurrentRequest] = useState({});

  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });
  const createButton = ({ onClick, text, state }) => {
    return (
      <button
        onClick={onClick}
        style={
          state !== "Accepted"
            ? { backgroundColor: "red" }
            : { backgroundColor: "green" }
        }
      >
        {text}
      </button>
    );
  };
  const createRow = (meal, index) => {
    return (
      <div className="user-row" key={meal.id + meal.name}>
        <h4>{meal.id}</h4>
        <h4>{meal.name}</h4>
        <img src={`${meal.imgUrl}`} width="100%" height="50px" />
        <h4>{meal.price} $</h4>
        <h4>{meal.category} </h4>
        <div id="edit-btns-div">
          {meal.state !== "Accepted" ? (
            createButton({
              onClick: () => {
                setCurrentIndex(index);
                setCurrentRequest(meal);
                setIsDeleteDialogShown(true);
              },
              text: "Delete",
              state: meal.state,
            })
          ) : meal.state === "Accepted" ? (
            createButton({
              onClick: async () => {
                setCurrentRequest(meal);
                setCurrentIndex(index);
                setIsMealDialogShown(true);
              },
              text: "Create Restaurant",
              state: meal.state,
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };

  const updateRequest = async (state) => {
    if (state !== "Accepted") {
      await Owner.deleteRequest({
        token: auth.token,
        requestId: currentRequest.id,
      });
      const requests = [...superAdminPanel.requests];
      requests.splice(currentIndex, 1);
      dispatch(setRequests(requests));
    } else {
    }
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
                updateRequest(currentRequest.state);
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

  const createOption = (restaurant,index)=>{
    console.log(index);
    return <option key={restaurant.id} value={index}>{restaurant.name}</option>
  }

  return (
    <div>
      <div id="request-div">
        <p>
          <strong>Meals,</strong> you can add,update and remove restaurant meal
        </p>

        <button
          onClick={() => {
            setIsMealDialogShown(true);
          }}
        >
          + Meal
        </button>
      </div>
      <div>
        <h3>Restaurant</h3>
        <select onChange={async (e)=>{
         const {meals} = await Employee.getAllMeals({token:auth.token,restaurant_id:superAdminPanel.restaurants[e.target.value].id})
         dispatch(setMeals(meals))
        }}>
          {superAdminPanel.restaurants.map((restaurant,index)=>{
            return createOption(restaurant, index);
          })}
        </select>
      </div>
      {isDeleteDialogShown ? (
        deleteDialog({
          text: "Request will be Deleted, Are you sure?",
          title: "Delete Request",
        })
      ) : (
        <></>
      )}

      {isCreateMealDialogShown ? (
        <CreateMeal
          setIsMealDialogShown={setIsMealDialogShown}
          currentIndex={currentIndex}
        />
      ) : (
        <></>
      )}
      <div className="user-dashboard" style={{ marginTop: "5px" }}>
        <div id="dash-title-div" className="user-row">
          <h4>ID</h4>
          <h4>NAME</h4>
          <h4>LOGO</h4>
          <h4>PRICE</h4>
          <h4>CATEGORY</h4>
          <h4>ACTIONS</h4>
        </div>
        {superAdminPanel.meals ? (
          superAdminPanel.meals.map((meal, index) => {
            return createRow(meal, index);
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
