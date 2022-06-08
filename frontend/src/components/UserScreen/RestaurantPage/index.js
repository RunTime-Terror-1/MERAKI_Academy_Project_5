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
    // console.log(menu)
    // console.log(categories)



    let array = []
    let arrayTwo = []
    let arrayLoop = []

    // console.log(menu)
    // console.log(responseMeal.result)
    const filter = await responseMeal.categories.map((element, indexOne) => {
      console.log("5")
      arrayLoop.push({ catoName: element, mallloop: [] })
      responseMeal.result.map((elem, indextow) => {
        if (elem.category.includes(element)) {

          array.push(element)
          arrayTwo.push(elem)
          arrayLoop[indexOne].mallloop.push(elem)
        }

      })
      console.log(arrayLoop[indexOne])
    })

    console.log(array)
    console.log(arrayTwo)
    console.log(arrayLoop)
    // console.log(arrayLoop[indexOne])
  }

  // const filter = async () => {
  //   console.log("df")
  //   let array = []
  //   console.log(menu)
  //   console.log(categories)
  //   const filterw = await menu.map((element, index) => {
  //     console.log("5")
  //     menu.map((elem, index) => {
  //       if (elem.category.includes(element)) {

  //         array.push(element)
  //       }

  //     })

  //   })

  //   console.log(array)


  // }




  // console.log(restaurant)
  // console.log(menu)
  // console.log(categories)
  
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





      </div>
      <div className='Res_three'>three</div>
    </div>
  </div>
  );
};

export default RestaurantPage;