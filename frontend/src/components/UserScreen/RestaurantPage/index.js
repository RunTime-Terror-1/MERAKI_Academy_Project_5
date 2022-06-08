import './style.css'
import React, { useState, useEffect, useContext } from "react";
import { User } from '../../../controllers/user';



const RestaurantPage = () => {
  const [restaurant, setRestaurants] = useState("")
  const [menu, setMenu] = useState("")
  const [categories, setCategories] = useState("")
  const [arraydetials, setArraydetials] = useState("")
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
    setArraydetials(arrayLoop)
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

  console.log(arraydetials)
  return (<div className="RestaurantPage">
    <div>Navbar</div>

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
          <div className='Res_two_B_A'>{categories ? categories.map((element, index) => {

            return (<div>
              <h1>{element}</h1>

            </div>)
          }) : ""}</div>


          {/* <div className='Res_two_B_B'>{menu ? menu.map((element, index) => {
            return (<div>

              <h1>{element.name}</h1>
              <img src={element.imgUrl} />


            </div>
            )
          }) : ""}</div> */}

          <div className='Res_two_B_B'>{arraydetials? arraydetials.map((element, index) => {
            return (<div className='div_Mallloop_1'>

              <details>
              <summary>{element.catoName}</summary>
           <div>{element.mallloop?element.mallloop.map((elementMall,index)=>{
             return(<div className='div_Mallloop_2'>
               <img className='imagetest' src={elementMall.imgUrl}/>
               <h1>{elementMall.name}</h1>


             </div>)    


           }):""}</div>

              </details>

            </div>
            )
          }) : ""}</div>



          <div className='Res_two_B_c'>cart cart</div>

        </div>





      </div>



      <div className='Res_three'>three</div>
    </div>
  </div>
  );
};

export default RestaurantPage;