import "./style.css";
import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";
import { User } from "../../../../controllers/user";
import { empty } from "dom/lib/mutation";

const CompleteOrder = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("empty");
  const [Area, setArea] = useState("empty");
  const [Phone, setPhone] = useState("empty");
  const [buildingNumber, setBuilding] = useState("empty");
  const [street, setStreet] = useState("empty");
  const [trueValue, setTrue] = useState("false");
  const [pastAddress, setPastAddress] = useState("empty");
  const [messageLocation, setMessage] = useState("empty");
  const [payment, setPayment] = useState("Cash");
  const [testComplete, setTestComplete] = useState("false");
  const [models, setModels] = useState(false);
  const [popAddress, setPopAddress] = useState("false");

  //!.....................................
  let testAddress = "false";
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
      sumItems: state.User.Sumitems,
    };
  });

  const saveAddress = async (id) => {
    if (messageLocation == "good" && testComplete == "true") {
      const address = await User.UpdateAddress({
        userid: id,
        city: Area,
        buldingNumber: buildingNumber,
        street: street,
        notes: Phone,
      });
    }
  };

  //!........................................................
  const getAdress = async (userid) => {
    const pastadess = await User.getaddrssByuserTd({ userid });

    if (pastadess.result[0].street != null) {
      testAddress = "true";
      setTrue("true");
    }
    setPastAddress(pastadess.result[0]);
  };
  //!........................................................
  const pastmessage = () => {
    if (trueValue == "false") {
      setMessage("sorry not have past location please enter");
      setPopAddress("false");
    } else {
      setMessage("good");
      setPopAddress("true");
    }
  };
  //!........................................................

  const newmessage = async () => {
    if (
      Area != "empty" &&
      Phone != "empty" &&
      street != "empty" &&
      Phone != "empty" &&
      city != "empty"
    ) {
      setMessage("good");
    } else {
      await setMessage("enter all information");
    }
  };

  const toggleModel = () => {
    setModels(!models);
  };
  //!........................................................
  const sentUserOrder = async (id) => {
    if (testComplete == "true" && messageLocation == "good") {
      await User.sentOrder({
        userid: id,
        state: "progess",
        receipt: Userinfor.sumPrice,
        resturantId: Userinfor.yourPrice[0].restaurant,
        mealarray: Userinfor.yourPrice,
        Quntity: Userinfor.sumItems,
      });
    }
  };
  //!........................................................
  const move = () => {
    if (testComplete == "true" && messageLocation == "good") {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }

    //    navigate("/")
  };

  //!...............................................................
  useEffect(() => {
    getAdress(localStorage.getItem("userid"));
  }, []);

  //!...............................................................
  return (
    <div className="completeOrder">
      <NavBar />
      <div className="order">
        <div id="summery">
          <h1>Order Summary</h1>
          <h2>{Userinfor.name} Restaurant</h2>
          <div id="summary2">
          <div className="table-row">
            <h3>#</h3>
            <h3>Items</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3>Total</h3>
          </div>
          {Userinfor.yourPrice ? (
            Userinfor.yourPrice.map((element, index) => {
              return (
                <div key={index} className="table-row">
                  <strong>{index + 1}</strong>
                  <strong>{element.name}</strong>
                  <strong>{element.price / element.priceOne}</strong>
                  <strong>{element.priceOne}</strong>
                  <strong>{element.price}</strong>
                </div>
              );
            })
          ) : (
            <></>
          )}
           </div>
        </div>

        <div className="location">
          <div className="Enterh2_order">
            {" "}
            <h2 className="h2_order   Enter">Enter a new site</h2>
            <h2 className="h2_order  lastSite "> last site</h2>
          </div>

          <div className="locationTow">
            <div className="inputLocation">
              <div className="cityandarea">
                <input
                  className="inputtag"
                  placeholder="City"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
                <input
                  className="inputtag"
                  placeholder="Area"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </div>
              <div className="cityandarea">
                <input
                  className="inputtag"
                  placeholder="buldingNumber"
                  onChange={(e) => {
                    setBuilding(e.target.value);
                  }}
                />
                <input
                  className="inputtag"
                  placeholder="stretName"
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </div>
              <div className="Number">
                <input
                  className="inputtagNumber"
                  placeholder="Number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="userPastLocation">
              {trueValue == "true" ? (
                <div className="iftrue">
                  <div className="div45">
                    <div className="h2h2h2PastLocation">
                      {" "}
                      <h2 className="h2h2h2333">City:</h2>
                    </div>
                    <h3 className="h2userLocation">Amman</h3>
                  </div>
                  <div className="div45">
                    <div className="h2h2h2PastLocation">
                      {" "}
                      <h2 className="h2h2h2333">Area:</h2>
                    </div>
                    <h3 className="h2userLocation">{pastAddress.city}</h3>
                  </div>
                  <div className="div45">
                    <div className="h2h2h2PastLocation">
                      <h2 className="h2h2h2333">street:</h2>
                    </div>
                    <h3 className="h2userLocation">{pastAddress.street}</h3>
                  </div>
                  <div className="div45">
                    <div className="h2h2h2PastLocation">
                      <h2 className="h2h2h2333">buildingNumber:</h2>
                    </div>
                    <h3 className="h2userLocation">
                      {pastAddress.buldingNumber}
                    </h3>
                  </div>
                  <div className="div45">
                    <div className="h2h2h2PastLocation">
                      <h2 className="h2h2h2333"> phone:</h2>
                    </div>

                    <h3 className="h2userLocation">{pastAddress.notes}</h3>
                  </div>
                </div>
              ) : (
                <div className="divimageee">
                  <h2 className="pastlocationmessage">
                    You dont have a previous site ..
                  </h2>
                  <img
                    className="imgadresss"
                    src="http://cdn.onlinewebfonts.com/svg/img_554287.png"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="selelctadresss">
          <div className="Selecth2_order">
            <h2 className="h2_order">Select Address</h2>
          </div>

          <div className="divnewAdress">
            <input
              className="inputSelect"
              type="radio"
              id="huey"
              name="drone"
              onChange={(e) => {
                newmessage();
              }}
            />
            <label for="huey">new address</label>
          </div>

          <div>
            <input
              className="inputSelect"
              type="radio"
              id="huey"
              name="drone"
              onChange={(e) => {
                pastmessage();
              }}
            />
            <label for="huey">Past address</label>
          </div>

          <div className="divColorMessage">
            {messageLocation != "empty" ? (
              <div className="messageColor">{messageLocation}</div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="Payment">
          <div className="PaymentOne">
            <h2 className="h2_order"> Payment Summary</h2>
          </div>
          <div className="Paymentwo">
            <div className="Paymenttow_tow">
              <div className="HowPayment">
                <div>
                  <input
                    type="radio"
                    id="huey1"
                    name="drone2"
                    value="huey1"
                    onChange={(e) => {
                      setPayment("Visa");
                      setTestComplete("true");
                      //   setPopadress("true")
                    }}
                  />
                  <label for="huey1">Credit Card</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="huey2"
                    name="drone2"
                    value="huey2"
                    onChange={(e) => {
                      setPayment("Cash");
                      setTestComplete("true");
                      //   setPopadress("false")
                    }}
                  />
                  <label for="huey2">cash</label>
                </div>
              </div>
              <div className="paymentcreditCardOremty">
                {payment == "Visa" ? (
                  <div className="divcreditCard">
                    <div className="divcreditCard_one">
                      <h3 className="cartVisah3">Card Number</h3>{" "}
                      <input
                        className="inputCardNumber"
                        placeholder="    -   -  -  -  -   - "
                      />{" "}
                    </div>

                    <div className="divcreditCard_two">
                      <h3 className="cartVisah3">Card expiry date</h3>
                      <div className="divCreditCard_two_two">
                        <select
                          className="inputmounth"
                          onChange={(e) => {
                            // setDestin(e.target.value);
                          }}
                        >
                          <option>mm</option>
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

                        <select className="inputmounth" onChange={(e) => {}}>
                          <option>yy</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                          <option>2027</option>
                        </select>
                      </div>
                    </div>

                    <div className="divcreditCard_three">
                      <h3 className="cartVisah3">Card verification value</h3>
                      <div className="divImageeee">
                        <input className="verification" placeholder="number" />
                        <img
                          className="cartimage"
                          src="https://www.talabat.com/images/talabat/cvv_guide.png"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="divDivdiv">
              <div className="divTotalOrder">
                <div className="divdivTotal">
                  <h2 className="h2h2Total">Subtotal</h2>
                  <h3 className="h3h3h3total">{Userinfor.sumPrice + " JD"}</h3>
                </div>
                <div className="divdivTotal">
                  <h2 className="h2h2Total">Delivery fee</h2>
                  <h3 className="h3h3h3total"> 0.99 JD</h3>
                </div>
                <div className="divdivTotal   Tax">
                  <h2 className="h2h2Total">Tax</h2>
                  <h3 className="h3h3h3total"> 16 %</h3>
                </div>
                <div className="divdivTotal">
                  <h2 className="h2h2Total">Total Amount</h2>
                  <h3 className="h3h3h3total">
                    {Userinfor.sumPrice + Userinfor.sumPrice * 0.16 + 1}
                  </h3>
                </div>
                <div>
                  {" "}
                  <button
                    className="PlaceOrder"
                    onClick={async () => {
                      saveAddress(Userinfor.userId);
                      sentUserOrder(Userinfor.userId);

                      await toggleModel();

                      move();
                    }}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divdivModels">
          {models && (testComplete == "false" || popAddress == "false") ? (
            <div
              className="instedModelOne"
              onClick={() => {
                toggleModel();
              }}
            >
              <div className="BigBiginsted">
                <div className="instedModel">
                  <h2 className="h2h2PleaseCheck">
                    Please Check Your Information
                  </h2>
                  <button
                    className="CloseButton"
                    onClick={() => {
                      toggleModel();
                    }}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {models && testComplete == 'true' && popadress == 'true' ? (
               
                  <div
                    className="instedModelOne"
                    onClick={() => {
                      toggleModel()
                    }}
                  >
                    <div className="BigBiginsted">
                      <div className="instedModel">
                        <h2 className="h2h2PleaseCheck">
                          Order Completed will access you
                        </h2>
                        <button
                          className="CloseButton"
                          onClick={() => {
                            toggleModel();
                            navigate('/');
                          }}
                        >
                          HomePage
                        </button>
                      </div>

              
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompleteOrder;
/* 
 <div className="mealItems">
                {Userinfor.yourPrice
                  ? Userinfor.yourPrice.map((element, index) => {
                      return (
                        <div className="div_return_map" keys={index}>
                          <h3 className="NameMeal">{element.name}</h3>
                          <div className="insted__div_return_map">
                            <div className="h3_Qun">
                              {element.price / element.priceOne}
                            </div>
                            <div className="h3_Pri">
                              {element.priceOne + " JD"}
                            </div>
                            <div className="h3_totprice">
                              {(element.price / element.priceOne) *
                                element.priceOne +
                                "  JD"}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>{" "}
*/
