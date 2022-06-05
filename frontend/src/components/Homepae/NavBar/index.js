import React,{useState,useContext} from "react";
import { Link } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";


const NavBar = () => {
    

    const dispatch = useDispatch();

    const statevalue = useSelector((state) => {
  
      return {
        tokenValue: state.auth.token,
        isLoggedInValue: state.auth.isloggedIn,
  
      }
    })
  
   
    const whenOut = () => {
      console.log("when err")
     
      dispatch(setlogout({token:statevalue}))
    }
  
    return (
      <>
        <div className="NavBar">
  
          {statevalue.isLoggedInValue == true ? (
            <>
              <Link className="Link" to="/dashboard">
                Dashboard
              </Link>
              <Link className="Link" to="/newArticle">
                Add New Article
              </Link>
              <button className="logout" onClick={() => {
                console.log("logout", 99);
                whenOut()
              }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="Link" to="/">
                Register
              </Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </>
    );
  };
  
  export default NavBar;