import React from "react";
// import { logo } from '../assets/index'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const productData = useSelector((state) => state.product.productData);
  // console.log(productData);
  const userInfo = useSelector((state) => state.product.userInfo);
  // console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-400 sticky">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          {/* <img src={logo} alt="Logo" className='h-[80px]' /> */}
          <Link>
            {" "}
            <h1 className="text-4xl font-bold">
              E-<span className="text-green-800">S</span>T
              <span className="text-yellow-800">OR</span>E
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-8 ">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-green-800 hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-green-800 hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-green-800 hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-green-800 hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300">
              Elements
            </li>
            <li className="text-base text-black font-bold hover:text-green-800 hover:underline underline-offset-2 decoration-[2px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to={"/cart"}>
            <div className="relative">
              {/* React Cart Icons */}
              <AiOutlineShoppingCart className="text-2xl" />
              <span className="absolute w-6 top-[-20px] left-3 text-bold text-xl flex items-center justify-center">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to={"/login"}>
            <img
              width="32"
              height="32"
              className="rounded-md"
              src={
                userInfo
                  ? userInfo.image
                  : "https://img.icons8.com/windows/32/user.png"
              }
              alt="userIMage"
            />
          </Link>
          {userInfo && <p>{userInfo.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
