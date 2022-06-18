import "./style.css";
import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  setPrice,
  setsumPriceUser,
  setTotal,
} from "../../../../redux/reducers/User";

import { AiTwotoneDelete } from "react-icons/ai";

import { BsDashLg, BsDashCircleFill, BsPlusCircleFill } from "react-icons/bs";

const Counter = ({ element }) => {
  const [cart, setCart] = useState("");
  const [priceNumber, setPriceNumber] = useState(1);

  const [realPrice, setrealPrice] = useState(element.price);
  const dispatch = useDispatch();

  const Userinfor = useSelector((state) => {
    return {
      yourCart: state.User.cart,
      yourPrice: state.User.price,
      yourTotal: state.User.total,
    };
  });
  const nextPrice = async () => {
    const A = await setPriceNumber(priceNumber + 1);
  };

  const prevPrice = () => {
    setPriceNumber(priceNumber - 1);
  };

  return (
    <div >
      <div id="cart-items-div">
        <div>
          <BsPlusCircleFill
            onClick={() => {
              nextPrice();
              dispatch(
                setPrice({
                  price: realPrice * priceNumber + realPrice,
                  indexitem: element.id,
                  priceOne: realPrice,
                  name: element.name,
                })
              );
              dispatch(setTotal({ opr: "+", value: realPrice }));
            }}
          />
          <h2>{priceNumber}</h2>
          <BsDashCircleFill
            onClick={() => {
              prevPrice();
              dispatch(
                setPrice({
                  price: realPrice * priceNumber - realPrice,
                  indexitem: element.id,
                  priceOne: realPrice,
                  name: element.name,
                  restaurantid: element.restaurant_id,
                })
              );
              dispatch(setTotal({ opr: "-", value: realPrice }));
            }}
          />
        </div>
        <div>
          <h3>{element.name}</h3>
          <h3>{realPrice * priceNumber + "JD"}</h3>
        </div>
        <div>
          <AiTwotoneDelete
            onClick={() => {
              dispatch(deleteCart({ id: element.id }));
              dispatch(setTotal({ opr: "-", value: realPrice }));
              console.log(element.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Counter;
