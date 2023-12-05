import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/Data/Context";
import { auth } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(MyContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();
  const login = async () => {
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));

      toast.success("Login successfully");
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error("Login Failed");
      setLoading(false);
    }
  };
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-[20em] mt-4"
            placeholder="Email"
            required
          ></input>
        </div>
        <div className="w-full mt-4">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-[20em]"
            placeholder="Pasword"
            required
          />
        </div>
        <div className="w-full mt-4">
          <button
            class="text-black bg-yellow-500 focus:outline-none  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  lg:w-full sm:w-full font-bold "
            onClick={login}
          >
            Login
          </button>
        </div>
        <div className="w-full mt-4 text-center">
          <h3 className="text-white">
            Don't have an account
            <Link to={"/singin"} className="text-yellow-400 ml-1 font-bold">
              {" "}
              SignIn
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
