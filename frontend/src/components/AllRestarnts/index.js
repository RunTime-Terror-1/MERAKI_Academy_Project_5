import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from "../../controllers/user";

import NavBar from "../Homepage/NavBar";


const AllRestarnts = () => {


    const [restaurants, setRestaurants] = useState("")



    const getRestarnts = async () => {

        let hotel = await User.getAllRestaurants()
        // console.log(25)
        // console.log(hotel)
        setRestaurants(hotel.result)

    }



    useEffect(() => {
        getRestarnts()
    }, [])

    console.log(restaurants)
    return (<div className="AllRestarnts">
        <div className="AllRestarnts_A">dd</div>

        <div className="AllRestarnts_B">{restaurants ? restaurants.map((elemnt, index) => {
                console.log(elemnt.Logo)
            return <div className="All_B_eachRestarant" key={index}>

                    <div className='divLogo'><img  className='logo' src={elemnt.Logo}/></div>
                
                    <h2>{elemnt.name}</h2>
                    <h2>{elemnt.rest_category}</h2>
                

            </div>
        }) : " "
        }</div>

        <div className="AllRestarnts_C">ee</div>
    </div>)


};

export default AllRestarnts;
