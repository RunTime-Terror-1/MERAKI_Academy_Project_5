import './style.css'
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { deleteCart } from '../../../redux/reducers/User';
// import Counter from './Counter';
import { useNavigate } from "react-router-dom";
import NavBar from '../../NavBar';
// import {
//     useLocation
// } from "react-router-dom";

const CompleteOrder = () => {
    // const navigate = useNavigate()
    // const { state } = useLocation()
    // const { Name } = state

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
            islogin: state.auth.isLoggedIn,
        }
    })




    console.log(Userinfor.yourPrice, "YourPrice   complete")
    //!..............................





    return (<div className='completeOrder'>
        <NavBar />
        <div className='order' >
            <div className='summaryOrder'>
                <div className='divSummary'><h1>Order Summary</h1></div>
                <div className='orderinformation'>
                    {/* <h1>{Name}</h1> */}
                    <div className='title'>
                        <h2 className='items'>items</h2>
                        <div className='title_tow'>
                            <h2> quantity</h2>
                            <h2> Price</h2>

                            <h2>Total</h2></div>

                    </div>
                    <div className='mealItems'>{Userinfor.yourPrice?Userinfor.yourPrice.map((element,index)=>{
                        return (<div className='div_return_map'>
                      <h3 className='NameMeal'>{element.name}</h3>
                       <div  className='insted__div_return_map'>  
                        <div className='h3_Qun'>{element.price/element.priceOne +"dff"}</div>
                        <div  className='h3_Pri'>{element.priceOne + "fgff"}</div>
                        <div className='h3_totprice'>{element.price/element.priceOne*element.priceOne + "ffff"}</div>
                       </div>

                        </div>)
                   
                    }):""}</div>

                </div>

            </div>

            <div>addres</div>
            <div>money</div>
            <button>done</button>

        </div>



    </div>)

}

export default CompleteOrder;



