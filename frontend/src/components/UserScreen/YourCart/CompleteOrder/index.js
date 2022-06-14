import './style.css'
import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from '../../NavBar';
import { User } from '../../../../controllers/user';
import { empty } from 'dom/lib/mutation';







const CompleteOrder = () => {
    // const navigate = useNavigate()
    // const { state } = useLocation()
    // const { Name } = state

    const [city, setCity] = useState("empty")
    const [Area, setArea] = useState("empty")

    const [Phone, setPhone] = useState("empty")
    const [buildingNumber, setBuilding] = useState("empty")
    const [street, setstreet] = useState("empty")

    const [truevalue, settrue] = useState("false")

    const [pastAdress, setPastAdress] = useState("empty")
    const [messageLocation, setMessage] = useState("empty")

    const [payment, setPayment] = useState("Cash")

    //!.....................................
    let testadress = "false"
    //!.............
    const dispatch = useDispatch();

    const Userinfor = useSelector((state) => {

        return {
            yourCart: state.User.cart,
            yourPrice: state.User.price,
            yourTotal: state.User.total,
            islogin: state.auth.isLoggedIn,
            sumPrice: state.User.sumpriceUser,
            name: state.User.name,
            userId: state.User.Iduser,
        }
    })




    // console.log(Userinfor.yourPrice, "YourPrice   complete")
    //!..............................


    // console.log(Userinfor.userId, "Yourid   complete")


    const saveAdress = async (id) => {


        const adress = await User.UpdateAdress({ userid: id, city: Area, buldingNumber: buildingNumber, street: street, notes: Phone })


    }

    const getAdress = async (userid) => {
        // console.log("idiiddid", userid)
        const pastadess = await User.getaddrssByuserTd({ userid })
        console.log(pastadess.result)
        console.log(pastadess.result[0].street, "kkkkkk")
        if (pastadess.result[0].street != null) {
            console.log("nulllll")
            testadress = "true"
            settrue("true")

        }
        setPastAdress(pastadess.result[0])
        console.log(testadress)
    }

    const pastmessage = () => {
        console.log(testadress)
        if (truevalue == "false") {
            setMessage("sorry not have past location please enter")
        } else {
            setMessage("okey")
        }
    }


    const newmessage = () => {
        if (Area != "empty" && Phone != "empty" && street != "empty" && Phone != "empty" && city != "empty") {
            console.log("welcomeeeeeeeegfg")
            setMessage("done")
        } else {
            console.log("khkhkh")
            setMessage("enter all information")

        }
    }


    useEffect(() => {
        getAdress(localStorage.getItem("userid"))
    }, [])

    return (<div className='completeOrder'>
        <NavBar />
        <div className='order' >
            <div className='summaryOrder'>
                <div className='divSummary'><h1>Order Summary</h1></div>
                <div className='orderinformation'>
                    <h1>{Userinfor.name}</h1>
                    <div className='title'>
                        <h2 className='items'>items</h2>
                        <div className='title_tow'>
                            <h2> quantity</h2>
                            <h2> Price</h2>

                            <h2>Total</h2></div>

                    </div>
                    <div className='mealItems'>{Userinfor.yourPrice ? Userinfor.yourPrice.map((element, index) => {
                        return (<div className='div_return_map' keys={index}>
                            <h3 className='NameMeal'>{element.name}</h3>
                            <div className='insted__div_return_map'>
                                <div className='h3_Qun'>{element.price / element.priceOne}</div>
                                <div className='h3_Pri'>{element.priceOne}</div>
                                <div className='h3_totprice'>{element.price / element.priceOne * element.priceOne + "  JD"}</div>
                            </div>

                        </div>)

                    }) : ""}</div>
                    <div className='sumprice'>total:{Userinfor.sumPrice}</div>
                </div>

            </div>
            <div className='location'>
                <div className='inputLocation'>
                    <div className='cityandarea'>
                        <input placeholder="City"
                            onChange={(e) => {
                                setCity(e.target.value);
                            }}
                        /><input placeholder="Area"
                            onChange={(e) => {
                                setArea(e.target.value);
                            }} />
                    </div>
                    <div className='bulidingandStreet'>
                        <input placeholder="buldingNumber" onChange={(e) => {
                            setBuilding(e.target.value);
                        }} />
                        <input placeholder="stretNumber" onChange={(e) => {
                            setstreet(e.target.value);
                        }} />


                    </div>
                    <div className='Number'>
                        <input className='Number' placeholder="Number" onChange={(e) => {
                            setPhone(e.target.value);
                        }} />
                    </div>

                </div>
                <div className='userPastLocation'>{truevalue == "true" ?
                    <div className='iftrue'>
                        <div className='div45'>City:<h3>Amman</h3></div>
                        <div className='div45'>Area:<h3>{pastAdress.city}</h3></div>
                        <div className='div45'>street:<h3>{pastAdress.street}</h3></div>
                        <div className='div45'>buildingNumber:<h3>{pastAdress.buldingNumber}</h3></div>
                        <div className='div45'>phone:<h3>{pastAdress.notes}</h3></div>
                    </div>
                    : <div><img className="imgadress" src="http://cdn.onlinewebfonts.com/svg/img_554287.png" /><h1>fff</h1></div>}
                </div>


            </div>




            <div className='selelctadresss'>
                <div><input type="radio" id="huey" name="drone"
                    onChange={(e) => { newmessage() }}
                />
                    <label for="huey">new</label></div>

                <div><input type="radio" id="huey" name="drone"
                    onChange={(e) => { pastmessage() }}
                />
                    <label for="huey">Past</label>
                </div>

                <div>{messageLocation != "empty" ? <div>{messageLocation}</div> : ""}</div>
            </div>

            <div>
                <div className='HowPayment'>
                    <div>
                        <input type="radio" id="huey1" name="drone2" value="huey1"
                            onChange={(e) => {
                                setPayment("Visa");
                                console.log(payment, "lllll", "Visa")
                            }}
                        />
                        <label for="huey1">Credit Card
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="huey2" name="drone2" value="huey2"
                            onChange={(e) => {
                                setPayment("Cash");
                                console.log(payment, "22222")
                            }}
                        />
                        <label for="huey2">cash</label>
                    </div>
                </div>
                <div className='paymentcreditCardOremty' >{payment == "Visa" ?
                    <div className='divcreditCard'>
                        <div><h3>Card Number</h3>  <input placeholder="    -   -  -  -  -   - " /> </div>

                        <div>
                            <h3>Card Number</h3>
                            <div >
                                <select className="inputmounth"
                                    onChange={(e) => {
                                        // setDestin(e.target.value);
                                    }} >
                                    <option >mm</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                    <option>05</option>
                                    <option>06</option>
                                    <option>07</option>
                                    <option>08</option>
                                    <option>09</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>


                                <select className="inputmounth"
                                    onChange={(e) => {
                                        // setDestin(e.target.value);
                                    }} >
                                    <option >yy</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>


                                </select>

                            </div>

                        </div>



                        <div></div>

                    </div> : ""}
                </div>
            </div>



            <button onClick={() => {

                saveAdress(Userinfor.userId)

            }}>place order</button>

        </div>



    </div>)

}

export default CompleteOrder;



