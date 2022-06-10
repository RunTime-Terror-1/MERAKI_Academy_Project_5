import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from '../../../controllers/user';
import NavBar from '../NavBar';
import YourCart from '../YourCart';
import { setCart, setPrice } from '../../../redux/reducers/User';
import { useDispatch, useSelector } from "react-redux";
import SumPrice from './SumPrice';

import { setTotal} from '../../../redux/reducers/User';

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
      sumPrice:state.User.sumPriceUser,
    }
  })


  const getRestarnt = async () => {

    const responseRestarnt = await User.getRestaurantById({ restaurantId: 1 })
    console.log(responseRestarnt.result)
    setRestaurants(responseRestarnt.result)



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

  
  return (<div className="RestaurantPage">
    <div>{<NavBar />}</div>


    <div className='Allinform' >

      <div className='Res_One' >One</div>



      <div className='Res_two'>


        <div className='Res_two_A' >{restaurant ? restaurant.map((element, index) => {
          return (<div className='Res_two_A_A' >

            <div><img src={element.Logo} /></div>

            <div><h1>{element.name}</h1>
              <h2>{element.rest_category}</h2>
            </div>


          </div>)






        }) : ""}

        </div>

        <div className='Res_two_B' >

          <div className='Res_two_B_A'>
            <div className='Res_two_B_A_first' >
              <h1>categories</h1>
              <div className='Res_two_B_A_One'>{categories ? categories.map((element, index) => {

                return (<div className='divcategories' key={index}>
                  <a href={"#" + index} className="a_atAll">{element}</a>

                </div>)
              }) : ""}</div>
            </div>

          </div>






          <div className='Res_two_B_B'>{arraydetials ? arraydetials.map((element, index) => {
            return (<div className='div_Mallloop_1'>

              <details open id={index} >
                <summary className="details">{element.catoName}</summary>
                <div>{element.mallloop ? element.mallloop.map((elementMall, index) => {
                  // console.log(elementMall.id)
                  return (<div className='div_Mallloop_2'>

                    <img className='imagetest' src={elementMall.imgUrl} />
                    <h1>{elementMall.name}</h1>
                    <button
                      onClick={() => {
                        console.log(elementMall)
                        dispatch(setCart({ items: elementMall }))
                        dispatch(setPrice({ price: elementMall.price, indexitem: elementMall.id }))
                        // setSumreal(elementMall.price)
                        // dispatch(setsumPriceUser({id:1}))
                        dispatch(setTotal({opr:"+",value:elementMall.price}));
                        console.log("44")
                        console.log(cart)
                      }

                      } >add to cart</button>

                  </div>)


                }) : ""}</div>

              </details>

            </div>
            )
          }) : ""}</div>



          <div className='Res_two_B_c'>
            <div className='Res_two_B_c_One' 
            // onClick={() => { sum() }}
            
            >
              <button> your cart</button>


              {<YourCart />}
              {/* <div>{Userinfor.yourPrice.length == 0 ? "" : <h3>""</h3>}</div> */}
            </div>

          </div>

        </div>





      </div>



      <div className='Res_three'>three</div>
    </div>
  </div>
  );
};

export default RestaurantPage;