import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SuperAdmin } from "../../../../controllers/superAdmin";
import { CreateOwnerDialog } from "./CreateOwner";
import "./style.css"

export const Users = () => {
  const dispatch = useDispatch();
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const { superAdminPanel } = useSelector((state) => {
    return state;
  });

  const { auth } = useSelector((state) => {
    return state;
  });

return (
  <div>
    
  </div>
)
};
