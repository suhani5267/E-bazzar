import React, { useContext } from "react";
import "./Fotter.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import MyContext from "../../context/Data/Context";
function Fotter() {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <footer className="text-gary-600 body-font bg-gray-300">
      <div
        className="text-gary-600 body-font bg-gray-300"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first gap-[2rem]">
            {/* ----------------First Line----------------------- */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h1
                className="title-font text-sm text-gray-900 mb-3 font-medium"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                CATEGORIES
              </h1>
              <nav>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Home</Link>
                </li>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Order</Link>
                </li>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Local For Vocal</Link>
                </li>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Cart</Link>
                </li>
              </nav>
            </div>
            {/* ____________Second _______________________ */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h1
                className="title-font text-sm text-gray-900 mb-3 font-medium"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                CUSTOMER SERVICES
              </h1>
              <nav>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Return Policy</Link>
                </li>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>About</Link>
                </li>
                <li
                  className="text-gray-600 text-lg hover:text-gary-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Contact Us</Link>
                </li>
              </nav>
            </div>
            {/*---------------------------Services And Policy  */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h1
                className="title-font text-sm text-gray-900 mb-3 font-medium"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                SERVICES
              </h1>
              <nav>
                <li
                  className="text-gray-600 text-lg"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  <Link>Privicy</Link>
                </li>
              </nav>
            </div>
            {/* image of payment accepted  */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-200"
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-5 mx-auto flex items-center justify-between sm:flex-row flex-col gap-[2rem]">
          <Link className="flex">
            <div className="flex">
              <h2
                className="text-gray-900 title-font text-lg font-bold"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                E-Barat
              </h2>
            </div>
          </Link>
          <p
            className="ml-2 text-gray-900 font-bold text-lg"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            © 2023 E-bharat —@www.e-barat.com
          </p>

          <div className="flex flex-end text-gary-900 gap-[1rem]">
            <FaInstagram
              className="bg-gray-900 w-10 h-10 "
              style={{ backgroundColor: mode === "dark" ? "" : "gray" }}
            />
            <FaFacebookSquare
              className="bg-gray-900 w-10 h-10 "
              style={{ backgroundColor: mode === "dark" ? "" : "gray" }}
            />
            <FaTwitter
              className="bg-gray-900 w-10 h-10 "
              style={{ backgroundColor: mode === "dark" ? "" : "gray" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;
