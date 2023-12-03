import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex  justify-center items-center h-screen">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <div>
          <h1 className="text-white text-center font-medium text-3xl mb-4">
            Login
          </h1>
        </div>
        <div>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-[20em] mt-4"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="w-full mt-4">
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-[20em]"
            placeholder="Pasword"
            required
          />
        </div>
        <div className="w-full mt-4">
          <button class="text-black bg-yellow-500 focus:outline-none  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  lg:w-[20em] font-bold ">
            Login
          </button>
        </div>
        <div className="w-full mt-4 text-center">
          <h3 className="text-white">
            Don't have an account
            <Link to={"/singin"} className="text-yellow-400 ml-1 font-bold">
              {" "}
              SingIn
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
