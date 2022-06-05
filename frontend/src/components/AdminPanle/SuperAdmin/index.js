import { useSelector, Dispatch } from "@reduxjs/toolkit";
import react, { useEffect, useState } from "react";
import { SuperAdmin } from "../../../controllers/superAdmin";

const SuperAdminPanel = () => {
  const [isUsersShown, setIsUsersShown] = useState(true);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });
useEffect(()=>{
    (async()=>{
        const usersResponse = await SuperAdmin.getAllUsers;
        
    })()
},[])
  const showUsers = ()=>{

  }
  const showRequests = ()=>{}


  return (<div>
      {isUsersShown?showUsers():showRequests()}
  </div>);
};
