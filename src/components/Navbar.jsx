import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';
import { Link } from 'react-router-dom'; // Add this import


const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
    <div className="lg:max-w-7xl mx-auto sm:max-w-[300px] flex items-center justify-between">
        
        {/* Left Side */}
        <div className="w-[100px] h-[220px] bg-white text-black font-semibold text-[10px] flex items-center justify-center text-center clip-custom-v shadow-md absolute sm:hidden top-[-179px] left-1/2 transform -translate-x-1/2 md:left-[560px] md:translate-x-0">
  <h1 className="texts top-0 z-10">BAREFIT</h1>
</div>
        <div className="flex gap-x-2 sm:gap-x-1 lg:gap-x-4 text-[10px] sm:text-[8px] md:text-sm font-medium text-black Mona-Sans">
          <Link to="/" className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>SHOP</Link>
          <a href="#mennav"className='relative pb-1 hidden sm:inline-block border-b-2 border-transparent hover:border-black transition-all duration-200'>MEN</a>
          <a href="#womennav"className='relative pb-1 hidden sm:inline-block border-b-2 border-transparent hover:border-black transition-all duration-200'>WOMEN</a>
          <a href="#trendnav"className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>TRENDING</a>
        </div>

        <div className="lg:w-[90%] lg:max-w-[300px] h-[250px] bg-white text-black font-semibold lg:text-2xl sm:text-[10px] flex items-center justify-center text-center clip-custom-v shadow-md absolute top-[-60px] sm:top-[-140px] left-1/2 transform -translate-x-1/2 md:left-[560px] md:translate-x-0">
  <h1 className="texts top-0 z-10">BAREFIT</h1>
</div>






        {/* Right Side */}
        <div className="flex gap-x-2 sm:gap-x-1 lg:gap-x-4 text-[10px] sm:text-[8px] md:text-sm font-medium text-black items-center Mona-Sans">
          <div></div>
          <a href="#snav" className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200' >FOOTWEAR</a>
          <a href="#anav" className='relative pb-1 border-b-2 border-transparent hover:border-black transition-all duration-200'>ACCESSORIES</a>
         <button className="px-2 py-0.5 sm:px-4 sm:py-1 text-xs sm:text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-all">
  SIGN IN/UP
</button>

          <div className=" w-7 h-7 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer " onClick={() => setCartOpen(true)}><FaShoppingCart className="text-xl hover:scale-105 transition-transform duration-300" /> </div> 
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
