import React, { useState, useContext } from "react";


import NavBar from "../NavBar"
import SearchSection from "../SearchSection";

const ScreenHome = () => {

    // const dispatch = useDispatch();

    // const statevalue = useSelector((state) => {

    //   return {
    //     tokenValue: state.auth.token,
    //     isLoggedInValue: state.auth.isloggedIn,

    //   }
    // })


    return (
        <>
            <div className="Na">
                <NavBar />
                <SearchSection />

            </div>
        </>
    );
};

export default ScreenHome;