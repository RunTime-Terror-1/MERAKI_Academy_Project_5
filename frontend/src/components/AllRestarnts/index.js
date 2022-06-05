import React, { useState, useEffect, useContext } from "react";
import { User } from "../../controllers/user";

import NavBar from "../Homepage/NavBar";


const AllRestarnts = () => {


    const [restaurants, setRestaurants] = useState("")



    const getRestarnts = async() => {

        let hotel = await User.getAllRestaurants()
        // console.log(25)
        // console.log(hotel)
        setRestaurants(hotel.result)

    }



    useEffect(() => {
        getRestarnts()
    }, [])

    console.log(restaurants)
    return (<div>
       <NavBar/>
        <h1>ggggggggg</h1>
        <div>{
            
            }</div>
    </div>)


};

export default AllRestarnts;
