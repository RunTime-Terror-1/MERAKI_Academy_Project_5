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
    console.log(messageLocation == "good" && testComplete == "true",messageLocation, testComplete);
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
       setMessage("enter all information");
    }
  };
  const locationInputs = [
    { setState: setCity, placeholder: "City" },
    { setState: setArea, placeholder: "Area" },
    { setState: setBuilding, placeholder: "Building Number" },
    { setState: setStreet, placeholder: "Street Name" },
    { setState: setPhone, placeholder: "Phone Number" },
  ];
  const pastLocation = [
    { Title: "City", value: pastAddress.city },
    { Title: "Area", value: pastAddress.area },
    { Title: "Building #", value: pastAddress.buldingNumber },
    { Title: "Street Name", value: pastAddress.street },
    { Title: "Phone", value: pastAddress.notes },
  ];

  const createInput = ({ setState, placeholder }) => {
    return (
      <input
        className="input3"
        key={placeholder}
        placeholder={placeholder}
        onChange={(e) => {
          setState(e.target.value);
          newmessage();
        }}
      />
    );
  };
  //pastLocation
  const createLocation = ({ Title, value }) => {
    return (
      <div key={value + Title} className="location-div">
        <h3 style={{ width: "75%" }}>{Title}: </h3>
        <small style={{ width: "25%" }}>{value}</small>
      </div>
    );
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

        <div id="summery">
          <h1>Location</h1>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <input
                className="inputSelect"
                type="radio"
                id="huey"
                name="drone"
                onChange={(e) => {
                  setMessage("")
                  newmessage();
                }}
              />
              <label>New Address</label>
            </div>

            <div>
              <input
                className="inputSelect"
                type="radio"
                id="huey"
                name="drone"
                onChange={(e) => {
                  setMessage("good")
                  pastmessage();
                }}
              />
              <label>Past Address</label>
              
            </div>
            
          </div>

          <div className="locationTow">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {locationInputs.map((element) => {
                return createInput({ ...element });
              })}
            </div>

            <div>
              {trueValue == "true" ? (
                <div>
                <div id="location-div-main">
                  {pastLocation.map((ele) => {
                    return createLocation({ ...ele });
                  })}
                </div>
                </div>
              ) : (
                <div id="empty-addr" >
                  <h2 >
                    You dont have a previous site ..
                  </h2>
                  <img
                    src="http://cdn.onlinewebfonts.com/svg/img_554287.png"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div id="summery">
          <h1>Payment Method</h1>
          <div id="payment-div-de">
            <div style={{ width: "50%" }}>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
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
                <h4>Credit Card</h4>
              </div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  type="radio"
                  id="huey2"
                  name="drone2"
                  value="huey2"
                  onChange={(e) => {
                    setPayment("Cash");
                    setTestComplete("true");
                    
                  }}
                />
                <h4>Cash</h4>
              </div>
            </div>

            <div style={{ width: "50%" }}>
              <div>
                <div className="subTotal">
                  <h2>Subtotal</h2>
                  <h3>{Userinfor.sumPrice + " JD"}</h3>
                </div>
                <div className="subTotal">
                  <h2>Delivery fee</h2>
                  <h3> 0.99 JD</h3>
                </div>
                <div className="subTotal">
                  <h2>Tax</h2>
                  <h3> 16 %</h3>
                </div>
                <div className="subTotal">
                  <h2>Total Amount</h2>
                  <h3>{Userinfor.sumPrice + Userinfor.sumPrice * 0.16 + 1}</h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    className="checkout-btn"
                    id="place-btn"
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

          <div>
            {payment == "Visa" ? (
              <div id="card-view">
                <div>
                  <h3>Card Number</h3>
                  <input placeholder="    -   -  -  -  -   -    -   -  -  -  -   - " />
                </div>

                <div>
                  <h3>Card expiry date</h3>
                  <div>
                    <select onChange={(e) => {}}>
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

                    <select onChange={(e) => {}}>
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

                <div>
                  <h3>Card verification value</h3>
                  <div id="visa-card-img">
                    <input placeholder="number" />
                    <img src="https://www.talabat.com/images/talabat/cvv_guide.png" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
       {models?<></>:<></>}
    </div>
  );
};

export default CompleteOrder;
