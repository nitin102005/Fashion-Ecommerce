import React,{useContext,useRef} from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Btn from "../assets/Btn.json"
import { FaEye } from "react-icons/fa";  

const Product = ({product}) => {
  const lottieRef = useRef();
  const handleClick = () => {
    // Play the animation once on click
    lottieRef.current?.goToAndPlay(0, true);
    addToCart(product);
  };

    // console.log(product)
    const {id, image ,category, title, price} = product;
    const { addToCart } = useContext(CartContext); 
    let displayTitle = title;
  if (id === 16) {
    displayTitle = "Hooded Jacket";
  } else if (id === 17) {
    displayTitle = "Raincoat for Women";
  }else if (id === 15) {
    displayTitle = "Women's Ski Coat";
  }
  else if (id === 18) {
    displayTitle = "Women's Boat Neck";
  }
  else if (id === 1) {
    displayTitle = "SACK Laptop Backpack";
  }
  else if (id === 20) {
    displayTitle = "DANV Short Sleeve Tee";
  }
  else if (id === 19) {
    displayTitle = "Opna Short Sleeve T-Shirt";
  }
  else if (id === 2) {
    displayTitle = "Men Casual T-Shirt";
  }
  else if (id === 8) {
    displayTitle = "Pierced Owl Rose Gold Studs";
  }
  else if (id === 5) {
    displayTitle = "Women's Bracelet";
  }
  else if (id === 6) {
    displayTitle = "Silver Petite Ring";
  }
  return (
    <>
    
    <div className='px-0 mx-1 sm:mx-0 sm:px-0'>
      <div className='h-[35vh] sm:h-[60vh] hidden sm:block w-[20vw] rounded-[10px] overflow-hidden bg-white '>
        <div className='p-1 sm:p-5 bg-white rounded-2xl flex items-center justify-center ' >
        <Link to={`/product/${id}`}>
          <FaEye className="text-2xl cursor-pointer z-50 hover:text-blue-600 transition-colors duration-300" />
        </Link>
            <img className='rounded-2xl p-10 h-[17vh] sm:h-[39vh] group-hover:scale-110 transition duration-300 border border-[#e4e4e4]' src={image} alt="" />
        </div>
        <div className='p-10 pt-0 flex row space-x-7'>
            <div className='' >{displayTitle}</div>
            <div className='bg-black rounded-2xl text-white p-2 h-[36px] ml-8'>₹{Math.round(price * 83)}</div>
        </div>
        <div className='h-[46px] w-[190px] overflow-hidden rounded-4xl ml-13 relative bottom-[35px]'>
        <button className='relative object-cover scale-[1.9] bottom-[20px] p-[0px] cursor-pointer' onClick={handleClick}>
      <Lottie
      loop={false}
      autoplay={false}
      lottieRef={lottieRef}
      animationData={Btn}/></button>
          
          
        </div>
      </div>

      {/* Phone  */}
      <div className='h-[35vh] sm:hidden w-[38vw] rounded-[10px] flex flex-col items-center overflow-hidden p-3 bg-white '>
        <div className='p-1 bg-white rounded-2xl h-[17vh] flex items-center justify-center ' >
        <Link to={`/product/${id}`}>
          <FaEye className="text-2xl cursor-pointer absolute top-0 z-50 hover:text-blue-600 transition-colors duration-300" />
        </Link>
            <img className='rounded-2xl p-7 group-hover:scale-110 transition duration-300 border border-[#e4e4e4]' src={image} alt="" />
        </div>
        <div className=' pt-0 flex absolute bottom-[50px] flex-col'>
            <div className='bg-black text-white absolute bottom-[64px] left-0 whitespace-pre'> ₹{Math.round(price * 83)} </div>
            <div className='w-[27vw] p-1 bottom-1 relative flex justify-center items-center' >{displayTitle}</div>
        </div>
        <div className='h-[26px] w-[150px] overflow-hidden rounded-4xl relative left-4 top-[92px]'>
        <button className='relative object-cover scale-[1.5] bottom-[25px] right-[16px] p-[0px] cursor-pointer' onClick={handleClick}>
      <Lottie
      loop={false}
      autoplay={false}
      lottieRef={lottieRef}
      animationData={Btn}/></button>
          
          
        </div>
      </div>
    </div>

    </>
  )
}

export default Product
