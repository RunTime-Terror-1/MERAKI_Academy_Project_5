import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, setPrice } from '../../../../redux/reducers/User';


const Counter = ({ element }) => {

    const [cart, setCart] = useState("")
    const [priceNumber, setPriceNumber] = useState(1)

    const [realPrice, setrealPrice] = useState(element.price)

    console.log(element, "item13")
    const dispatch = useDispatch();

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
        }
    })
    console.log(Userinfor.yourCart, "cart cart")
    console.log(Userinfor.yourPrice, "Price Price ")
    //!..............................


    const nextPrice = async () => {
        const A = await setPriceNumber(priceNumber + 1);
        // const B = await dispatch(setPrice({ price:realPrice*priceNumber}))
    }


    const prevPrice = () => {
        setPriceNumber(priceNumber - 1)
    }


    return (<div className="div_yourCounter">

        <h4 onClick={() => {nextPrice();
        dispatch(setPrice({ price:(realPrice*priceNumber)+realPrice,index:1}))
        }}>+</h4>
        <h5>{priceNumber}</h5>
        <h5 onClick={() => { prevPrice() }} >-</h5>
        <h3>{element.name}</h3 >
        <h5>{realPrice* priceNumber}</h5>


        <h5 onClick={() => {
            dispatch(deleteCart({ id: element.id }))
            console.log(element.id)
        }}>delete</h5>

    </div>)

}
export default Counter;