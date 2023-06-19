import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slice";
import { ToastContainer, toast } from "react-toastify";
const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("_");
  };
  const rootId = idString(_id);
  // console.log(rootId);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  // console.log(handleDetails);
  return (
    <div className="group">
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold ">
              {product.title.substring(0, 10)}
            </h2>
          </div>
          <div className="flex gap-2 relative w-[90px] text-sm overflow-hidden">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 ">
              {/* <p className="text-base font-semibold">$ {product.price}</p> */}
              <p className="text-base font-semibold">$ {product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added Cart`)
              }
              className="absolute text-base font-semibold z-20 w-[100px] hover:text-gray-600 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-[0px] transition-transform cursor-pointer duration-500 "
            >
              Add to Cart <span>{/* <AiOutlineArrowRight /> */}</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-base font-semibold">{product.category}</p>
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

export default ProductCart;
