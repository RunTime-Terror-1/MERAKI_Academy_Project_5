// import './style.css'
import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteCart } from '../../../redux/reducers/User';
// import Counter from './Counter';

const SumPrice = () => {
    const [sumreal, setSumreal] = useState(0)

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,

        }
    })

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

    useEffect(() => {
        sum()
    }, [])

    return (<div>{sumreal}</div>)

}

export default SumPrice;