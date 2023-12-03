import React, { useContext } from "react";
import Layout from "../../../Component/layout/Layout";
import { FaUserAlt } from "react-icons/fa";
import MyContext from "../../../context/Data/Context";
import DashboardTab from "./DashboardTabs";

function Dashboard() {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <Layout>
      <div className="text-gray-200 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            {/* first box */}
            <div className="md:w-1/4 sm:w-1/2 w-full p-4">
              <div
                className="border-2 hover:shadow-purple-600  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 py-4 px-4 broder-gray-100 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-200 w-12 h-12 mb-3  inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserAlt
                    size={50}
                    fill={mode === "light" ? "purple" : "white"}
                  />
                </div>

                <h1
                  className="font-bold text-4xl text-black "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h1>
                <p className="text-purple-500 font-bold">Total Price</p>
              </div>
            </div>
            {/* second box */}
            <div className="md:w-1/4 sm:w-1/2 w-full p-4">
              <div
                className="border-2 hover:shadow-purple-600  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 py-4 px-4 broder-gray-100 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-200 w-12 h-12 mb-3  inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserAlt
                    size={50}
                    fill={mode === "light" ? "purple" : "white"}
                  />
                </div>

                <h1
                  className="font-bold text-4xl text-black "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h1>
                <p className="text-purple-500 font-bold">Total Order</p>
              </div>
            </div>
            {/* third box */}
            <div className="md:w-1/4 sm:w-1/2 w-full p-4">
              <div
                className="border-2 hover:shadow-purple-600  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 py-4 px-4 broder-gray-100 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-200 w-12 h-12 mb-3  inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserAlt
                    size={50}
                    fill={mode === "light" ? "purple" : "white"}
                  />
                </div>

                <h1
                  className="font-bold text-4xl text-black "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h1>
                <p className="text-purple-500 font-bold">Total User</p>
              </div>
            </div>
            {/* fourth box */}
            <div className="md:w-1/4 sm:w-1/2 w-full p-4">
              <div
                className="border-2 hover:shadow-purple-600  shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 py-4 px-4 broder-gray-100 rounded-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-purple-200 w-12 h-12 mb-3  inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserAlt
                    size={50}
                    fill={mode === "light" ? "purple" : "white"}
                  />
                </div>

                <h1
                  className="font-bold text-4xl text-black "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  10
                </h1>
                <p className="text-purple-500 font-bold">Total Product</p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </div>
    </Layout>
  );
}

export default Dashboard;
