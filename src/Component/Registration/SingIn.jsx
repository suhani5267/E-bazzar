import React from "react";
import { Link } from "react-router-dom";
function SingIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-lg">
        <div className="ml-4">
          <h2 className="uppercase text-white font-bold text-3xl text-center">
            SingUp
          </h2>
        </div>
        <div>
          <input
            type="text"
            id="name"
            class="bg-gray-500  text-gray-900 text-sm rounded-lg   block w-full p-2.5 outline-none dark:placeholder-gray-50 dark:focus:border-blue-500 lg:w-[20em] mt-4 text-white placeholder-white"
            placeholder="Name"
            required
          ></input>
        </div>
        <div>
          <input
            type="email"
            id="Email"
            class="bg-gray-500  text-gray-900 text-sm rounded-lg   block w-full p-2.5 outline-none dark:placeholder-white  placeholder-white dark:focus:border-blue-500 lg:w-[20em] mt-4 text-white"
            placeholder="Email"
            required
          ></input>
        </div>
        <div>
          <input
            type="password"
            id="password"
            class="bg-gray-500  text-gray-900 text-sm rounded-lg   block w-full p-2.5 outline-none dark:placeholder-white  placeholder-white dark:focus:border-blue-500 lg:w-[20em] mt-4 text-white"
            placeholder="Password"
            required
          ></input>
        </div>
        <div className="w-full mt-4">
          <button class="text-white bg-red-500 focus:outline-none  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  lg:w-[20em] font-bold ">
            Singup
          </button>
        </div>
        <div className="w-full mt-4 text-center">
          <h3 className="text-white">
            Do you have an account
            <Link to={"/login"} className="text-red-500 ml-1 font-bold">
              {" "}
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
