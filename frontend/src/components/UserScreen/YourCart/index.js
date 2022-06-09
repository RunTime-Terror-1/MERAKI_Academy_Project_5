import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

const YourCart = () => {
    const [cart, setCart] = useState("")


    const dispatch = useDispatch();
    
    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,

        }
    })

    console.log(Userinfor.yourCart, "cart cart")

    // console.log(Userinfor.yourCart.length, "cart cart")

    return (<div>{Userinfor.yourCart !== 0 && Userinfor.yourCart.length ? Userinfor.yourCart.map((element, index) => {
        return (<div key={index} className="div-Yourcart">
            <h5>counter</h5>
            <h3>{element.name}</h3 >
            <h5>{element.price}</h5>
            <h5>delete</h5>
        </div>)
    }) : "they are no item in your cart"}
    </div>)

}

export default YourCart;