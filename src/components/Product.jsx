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
    displayTitle = "Women's Boat Neck Tee";
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
    
    <div className='px-4'>
      <div className='h-[60vh] w-[20vw] rounded-[10px] overflow-hidden bg-white '>
        <div className='p-5 bg-white rounded-2xl flex items-center justify-center ' >
        <Link to={`/product/${id}`}>
          <FaEye className="text-2xl cursor-pointer z-50 hover:text-blue-600 transition-colors duration-300" />
        </Link>
            <img className='rounded-2xl p-10 h-[39vh] group-hover:scale-110 transition duration-300 border border-[#e4e4e4]' src={image} alt="" />
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
    </div>

    </>
  )
}

export default Product
