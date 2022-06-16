import './style.css'
import React, { useState, useEffect, useContext } from 'react'
import { User } from '../../../controllers/user'
import NavBar from '../NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setrestaurantId } from '../../../redux/reducers/User'

const AllRestarnts = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [restaurants, setRestaurants] = useState('')
  
  const [number, setNumber] = useState(0)

  const [showNumber, setshowNumber] = useState(0)

  const Userinfor = useSelector((state) => {
    return {
      yourCart: state.User.cart,
      yourPrice: state.User.price,
      yourTotal: state.User.total,
      islogin: state.auth.isLoggedIn,
      name: state.User.name,
      token: state.auth.token,
      Idrestaurant: state.User.restaurantIdId,
    }
  })

  const getRestaurants = async () => {
    let responserest = await User.getAllRestaurants()

    setRestaurants(responserest.result)
   setshowNumber(responserest.result.length/9)

  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <div className="AllRestarnts">
      {<NavBar />}
      <div className="AllAllRestarntsShow">
        <div className="AllRestarnts_A"></div>

        <div className="Continert">
          <div className="Continer_A">
            <div className="Continer_A_A">
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Zyu-T5WQ7bLxROPZPWo7u65WqNKpnk7NWQ&usqp=CAU"
                  />
                </div>

                <h3 className='h3h3NameCategory'>Pizza</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/17/57/7d/17/2-egg-breakfast.jpg"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Breakfast</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://c8.alamy.com/comp/2F7BRP8/french-potato-pack-box-cartoon-fastfood-fry-potato-isolated-illustration-fast-food-2F7BRP8.jpg"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Fast food</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKopRRHoSDAgqTfKGo8tn1y_iggg0CtY-YPVx-5V9elOO0080P-eAJi8zbqtpytywskg&usqp=CAU"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Burgess</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://thumbs.dreamstime.com/b/vector-illustration-heart-shape-red-fruits-vegetables-healthy-nutrition-organic-concept-flat-style-127159995.jpg"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Healthy</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://i0.wp.com/upandgoneblog.com/wp-content/uploads/2019/08/Ramen.jpg?fit=860%2C645&ssl=1"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Asian</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Sea Food</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png"
                  />
                </div>
                <h3  className='h3h3NameCategory'>sandwichs</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Sweets</h3>
              </div>
              <div
                onClick={() => {
                  navigate('/SortResturants', {
                    state: { sortcategory: 'pizza' },
                  })
                }}
              >
                <div className="DivimgCategory">
                  {' '}
                  <img
                    className="imgCategory"
                    src="https://images.deliveryhero.io/image/talabat/Menuitems/80850219637895358999912265.jpg"
                  />
                </div>
                <h3  className='h3h3NameCategory'>Juices</h3>
              </div>
            </div>
            
          </div>
          <div className="AllRestarnts_B">
            {restaurants
              ? restaurants.map((elemnt, index) => {
                if(index>=number){
                  console.log("dfdfdfd")
                  return (
                    <div
                      className="All_B_eachRestarant"
                      key={index}
                      onClick={() => {
                        // console.log(elemnt.id)

                        dispatch(setrestaurantId({ restId: elemnt.id }))

                        navigate('/RestaurantPage', {
                          state: { id: localStorage.getItem('restaurantId') },
                        })
                      }}
                    >
                      <img className="logo" src={elemnt.backImg} />

                      <h2 className="All_h2">{elemnt.name + 'kjkjkj'}</h2>
                      <h2 className="All_h2Categorry">
                        {elemnt.rest_category}
                      </h2>
                    </div>
                  )

                }
                  console.log(index)
    
                })
              : ' '}
          </div>

          <div><button >past</button><h2></h2><h2>/{showNumber}</h2><button onClick={()=>{setNumber(4)}}>Next</button></div>
        </div>

        <div className="AllRestarnts_C"></div>
      </div>
    </div>
  )
}

export default AllRestarnts
