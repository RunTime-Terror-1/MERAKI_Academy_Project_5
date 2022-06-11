import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from '../../../redux/reducers/User';
import Counter from './Counter';

const YourCart = () => {

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
        }
    })
    const [totalPrice, setTotalPrice] = useState(
        Userinfor.yourPrice.reduce((acc, element, index) => {
        console.log(typeof element.price);
        return acc + Number(element.price)
    },0)
    )


    console.log(Userinfor.yourPrice, "YourPrice")
    //!..............................
    
 



    
        return (<div   className="YourCartinRest" >{Userinfor.yourCart !== 0 && Userinfor.yourCart.length ? Userinfor.yourCart.map((element, index) => {
        return (<div key={index} className="div-Yourcart">
            {<Counter element={element} />}

        </div>)
    }) : "they are no item in your cart"}

        <h1>total:{Userinfor.yourTotal}</h1>
    </div>)

}

export default YourCart;



