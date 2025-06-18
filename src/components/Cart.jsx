import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import Lottie from 'lottie-react';
import empty from "../assets/empty.json"
import { FaPlusCircle } from 'react-icons/fa';

import { FaMinusCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


const Cart = () => {
  const { cartItems , increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  console.log(cartItems);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + (item.price * 83 * (item.quantity || 1));
  }, 0);


  return (
    <>
      <div className='max-h-[85vh] overflow-y-auto overflow-x-hidden'>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className='h-[100vh] w-[40vw] '>
            <Lottie
              className='relative right-[190px] opacity-45'
              animationData={empty} />
          </div>
        ) : (
          <ul>
            {cartItems.map((item, idx) => {
              let displayTitle = item.title;

              if (item.id === 16) {
                displayTitle = "Hooded Jacket";
              } else if (item.id === 17) {
                displayTitle = "Raincoat for Women";
              } else if (item.id === 15) {
                displayTitle = "Women's Ski Coat";
              } else if (item.id === 18) {
                displayTitle = "Women's Boat Neck Tee";
              } else if (item.id === 1) {
                displayTitle = "SACK Laptop Backpack";
              } else if (item.id === 20) {
                displayTitle = "DANV Short Sleeve Tee";
              } else if (item.id === 19) {
                displayTitle = "Opna Short Sleeve T-Shirt";
              } else if (item.id === 2) {
                displayTitle = "Men Casual T-Shirt";
              } else if (item.id === 8) {
                displayTitle = "Pierced Owl Rose Gold Studs";
              } else if (item.id === 5) {
                displayTitle = "Women's Bracelet";
              } else if (item.id === 6) {
                displayTitle = "Silver Petite Ring";
              }

              return (
                <li key={idx}>
                  <div className='flex mt-5 border border-[#e4e4e4] h-fill p-4 object-fill rounded-2xl'>
                  <FaTimes className="text-xl cursor-pointer relative left-[233px] bottom-2 hover:text-red-500" onClick={() => removeFromCart(item.id)} />
                    <img src={item.image} alt={item.title} className='h-[21vh] border border-[#e4e4e4] p-3 rounded-2xl object-cover' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.1)'}} />
                    <div className='p-3 ml-2'>
                      <p><strong>{displayTitle}</strong></p>
                      <div className='flex flex-col mt-2 gap-y-3'>
                        <p className='flex gap-3'>< FaMinusCircle className='mt-0.5 text-[18px] cursor-pointer'
                        onClick={() => decreaseQuantity(item.id)}
                         />
                         {item.quantity || 1}
                         <FaPlusCircle 
                         onClick={() => increaseQuantity(item.id)}
                         className='mt-0.5 text-[18px] cursor-pointer' /></p>
                        <p>₹{Math.round(item.price * 83 * (item.quantity || 1))}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className='mt-2 '>
        <h1 className='text-semibold whitespace-pre font-semibold flex'>Total Amount: <p className='font-normal'>₹{Math.round(totalAmount)}</p></h1>
        <button className='bg-black text-white p-1.5 rounded-[30px] cursor-pointer mt-1.5'>Place Order</button>
        </div>
    </>
  )
}

export default Cart