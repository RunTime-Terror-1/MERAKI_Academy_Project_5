import React,{useState,useContext} from "react";


const NavBar = () => {
    
    const dispatch = useDispatch();

    // const statevalue = useSelector((state) => {
  
    //   return {
    //     tokenValue: state.auth.token,
    //     isLoggedInValue: state.auth.isloggedIn,
  
    //   }
    // })


    return (
      <>
        <div className="NavBar"><h1>Aklat</h1>
  
{/*   
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
          )} */}


        </div>
      </>
    );
  };
  
  export default NavBar;