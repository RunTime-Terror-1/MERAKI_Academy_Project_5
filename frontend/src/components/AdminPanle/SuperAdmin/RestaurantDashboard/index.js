import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import {
  setRequests,
  setRestaurants,
  setUsers,
} from "../../../../redux/reducers/superAdmin";
import "./style.css";

export const Restaurants = () => {
  const dispatch = useDispatch();
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false);
  const [isAcceptDialogShown, setIsAcceptDialogShown] = useState(false);

  const [currentIndex, setCurrentIndex] = useState({});

  const [currentRequest, setCurrentRequest] = useState({});

  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    (async () => {
      const data = await SuperAdmin.getAllRestaurants({ token: auth.token });
      dispatch(setRestaurants([...data.restaurants]));
    })();
  }, []);
  const createButton = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };
  const createRow = (restaurant, index) => {
    return (
      <div className="user-row" key={restaurant.id + restaurant.email}>
        <h4>{restaurant.id}</h4>
        <h4>{restaurant.name}</h4>
        <h4>{restaurant.email}</h4>
        <h4>{restaurant.firstName + " " + restaurant.lastName}</h4>
        <h4>{restaurant.orders}</h4>

        <div id="edit-btns-div">
          {createButton({
            onClick: async () => {
              setCurrentRequest(restaurant);
              setIsDeleteDialogShown(true);
              setCurrentIndex(index);
            },
            text: "Delete",
          })}
        </div>
      </div>
    );
  };

  const updateUser = async (state) => {
    await SuperAdmin.acceptRequest({
      requestId: currentRequest.id,
      state: state,
      token: auth.token,
    });
    const requests = [...superAdminPanel.requests];
    requests[currentIndex] = {
      ...requests[currentIndex],
      state: state,
    };
    dispatch(setRequests(requests));
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
                updateUser(state);
                setIsDeleteDialogShown(false);
                setIsAcceptDialogShown(false);
              },
            })}
            {createButton({
              text: "Cancel",
              onClick: async () => {
                await SuperAdmin.acceptRequest({
                  requestId: currentRequest.id,
                  state: "Accepted",
                  token: auth.token,
                });
                const requests = [...superAdminPanel.requests];
                requests[currentIndex] = {
                  ...requests[currentIndex],
                  state: "Accepted",
                };
                dispatch(setRequests(requests));
                setIsDeleteDialogShown(false);
                setIsAcceptDialogShown(false);
              },
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {isDeleteDialogShown ? (
        deleteDialog({
          text: "Restaurant will be deleted, Are you sure?",
          title: "Delete Restaurant",
        })
      ) : (
        <></>
      )}

      <div className="user-dashboard" style={{ marginTop: "5px" }}>
        <div id="dash-title-div" className="user-row">
          <h4>ID</h4>
          <h4>{"restaurant".toUpperCase()}</h4>
          <h4>EMAIL</h4>
          <h4>Owner</h4>
          <h4>ORDERS</h4>
          <h4>ACTIONS</h4>
        </div>
        {superAdminPanel.restaurants.length ? (
          superAdminPanel.requests.map((restaurant, index) => {
            return createRow(restaurant, index);
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
