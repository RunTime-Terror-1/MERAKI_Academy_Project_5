import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { User } from "../../../controllers/user";
import NavBar from "../NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import{ setrestaurantId} from  '../../../redux/reducers/User'
// import { setTotal, setNameRest } from '../../../redux/reducers/User'

const AllRestarnts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [restaurants, setRestaurants] = useState("");
  const Userinfor = useSelector((state) => {
    return {
      yourCart: state.User.cart,
      yourPrice: state.User.price,
      yourTotal: state.User.total,
      islogin: state.auth.isLoggedIn,
      name: state.User.name,
      token: state.auth.token,
      Idrestaurant:state.User.restaurantIdId,
    };
  });

  const getRestaurants = async () => {
    let hotel = await User.getAllRestaurants();

    setRestaurants(hotel.result);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <div className="AllRestarnts">
      {<NavBar />}
      <div className="AllAllRestarntsShow">
        <div className="AllRestarnts_A"></div>

        <div className="AllRestarnts_B">
          {restaurants
            ? restaurants.map((elemnt, index) => {
                // console.log(elemnt.Logo)
                return (
                  <div
                    className="All_B_eachRestarant"
                    key={index}
                    onClick={() => {
                      // console.log(elemnt.id)
                      dispatch(setrestaurantId({restId:elemnt.id}))
                      navigate("/RestaurantPage",{ state: { id:localStorage.getItem("restaurantId") } });
                    }}
                  >
                    <img className="logo" src={elemnt.backImg} />

                    <h2 className="All_h2">{elemnt.name + "kjkjkj"}</h2>
                    <h2 className="All_h2Categorry">{elemnt.rest_category}</h2>
                  </div>
                );
              })
            : " "}
        </div>

        <div className="AllRestarnts_C"></div>
      </div>
    </div>
  );
};

export default AllRestarnts;
