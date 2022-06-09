import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from '../../../../redux/reducers/User';


const Counter = ({element}) => {

    const [cart, setCart] = useState("")
    const [priceNumber, setPrice] = useState(1)


    console.log(element,"item13")
    const dispatch = useDispatch();

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,

        }
    })
    console.log(Userinfor.yourCart, "cart cart")
//!..............................
    

    const nextPrice = () => {
        setPrice(priceNumber+1);
    }
    const prevPrice = () => {
        setPrice(priceNumber-1)
    }

// <h4 onClick={()=>{nextPrice()}}>+</h4>
// <h5>{priceNumber}</h5>
// <h5 onClick={()=>{prevPrice()}} >-</h5>
// <h3>{element.name}</h3 >
// <h5>{element.price*priceNumber}</h5>
// <h5 onClick={() => {
//     dispatch(deleteCart({ id: element.id }))
//     console.log(element.id)
// }}>delete</h5>


return(<div className="div_yourCounter">

 <h4 onClick={()=>{nextPrice()}}>+</h4>
<h5>{priceNumber}</h5>
<h5 onClick={()=>{prevPrice()}} >-</h5>
<h3>{element.name}</h3 >
 <h5>{element.price*priceNumber}</h5>

 
<h5 onClick={() => {
  dispatch(deleteCart({ id: element.id }))
 console.log(element.id)
}}>delete</h5>

</div>)

}    
export default Counter;