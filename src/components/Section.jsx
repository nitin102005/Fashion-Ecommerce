import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';
import { ProductContext } from '../context/ProductContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoeSection from './ShoeSection';
import poster1 from '../assets/poster1.png'
import poster2 from '../assets/poster2.png'
import poster3 from '../assets/poster3.png'
import poster4 from '../assets/poster4.png'
import poster5 from '../assets/poster5.png'

// import Add from './Add';

function Section() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.13,
          slidesToScroll: 1

        }
      }
    ]
  };

  // Get products from context
  const { products } = useContext(ProductContext);

  const menProducts = products.filter(item => {
    return item.category === "men's clothing"
  })
  const womenProducts = products.filter(item => {
    return item.category === "women's clothing"
  })
  const AccesoriesProducts = products.filter(item => {
    return item.category === "jewelery"
  })

  return (

    <>
      {/* // MENS SECTION */}
      <div className='mx-4 '>
        <h1 id='mennav' className='relative right-4 p-3 text-[25px] sm:p-5 mt-3 sm:mt-3'>MEN'S COLLECTION</h1>
        <div className='p-5 rounded-2xl'>

          <Slider {...settings}>
            {menProducts.map((product) => {
              return <Product product={product} key={product.id} />
            })}

          </Slider>
        </div>
      </div>

      {/* // Women SECTION */}
      <div className='mx-4 '>
        <h1 id='womennav' className='relative right-3 p-3 text-sm sm:text-[25px] sm:p-5 mt-3 sm:mt-3'>WOMEN'S COLLECTION</h1>
        <div className='p-5 rounded-2xl '>

          <Slider {...settings}>
            {womenProducts.map((product) => {
              return <Product product={product} key={product.id} />
            })}

          </Slider>
        </div>
      </div>
      {/* // ACCESSORIES */}
      <div className='mx-4 '>
        <h1 id='anav' className='text-sm sm:text-[25px] relative right-3 p-8 mt-5'>ACCESSORIES</h1>
        <div className='p-5 rounded-2xl '>

          <Slider {...settings}>
            {AccesoriesProducts.map((product) => {
              return <Product product={product} key={product.id} />
            })}

          </Slider>
        </div>
      </div>
      <ShoeSection />

      <div className='hidden sm:block'>
        <h1 className='text-sm sm:text-[25px] p-8 mt-[-15px]'>SHOP NOW</h1>
       <div className='mx-4 hidden sm:flex h-[50vh] gap-6'>
          <img src={poster1} alt="" />
          <img src={poster2} alt="" />
          <img src={poster3} alt="" />
          <img src={poster5} alt="" />
          <img src={poster4} alt="" />
        </div>
        {/* <div className='sm:hidden flex h-[11vh] mr-5 gap-1'>
          <img src={poster1} alt="" />
          <img src={poster2} alt="" />
          <img src={poster3} alt="" />
          <img src={poster5} alt="" />
          <img src={poster4} alt="" />
        </div> */}
        <div className='mx-4 hidden sm:flex gap-4 z-30 pointer-events-auto'>
          <button type="button" className='bg-white z-30 pointer-events-auto w-[370px] relative flex items-center justify-center cursor-pointer' onClick={()=>{
            document.getElementById("mennav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-black text-[#FADADD] flex items-center justify-center  relative left-[9px]  w-[369px] cursor-pointer' onClick={()=>{
            document.getElementById("womennav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-[#D4AF37] text-[#1C1C1C] flex items-center justify-center relative left-[18px] w-[373px] cursor-pointer' onClick={()=>{
            document.getElementById("anav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-[#1A1A1A] text-[#ECE6DA] flex items-center justify-center relative left-[27px] w-[369px] cursor-pointer' onClick={()=>{
            document.getElementById("snav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-[#3E1F47] text-[#EADCF8] flex items-center justify-center relative left-[36px] w-[369px] cursor-pointer' onClick={()=>{
            document.getElementById("wnav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
        </div>
        {/* <div className='mx-4 flex sm:hidden gap-4 z-30 pointer-events-auto'>
          <button type="button" className='bg-white z-30 text-[7px] h-[17px] w-[220vw] right-[10px] justify-center p-0.5 relative flex cursor-pointer' onClick={()=>{
            document.getElementById("mennav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-black text-[#FADADD] text-[7px] h-[17px] w-[590px] right-[10px] justify-center p-0.5 relative flex  cursor-pointer' onClick={()=>{
            document.getElementById("womennav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-[#D4AF37] text-[#1C1C1C] text-[7px] h-[17px] w-[469px] right-[10px] justify-center p-0.5 relative flex  cursor-pointer' onClick={()=>{
            document.getElementById("anav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-[#1A1A1A] text-[#ECE6DA] text-[7px] h-[17px] w-[469px] right-[10px] justify-center p-0.5 relative flex  cursor-pointer' onClick={()=>{
            document.getElementById("snav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
          <button className='bg-[#3E1F47] text-[#EADCF8] text-[7px] h-[17px] w-[469px] right-[10px] justify-center p-0.5 relative flex  cursor-pointer' onClick={()=>{
            document.getElementById("wnav")?.scrollIntoView({behavior: "smooth"})
          }}>SHOP NOW</button>
        </div> */}
        

      </div>

    </>
  )
}

export default Section
