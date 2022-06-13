import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from "../../../controllers/user";
import NavBar from '../NavBar';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const AllRestarnts = () => {

    const navigate = useNavigate()

    const [restaurants, setRestaurants] = useState("")
    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
            islogin: state.auth.isLoggedIn,
            name: state.User.name,
            token:state.auth.token
        }
    })

console.log(Userinfor.token)

console.log(Userinfor.token.payload)
console.log(Userinfor.token.payload)

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
