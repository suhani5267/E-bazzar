import React, { useContext } from "react";
import Layout from "../../Component/layout/Layout";
import Hero from "../../Component/Hero/Hero";
import Filter from "../../Component/Filter/Filter";
import Product from "../../Component/product/Product";
import Track from "../../Component/Track/Track";
import Testinomial from "../../Component/Testinomail/Testinomial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/CreateSlice";

function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);

  const addCart = () => {
    dispatch(addToCart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };
  return (
    <Layout>
      <div className="flex justify-center items-center gap-[1rem]">
        <button className="px-2 py-2 bg-gray-500" onClick={() => addCart()}>
          Add
        </button>
        <button className="px-2 py-2 bg-gray-500" onClick={() => deleteCart()}>
          remove
        </button>
      </div>
      <Hero />
      <Filter />
      <Product />
      <Track />
      <Testinomial />
    </Layout>
  );
}

export default Home;
