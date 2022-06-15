import './style.css'
import React, { useState, useEffect, useContext } from 'react'
import { User } from '../../../controllers/user'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const SortResturant = () => {
  let { state } = useLocation()
  const { sortcategory } = state

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //! ......................................

  const [afterSort, setAftersort] = useState('')

  const resturantSort = async () => {
    console.log(sortcategory)
    const resSort = await User.getSortResturants({
      restaurantCategory: sortcategory,
    })
    console.log(resSort.result)
    setAftersort(resSort.result)
  }

  useEffect(() => {
    resturantSort()
  }, [])

  return (
    <div className="SortDiv">
      {<NavBar />}

      <div className="AllAllRestarntsShow">
        <div className="AllRestarnts_A"></div>

        <div className="SortDivOne">
          {' '}
          {afterSort
            ? afterSort.map((elemnt, index) => {
                // console.log(elemnt.Logo)
                return (
                  <div
                    className="SortDivOne_one"
                    key={index}
                    onClick={() => {
                      // console.log(elemnt.id)

                      // dispatch(setrestaurantId({ restId: elemnt.id }))

                      navigate('/RestaurantPage', {
                        state: { id: localStorage.getItem('restaurantId') },
                      })
                    }}
                  >
                    <img className="logo" src={elemnt.backImg} />

                    <h2 className="All_h2">{elemnt.name + 'kjkjkj'}</h2>
                    <h2 className="All_h2Categorry">{elemnt.rest_category}</h2>
                  </div>
                )
              })
            : ' '}
        </div>

        <div className="AllRestarnts_C"></div>
      </div>
    </div>
  )
}

export default SortResturant
