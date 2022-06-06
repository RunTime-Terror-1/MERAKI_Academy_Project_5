import './style.css'
import React, { useState, useEffect,useContext } from "react";
import { User } from '../../controllers/user';





const RestaurantPage = () => {


  const getRestarnt=()=>{

    const restarntInformation=User.getRestaurantById({restaurantId:1})

    console.log(restarntInformation)
  }



    useEffect(() => {
      getRestarnt()
    }, [])

    return (<div className="RestaurantPage">

        
    </div>
    );
};

export default RestaurantPage;