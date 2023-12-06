import React, { useContext } from "react";
import MyContext from "../../../context/Data/Context";

function UpDateProduct() {
  const context = useContext(MyContext);
  const { products, setProducts, updateproduct } = context;
  return (
    <div className="flex justify-center items-center h-screen sm:w-full">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <h1 className="font-bold text-center text-2xl text-white mb-4">
          Update Product
        </h1>
        {/* ----------------------------Product Title Input------------------------------------------ */}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Product Title"
            value={products.title}
            onChange={(e) =>
              setProducts({ ...products, title: e.target.value })
            }
          ></input>
        </div>
        {/* ------------------------------------------Product Price------------------------------ */}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Product Price"
            value={products.price}
            onChange={(e) =>
              setProducts({ ...products, price: e.target.value })
            }
          ></input>
        </div>
        {/* --------------------------Image Url Input -------------------------------------------*/}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Image Url"
            value={products.imageurl}
            onChange={(e) =>
              setProducts({ ...products, imageurl: e.target.value })
            }
          ></input>
        </div>
        {/* ------------------------------------Product Category--------------------------- */}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Product Category"
            value={products.category}
            onChange={(e) =>
              setProducts({ ...products, category: e.target.value })
            }
          ></input>
        </div>
        {/* -----------------------------TextArea for Product Title------------------------- */}
        <div>
          <textarea
            id="title"
            rows="10"
            cols="30"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product Discription"
            value={products.discription}
            onChange={(e) =>
              setProducts({ ...products, discription: e.target.value })
            }
          ></textarea>
        </div>
        <div>
          <button
            class="bg-yellow-500  text-black font-bold py-2 px-2 rounded w-full "
            onClick={updateproduct}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpDateProduct;
