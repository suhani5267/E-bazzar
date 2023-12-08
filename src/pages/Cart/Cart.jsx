import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Component/layout/Layout";
import MyContext from "../../context/Data/Context";
import Modal from "../../Component/Model/Model";
import { deleteFromCart } from "../../redux/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
function Cart() {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const context = useContext(MyContext);
  const { mode, product } = context;
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log("cart-->", cartItem);
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("delete g cart");
  };
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItem.forEach((element) => {
      temp = temp + parseInt(element.price);
    });
    setTotalAmount(temp);
  }, [cartItem]);

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

  // -------------------buy now function----------------------------------------------------------------
  const buyNow = async () => {
    if (name === "" || address === "" || pincode === "" || mobile === "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    const addressInfo = {
      name,
      address,
      pincode,
      mobile,
      date: new Date().toLocaleString("en-us", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    console.log(addressInfo);
    // rezerpay function for payment-------------------------------------
    var options = {
      key: "rzp_test_5o5ZoHVCtJZAxJ",
      key_secret: "27MUObh7OZdTm8QAsHEApBpR",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;

        // store in firebase

        const oderInfo = {
          cartItem,
          addressInfo,
          date: new Date().toLocaleString("en-us", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),

          email: JSON.parse(localStorage.getItem("user")).user.email,
          uid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId,
        };

        try {
          const orderRef = collection(fireDB, "order");
          addDoc(orderRef, oderInfo);
        } catch (error) {}
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  return (
    <Layout className="bg-gray-100">
      {cartItem.length > 0 ? (
        <div
          className="h-full bg-gray-100 pt-5 mb-4 pb-8"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <h1
            className="font-bold text-2xl text-center mb-4"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Cart Items
          </h1>
          <div
            className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 "
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div
              className="rounded-lg md:w-2/3"
              style={{
                backgroundColor: mode === "dark" ? "#282c34" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              {cartItem.map((item, index) => {
                const { title, discription, price, imageurl } = item;
                return (
                  <div
                    className="mb-6 justify-between rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                    key={index}
                  >
                    <img
                      src={imageurl}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h1
                          className="text-lg font-bold text-gray-900"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        <h2
                          className="text-lg font-bold text-gray-900"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {discription}
                        </h2>
                        <p
                          className="text-lg font-bold text-gray-900"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          ₹{price}
                        </p>
                      </div>
                      <div
                        className="mt-4 flex justify-between sm:space-y-6  sm:mt-0 sm:block sm:space-x-6 "
                        onClick={() => deleteCart(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* price div */}
            <div
              className="mt-6 h-full bg-white p-6 border shadow-md md:mt-0 md:w-1/3"
              style={{
                backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div
                className="mb-3 flex justify-between"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <p
                  className="text-lg font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  SubTotal
                </p>
                <p
                  className="text-lg font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹{totalAmount}
                </p>
              </div>
              <div className=" flex justify-between">
                <p
                  className="text-lg font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Shipping
                </p>
                <p
                  className="text-lg font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹{shipping}
                </p>
              </div>
              <hr className="my-4" />
              <div className=" flex justify-between">
                <p
                  className="text-lg font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {" "}
                  Total{" "}
                </p>
                <p
                  className="text-lg font-bold text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹{grandTotal}
                </p>
              </div>
              <div className="mt-4 w-full">
                <Modal
                  name={name}
                  address={address}
                  mobile={mobile}
                  pincode={pincode}
                  setName={setName}
                  setAddress={setAddress}
                  setMobile={setMobile}
                  setPincode={setPincode}
                  buyNow={buyNow}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mb-[60%] h-full flex justify-center items-center"
          style={{
            backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <h1
            className="text-4xl    font-bold"
            style={{
              backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            No item in the cart
          </h1>
        </div>
      )}
    </Layout>
  );
}

export default Cart;
