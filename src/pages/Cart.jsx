import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "./../assets/cart_img.jpg";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.product.productData);
  // console.log(productData);
  const userInfo = useSelector((state) => state.product.userInfo);
  const [totalAmount, setTotalAmount] = useState(0);
  const [payout, setPayout] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      setTotalAmount(price.toFixed(2));
      return price;
      // setTotalAmount(price.toFixed(2));
    });
  }, [productData]);
  const handleCheckout = () => {
    if (userInfo) {
      setPayout(true);
    } else {
      toast.error("Please Sign in to checkout");
    }
  };
  return (
    <div>
      <img className="w-full h-60 object-cover" src={Image} alt="Cart Image" />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-4 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="font-medium text-2xl">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              Sub Total{" "}
              <span className="font-bold text-lg">$ {totalAmount}</span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                voluptate.
              </span>
            </p>
          </div>
          <p className="font-semibold flex justify-between mt-6 mb-3">
            Totle Amount{" "}
            <span className="text-xl font-bold">$ {totalAmount}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="text-base text-white bg-black w-full py-3 hover:bg-gray-800 duration-300"
          >
            Procced to checkout
          </button>
          {payout && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_live_51JQxiOBeUmTFUfodVaNJM7CXDcS1YaSpNKa6Si1Fqhh4Ubg5Bg6isSSuQkKbq9YvSYrffGrcBqmrdnKZIh1IEzXk00slqpHJdZ"
                name="E_Store "
                amount={totalAmount * 100}
                label="Pay to E_Store"
                description={`Your Payment amount is ${totalAmount}`}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
