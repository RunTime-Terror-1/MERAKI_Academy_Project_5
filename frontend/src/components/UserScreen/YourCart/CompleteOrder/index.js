import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteCart } from '../../../redux/reducers/User';
// import Counter from './Counter';
import { useNavigate } from "react-router-dom";
import NavBar from '../../NavBar';

const CompleteOrder = () => {
    const navigate = useNavigate()


    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
            islogin: state.auth.isLoggedIn,
        }
    })

    // console.log(Userinfor.islogin)
    // const [totalPrice, setTotalPrice] = useState(
    //     Userinfor.yourPrice.reduce((acc, element, index) => {
    //         console.log(typeof element.price);
    //         return acc + Number(element.price)
    //     }, 0)
    // )


    console.log(Userinfor.yourPrice, "YourPrice")
    //!..............................

   



    return (<div>
        <NavBar/>
        kkkkkk



    </div>)

}

export default CompleteOrder;



