import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from "../../../controllers/user";
import NavBar from '../NavBar';

import { useNavigate } from "react-router-dom";



const AllRestarnts = () => {

    const navigate = useNavigate()

    const [restaurants, setRestaurants] = useState("")



    const getRestarnts = async () => {

        let hotel = await User.getAllRestaurants()

        setRestaurants(hotel.result)

    }



    useEffect(() => {
        getRestarnts()
    }, [])


    return (<div className="AllRestarnts">
        {<NavBar/>}
        <div className="AllAllRestarntsShow">
        <div className="AllRestarnts_A"></div>

        <div className="AllRestarnts_B">{restaurants ? restaurants.map((elemnt, index) => {
            // console.log(elemnt.Logo)
            return <div className="All_B_eachRestarant" key={index} onClick={
                () => {
                    navigate("/RestaurantPage")
                }

            } >

              
              <img className='logo' src={elemnt.backImg} />
              

                <h2 className='All_h2'>{elemnt.name+"kjkjkj"}</h2>
                <h2 className='All_h2Categorry'>{elemnt.rest_category}</h2>


            </div>
        }) : " "
        }</div>

        <div className="AllRestarnts_C"></div>
        </div>
    </div>)


};

export default AllRestarnts;
