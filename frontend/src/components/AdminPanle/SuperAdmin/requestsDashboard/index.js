import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { setRequests } from "../../../../redux/reducers/superAdmin";
import "./style.css";

export const Requests = () => {
  const dispatch = useDispatch();
  const [isUsersShown, setIsUsersShown] = useState(true);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });

  const { auth } = useSelector((state) => {
    return state;
  });

  const showRequests = (request) => {
    console.log(request);
    return (
      <div key={`${request.id + request.firstName}`} id="user-div">
        <h4>{request.id}</h4>
        <h4>{request.firstName + " " + request.lastName}</h4>
        <h4>{request.email}</h4>
        <h4>{request.state}</h4>
        <h4>{"request.restaurantName"}</h4>
        <div>
          <button>Accept</button>
          <button>Delete</button>
          
          </div>
      </div>
    );
  };

  return (
    <div>
      
      <div id="user-div">
        <h4>#</h4>
        <h4>Name</h4>
        <h4>email</h4>
        <h4>state</h4>
        <h4>restaurantName</h4>
        <h4>Actions</h4>
      </div>
      {superAdminPanel.requests.map((ele) => {
        return showRequests(ele);
      })}
    </div>
  );
};
