import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";
import { ToastContainer, toast } from "react-toastify";
const Product = () => {
  let [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, [details]);
  console.log(details);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-12">
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src={details.image}
            alt="productImg"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h1 className="font-bold text-3xl">{details.title}</h1>
          </div>
          <div>
            <p className="font-semibold text-xl">$ {details.price}</p>
          </div>
          <div className="flex items-center gap-3 text-base">
            <div className="flex font-light">
              <MdStarBorder color="tomato" fontSize={25} />
              <MdStarBorder color="tomato" fontSize={25} />
              <MdStarBorder color="tomato" fontSize={25} />
              <MdStarBorder color="tomato" fontSize={25} />
              <MdStarBorder color="tomato" fontSize={25} />
            </div>
            <p>(2 Customers Reviews)</p>
          </div>
          <p className="">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex justify-between items-center text-gray-500 border p-3 ps-2">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm ">
                <button
                  onClick={() => setQty(qty === 1 ? (qty = 1) : qty - 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 py-3 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >  
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: qty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added Cart`)
              }
              className="bg-black text-white p-3 active:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
          <p className="text-base">
            {" "}
            Category:
            <span className="text-base capitalize">
              {" "}
              {details.category}
            </span>{" "}
          </p>
        </div>
      </div>
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

export default Product;
