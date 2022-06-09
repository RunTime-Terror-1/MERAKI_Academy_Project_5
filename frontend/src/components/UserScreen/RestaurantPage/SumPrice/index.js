// import './style.css'
import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteCart } from '../../../redux/reducers/User';
// import Counter from './Counter';
import { setsumPriceUser } from "../../../../redux/reducers/User";
const SumPrice = () => {
    const [sumreal, setSumreal] = useState(0)

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            sumPrice: state.User.sumPriceUser,
        }
    })
    console.log(Userinfor.sumPrice)
    //!..............................

    const sum = () => {
        let sumpruce = 0
        if (Userinfor.yourPrice.length > 0) {


            Userinfor.yourPrice.map((element, index) => {
                sumpruce = sumpruce + element.price
            })
            setSumreal(sumpruce)
        }

    }

    // useEffect(() => {
    //     sum()
    // }, [])

    return (<div>"fffff</div>)

}

export default SumPrice;