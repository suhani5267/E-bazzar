import React, { useContext } from "react";
import MyContext from "../../context/Data/Context";
import { FaSearch } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
function Filter() {
  const context = useContext(MyContext);
  const {
    mode,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = context;
  return (
    <div>
      <div className="container mx-auto px-5 mt-5">
        <div
          className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
          style={{
            backgroundColor: mode === "dark" ? "#282C34" : "",
            color: mode === "dark" ? "#ADBEE0" : "",
          }}
        >
          <div className="relative ">
            <div className="absolute flex items-center ml-2 h-full">
              <FaSearch className="w-4 h-4 text-primary-dark" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Here ..."
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 67 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
              required
              value={searchkey}
              onChange={(e) => setSearchkey(e.target.value)}
            ></input>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filter</p>
            <button
              class=" hover:bg-blue-700 text-gary-800 font-bold py-2 px-4 rounded font-medium"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Reste
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              {" "}
              <option value="All">Select Category</option>
              {product.map((items, i) => (
                <option value={items.category}>{items.category}</option>
              ))}
            </select>
            <select
              className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              style={{
                backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "",
                color: mode === "dark" ? "white" : "",
              }}
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
            >
              <option value="Any Price">Any Price</option>
              {product.map((items, i) => (
                <option value={items.price}>{items.price}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
