import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setUsers } from "../../../../redux/reducers/superAdmin";
import "./style.css";
import { RegisterComponent } from "../../../Registration/Register";

export const Requests = () => {
  const dispatch = useDispatch();
  
  const [isDeleteDialogShown, setIsDeleteDialogShown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState({});

  const [currentRequest, setCurrentRequest] = useState({});

  const { superAdminPanel, auth } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    (async () => {
      const data = await SuperAdmin.getAllRequests({ token: auth.token });
      dispatch(setUsers([...data.requests]));
    })();
  }, []);
  const createButton = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };
  const createRow = (request, index) => {
    return (
      <div className="user-row" key={request.id + request.email}>
        <h4>{request.id}</h4>
        <h4>{request.firstName + " " + request.lastName}</h4>
        <h4>{request.email}</h4>
        <h4>{request.state}</h4>
        <h4>{request.restaurantName}</h4>
        <div id="edit-btns-div">
          {createButton({
            onClick: () => {
              setCurrentIndex(index);
              setCurrentRequest(request);
            },
            text: "Accept",
          })}
          {createButton({
            onClick: () => {
              setCurrentRequest(request);
              setIsDeleteDialogShown(true);
              setCurrentIndex(index);
            },
            text: "Remove",
          })}
        </div>
      </div>
    );
  };

  const deleteDialog = ({ title, text }) => {
    return (
      <div id="delete-pop">
        <div id="inner-delete-pop">
          <h3>{title}</h3>
          <p>{text}</p>
          <div id="edit-btns-div">
            {createButton({
              text: "Yes",
              onClick: async () => {
                await SuperAdmin.deleteUser({
                  id: currentRequest.id,
                  token: auth.token,
                });
                const users = [...superAdminPanel.users];
                users.splice(currentIndex, 1);
                dispatch(setUsers(users));
                setIsDeleteDialogShown(false);
              },
            })}
            {createButton({
              text: "Cancel",
              onClick: () => {
                setIsDeleteDialogShown(false);
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
          text: "User will be deleted, Are you sure?",
          title: "Delete User",
        })
      ) : (
        <></>
      )}
      

      <div className="user-dashboard" style={{ marginTop: "5px" }}>
        <div id="dash-title-div" className="user-row">
          <h4>ID</h4>
          <h4>NAME</h4>
          <h4>EMAIL</h4>
          <h4>STATE</h4>
          <h4>{"restaurant".toUpperCase()}</h4>
          <h4>ACTIONS</h4>
        </div>
        {superAdminPanel.users.length ? (
          superAdminPanel.users.map((user, index) => {
            return createRow(user, index);
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

