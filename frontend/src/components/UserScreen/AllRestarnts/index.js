import "./style.css";
import React, { useState, useEffect, useContext } from "react";
import { User } from "../../../controllers/user";
import NavBar from "../NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setrestaurantId } from "../../../redux/reducers/User";

const AllRestaurants = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [restaurants, setRestaurants] = useState("");

  const [number, setNumber] = useState(0);
  const [numberTow, setNumberTow] = useState(12);

  const [showNumber, setShowNumber] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  const UserInfo = useSelector((state) => {
    return {
      yourCart: state.User.cart,
      yourPrice: state.User.price,
      yourTotal: state.User.total,
      isLogin: state.auth.isLoggedIn,
      name: state.User.name,
      token: state.auth.token,
      idRestaurant: state.User.restaurantIdId,
    };
  });

  const getRestaurants = async () => {
    let responseRest = await User.getAllRestaurants();
    setRestaurants(responseRest.result);
    setShowNumber(Math.ceil(responseRest.result.length / 12));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const buildCategoryIcon = ({ url, text = "Pizza" }) => {
    return (
      <div
        onClick={() => {
          navigate("/SortResturants", {
            state: { sortcategory: "pizza" },
          });
        }}
      >
        <div className="DivimgCategory">
          <img className="imgCategory" src={url} />
        </div>

        <h3 className="h3h3NameCategory">{text}</h3>
      </div>
    );
  };

  const buildRestaurantCard = ({ element, index }) => {
    return (
      <div key={element.id} id="rest-card-div">
        <img src={element.backImg} />
        <h3>{element.name}</h3>
    
      
     
      </div>
    );
  };
  return (
    <div className="AllRestarnts">
      <NavBar />
      <div className="first-restaurant-div">
        <div className="Continert">
          <div className="Continer_A">
            <div className="Continer_A_A">
              {buildCategoryIcon({
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Zyu-T5WQ7bLxROPZPWo7u65WqNKpnk7NWQ&usqp=CAU",
                text: "Pizza",
              })}
              {buildCategoryIcon({
                url: "https://media-cdn.tripadvisor.com/media/photo-s/17/57/7d/17/2-egg-breakfast.jpg",
                text: "Breakfast",
              })}
              {buildCategoryIcon({
                url: "https://c8.alamy.com/comp/2F7BRP8/french-potato-pack-box-cartoon-fastfood-fry-potato-isolated-illustration-fast-food-2F7BRP8.jpg",
                text: "Fast food",
              })}

              {buildCategoryIcon({
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKopRRHoSDAgqTfKGo8tn1y_iggg0CtY-YPVx-5V9elOO0080P-eAJi8zbqtpytywskg&usqp=CAU",
                text: "Burgess",
              })}

              {buildCategoryIcon({
                url: "https://thumbs.dreamstime.com/b/vector-illustration-heart-shape-red-fruits-vegetables-healthy-nutrition-organic-concept-flat-style-127159995.jpg",
                text: "Healthy",
              })}
              {/* <div
                onClick={() => {
                  navigate("/SortResturants", {
                    state: { sortcategory: "pizza" },
                  });
                }}
              >
                <div className="DivimgCategory">
                  {" "}
                  <img
                    className="imgCategory"
                    src="https://i0.wp.com/upandgoneblog.com/wp-content/uploads/2019/08/Ramen.jpg?fit=860%2C645&ssl=1"
                  />
                </div>
                <h3 className="h3h3NameCategory">Asian</h3>
              </div>*/}
            </div>
          </div>

          <div id="restaurants-div">
            {restaurants
              ? restaurants.map((element, index) => {
                  if (index >= number && index < numberTow) {
                    return buildRestaurantCard({ element, index });
                  }
                })
              : " "}
          </div>

          <div className="NextAndPervrs">
            <button
              className="ButtonAllresturants"
              onClick={() => {
                if (number == 0) {
                  setNumber(0);
                  setNumberTow(12);
                } else {
                  setNumber(number - 12);
                  setNumberTow(numberTow - 12);
                }
                if (pageNumber == 1) {
                  setPageNumber(1);
                } else {
                  setPageNumber(pageNumber - 1);
                }
              }}
            >
              past
            </button>
            <div className="divNumberPage">
              {" "}
              <h2>{pageNumber}</h2>
              <h2>/{showNumber}</h2>
            </div>

            <button
              className="ButtonAllresturants"
              onClick={() => {
                setNumber(number + 12);
                setNumberTow(numberTow + 12);

                if (showNumber == pageNumber) {
                  setPageNumber(showNumber);
                } else {
                  setPageNumber(pageNumber + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>

        <div className="AllRestarnts_C"></div>
      </div>
    </div>
  );
};

export default AllRestaurants;
