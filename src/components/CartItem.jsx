import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetItem,
} from "../redux/slice";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
const CartItem = () => {
  let [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.productData);
  console.log(productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div key={item._id} className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-3">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item._id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-gray-600 hover:text-red-800 cursor-pointer duration-300"
              />
              <img
                src={item.image}
                className="w-32 h-32 object-cover"
                alt="Product Cart Image"
              />
            </div>
            <h2 className="w-52">{item.title} </h2>
            <p className="w-10">{item.price} </p>

            <div className="w-52 flex justify-between items-center text-gray-500 border p-3 ps-2">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm ">
                <span
                  // onClick={() =>
                  //   dispatch(
                  //     decrementQuantity({
                  //       _id: item.id,
                  //       title: item.title,
                  //       image: item.image,
                  //       price: item.price,
                  //       quantity: 1,
                  //       description: item.description,
                  //     })
                  //   )
                  // }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  // onClick={() =>
                  //   dispatch(
                  //     incrementQuantity({
                  //       _id: item.id,
                  //       title: item.title,
                  //       image: item.image,
                  //       price: item.price,
                  //       quantity: 1,
                  //       description: item.description,
                  //     })
                  //   )
                  // }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-20">$ {item.quantity * item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetItem()) & toast.error("Your Cart is empty")
        }
        className="bg-red-500 text-white mt-8 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft />
          </span>
          go Shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose="2000"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
