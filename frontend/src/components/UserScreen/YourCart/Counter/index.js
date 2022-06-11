import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, setPrice ,setsumPriceUser,setTotal} from '../../../../redux/reducers/User';

import{BiArrowToTop,BiChevronDownCirc,BiArrowToBottom} from "react-icons/bi";


const Counter = ({ element}) => {

    const [cart, setCart] = useState("")
    const [priceNumber, setPriceNumber] = useState(1)

    const [realPrice, setrealPrice] = useState(element.price)

    console.log(element.id, "item13")
    // console.log(index, "55index")
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
         <div className='Number_controlee'>
          <BiArrowToTop  
           onClick={() => {nextPrice();
            dispatch(setPrice({ price:(realPrice*priceNumber)+realPrice,indexitem:element.id}));
            dispatch(setTotal({opr:"+",value:realPrice}));
            }}
          />
         
        <h5>{priceNumber}</h5>
        < BiArrowToBottom
        
         onClick={() => { prevPrice() 
            dispatch(setPrice({ price:(realPrice*priceNumber)-realPrice,indexitem:element.id}));
            dispatch(setTotal({opr:"-",value:realPrice}));
            }} 
        />
     

       
         </div>
         <h3>{element.name}</h3 >
        <h5>{realPrice* priceNumber}</h5>

        <h5 onClick={() => {
            dispatch(deleteCart({ id: element.id }))
            console.log(element.id)
        }}>delete</h5>

    </div>)

}
export default Counter;