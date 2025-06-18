import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';
import { Link } from 'react-router-dom'; // Add this import


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side */}
        
        <div className="flex space-x-6 text-sm font-medium text-black Mona-Sans ">
          <Link to="/" className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>SHOP</Link>
          <a href="#mennav"className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>MEN</a>
          <a href="#womennav"className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>WOMEN</a>
          <a href="#trendnav"className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>TRENDING</a>
        </div>

        {/* Center Logo */}
        <div className="w-[300px] h-[250px] bg-white text-black font-semibold text-2xl flex items-center text-center justify-center clip-custom-v shadow-md 2 absolute top-[-140px] left-[560px]">
          <h1 className='texts top-0 z-10' >BAREFIT</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 text-sm font-medium text-black">
          <a href="#snav" className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200' >FOOTWEAR</a>
          <a href="#anav" className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>ACCESSORIES</a>
          <button className=" text-white bg-black px-4 py-1 rounded-full hover:bg-gray-800 transition-all">
            SIGN IN/UP
          </button>
          <div className=" w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer" onClick={() => setCartOpen(true)}><FaShoppingCart className="text-xl hover:scale-105 transition-transform duration-300" /> </div> 
        </div>
      </div>
      
      {/* Cart Sidebar Overlay */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-opacity-40 z-40" onClick={() => setCartOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ease-in-out">
            <button className="absolute top-4 right-4 text-2xl" onClick={() => setCartOpen(false)}>&times;</button>
            <Cart />
          </div>
        </>
      )}
    </>
  )
}
export default Navbar;