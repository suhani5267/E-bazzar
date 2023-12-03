import React from "react";

function AddPrduct() {
  return (
    <div className="flex justify-center items-center h-screen sm:w-full">
      <div className="bg-gray-800 px-10 py-10 rounded-xl">
        <h1 className="font-bold text-center text-2xl text-white mb-4">
          Add Product
        </h1>
        {/* ----------------------------Product Title Input------------------------------------------ */}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Product Title"
          ></input>
        </div>
        {/* ------------------------------------------Product Price------------------------------ */}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Product Price"
          ></input>
        </div>
        {/* --------------------------Image Url Input -------------------------------------------*/}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Image Url"
          ></input>
        </div>
        {/* ------------------------------------Product Category--------------------------- */}
        <div>
          <input
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            id="username"
            type="text"
            placeholder="Product Category"
          ></input>
        </div>
        {/* -----------------------------TextArea for Product Title------------------------- */}
        <div>
          <textarea
            id="title"
            rows="10"
            cols="30"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Product Title"
          ></textarea>
        </div>
        <div>
          <button class="bg-yellow-500  text-black font-bold py-2 px-2 rounded w-full ">
            Add product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPrduct;
