import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from '../../../redux/reducers/User';
import Counter from './Counter';

const YourCart = () => {
    
    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,

        }
    })

//!..............................
    


const sum=()=>{


    
}


   

    return (<div>{Userinfor.yourCart !== 0 && Userinfor.yourCart.length ? Userinfor.yourCart.map((element, index) => {
        return (<div key={index} className="div-Yourcart">
            {<Counter element={element} />}
            {/* <h2>totalPrice</h2> */}
        </div>)
    }):"they are no item in your cart"}
    </div>)

}

export default YourCart;



