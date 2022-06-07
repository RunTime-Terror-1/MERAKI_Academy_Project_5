import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from '../../../controllers/user';



const RestaurantPage = () => {
  const [restaurant, setRestaurants] = useState("")
  const [menu, setMenu] = useState("")
  const [categories, setCategories] = useState("")

  const getRestarnt = async () => {
    const responseRestarnt = await User.getRestaurantById({ restaurantId: 1 })
    console.log(responseRestarnt.result)
    setRestaurants(responseRestarnt.result)

    const responseMeal = await User.getMealsByRestaurant({ restaurantId: 1 })
    // console.log(responseMeal.result)
    setMenu(responseMeal.result)
    // console.log(responseMeal.categories)
    setCategories(responseMeal.categories)

  }
  console.log(restaurant)
  console.log(menu)
  console.log(categories)
  useEffect(() => {
    getRestarnt()

  }, [])

  return (<div className="RestaurantPage">
    <div>Navbar</div>
    <div className='Allinform' >
      <div className='Res_One' >One</div>

      <div className='Res_two'>


        <div>{restaurant ? restaurant.map((element, index) => {
          return (<div>

            <div><img src={element.Logo} /></div>

            <div><h1>{element.name}</h1>
              <h2>{element.rest_category}</h2>
            </div>


          </div>)




        }) : ""}

        </div>

        <div>
          <div>{categories ? categories.map((element, index) => {

            return (<div>
              <h1>{element}</h1>

            </div>)
          }) : ""}</div>


          <div>{menu ? menu.map((element, index) => {
            return (<div>

              <h1>{element.name}</h1>
              <img src={element.imgUrl} />


            </div>
            )
          }) : ""}</div>

        </div>


        <div className='Res_three'>three</div>


      </div>

    </div>
    </div>
    );
};

    export default RestaurantPage;