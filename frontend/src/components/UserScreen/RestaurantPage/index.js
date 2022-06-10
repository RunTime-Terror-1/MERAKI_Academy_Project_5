import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from '../../../controllers/user';
import NavBar from '../NavBar';
import YourCart from '../YourCart';
import { setCart, setPrice } from '../../../redux/reducers/User';
import { useDispatch, useSelector } from "react-redux";
import SumPrice from './SumPrice';

import { setTotal } from '../../../redux/reducers/User';

const RestaurantPage = () => {

  const dispatch = useDispatch();

  // const [sumreal, setSumreal] = useState(0)
  const [restaurant, setRestaurants] = useState("")
  const [menu, setMenu] = useState("")
  const [categories, setCategories] = useState("")
  const [arraydetials, setArraydetials] = useState("")
  const cart = []

  //!...................................................
  const Userinfor = useSelector((state) => {

    return {
      yourCart: state.User.cart,
      yourPrice: state.User.price,
      sumPrice: state.User.sumPriceUser,
    }
  })


  const getRestarnt = async () => {

    const responseRestarnt = await User.getRestaurantById({ restaurantId: 1 })

    console.log(responseRestarnt.result)
    await setRestaurants(responseRestarnt.result)



    const responseMeal = await User.getMealsByRestaurant({ restaurantId: 1 })
    setMenu(responseMeal.result)

    setCategories(responseMeal.categories)



    let array = []
    let arrayTwo = []
    let arrayLoop = []

    const filter = await responseMeal.categories.map((element, indexOne) => {
      // console.log("5")
      arrayLoop.push({ catoName: element, mallloop: [] })
      responseMeal.result.map((elem, indextow) => {
        if (elem.category.includes(element)) {

          // array.push(element)
          // arrayTwo.push(elem)
          arrayLoop[indexOne].mallloop.push(elem)
        }

      })
      console.log(arrayLoop[indexOne])
    })

    setArraydetials(arrayLoop)


  }




  useEffect(() => {
    getRestarnt()

  }, [])


  console.log(arraydetials)
  console.log(Userinfor.yourPrice)

  console.log(restaurant)

  return (<div className="RestaurantPage">
    <div>{<NavBar />}</div>


    <div className='Allinformation_One' >

      <div className='All_One_map' >{restaurant ? restaurant.map((element, index) => {
        return (<div className='All_One_One_map_returndiv' >
          <div><img className='imgback' src={element.backImg} /></div>
          <img className='imgLogo' src={element.Logo} />
          <div className='div_restur_Name'><h1 className='H1_Name'>{element.name}</h1>
            <h2>{element.rest_category}</h2>
          </div>


        </div>)


      }) : ""}

      </div>

    </div>



    <div className='Allinformation_Two'>
      <div className='All_Two-categore'><h1>categories</h1>
        <div className='All_Two-categore_map'>{categories ? categories.map((element, index) => {
          return (<div className='All_Two-categore_map_return' key={index}>
            <a href={"#" + index} className="a_atAll">{element}</a>

          </div>)
        }) : ""}</div>
      </div>



      <div className='All_Two-menue'>menue</div>
      <div className='All_Two-cart'>cart</div>
    </div>



  </div>


  );
};

export default RestaurantPage;