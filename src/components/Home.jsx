import React, { useContext } from 'react'
import '../App.css'
import '../index.css'
import Navbar from './Navbar'
import model12 from '../assets/model12.png'
import model14 from '../assets/model14.jpg'
import { ProductContext } from '../context/ProductContext'
import Product from './Product'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from './Section'
import Slider from "react-slick";




const Home = () => {

  var settingsposter = {
    dots: true,            // show dots
    infinite: true,        // loop slides infinitely
    speed: 400,            // transition speed in ms
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // enable auto sliding
    autoplaySpeed: 4000,   // slide every 3000ms
    arrows: false,         // remove prev/next buttons
    swipe: true,           // allow swipe on touch devices
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // below 1024px (tablets)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // below 768px (mobile landscape)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // below 480px (mobile portrait)
        settings: {
          slidesToShow: 2,  // changed from 1 to 2
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  //Get products from context
  const { products } = useContext(ProductContext)
  // console.log(products)
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"

  })
  console.log(filteredProducts)




  return (

    <div id='homenav' className='bg-slate-300 lg:p-8 h-full'>
      <div className='bg-white rounded-2xl p-4 sm:p-19 md:p-6 lg:p-7 ' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.3)' }}>
        {/* <div className='bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] rounded-2xl p-4 pl-8 pr-8 h-[585vh]'> */}
        <div className="bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] sm:pl-1.5 sm:pr-1.5 rounded-2xl p-6 lg:pl-12 lg:pr-12 min-h-screen">

          <Navbar />
          <div className='min-h-[170px] sm:min-h-[508px]  bg-white backdrop-blur-2xl mt-6 rounded-2xl pl-0 pr-0 flex overflow-hidden gap-6 items-center' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)' }}>

            {/* image  */}
            <div className='p-0 invisible sm:visible'>

              <img src={model14} alt="men Fashion" className='max-h-[105vh] sm:max-h-[90vh] z-50 mt-7 mr-3 object-contain' style={{ filter: "drop-shadow(0 0 12px 0)" }} />
            </div>
            {/* Phone  */}
            <div className='p-0 sm:hidden '>

              <img src={model14} alt="men Fashion" className='h-[17vh] object-cover absolute  top-7 left-[-6px]' style={{ filter: "drop-shadow(0 0 12px 0)" }} />
            </div>
            {/* wrting section  */}
            <div className='max-h-[60vh] max-w-[30vw] flex flex-col justify-center items-center '>
              <div className='hidden sm:block'>
                <h1 className='bg-[#000000e4] text-white text-[17px] leading-tight sm:text-[58px] sm:leading-snug p-2 whitespace-pre rounded-[9px] text-center'> Elevate Your Fits  <br />Define Your Vibe..</h1>


                <p className='text-center text-[14px] sm:text-[20px] whitespace-nowrap mt-3'>
                  Where minimal meets meaningful.
                </p>
              </div>
              {/* For Phones  */}
              <div className=' sm:hidden w-[34vw] z-30 overflow-hidden mb-16 ml-2'>
                <h1 className='bg-[#000000e4] text-white text-[14px] p-1 rounded-[9px] text-center'> Elevate Your Fits  <br />Define Your Vibe..</h1>


                <p className='text-center text-[8px] whitespace-nowrap mt-1'>
                  Where minimal meets meaningful.
                </p>
              </div>


              {/* slider  */}
              <div className='w-[200px] sm:w-[490px] sm:max-w-2xl hidden sm:block px-2 py-4 sm:px-4 sm:py-4 h-auto'>
                <Slider {...settingsposter}>
                  {[
                    "“Style is a way to say who you are without speaking.” – Rachel Zoe",
                    "“Minimal isn’t basic — it’s bold.” – Barefit Philosophy",
                    "“Dress how you want to be remembered.” – Anonymous",
                    "“Confidence is the best outfit. Rock it and own it.” – Unknown",
                    "“In a world full of trends, remain timeless.” – Imaan Hammam",
                  ].map((quote, i) => (
                    <div key={i} className="px-2">
                      <h3 className='bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] p-3 sm:p-4 rounded-2xl text-[10px] sm:text-[16px] lg:text-[18px] Mona-Sans '>
                        {quote.split("–")[0]} <br />
                        <span className='font-semibold'>– {quote.split("–")[1]}</span>
                      </h3>
                    </div>
                  ))}
                </Slider>
              </div>

              <div className='mt-2'>
                <button
                  className='bg-black text-white hidden sm:block text-sm p-2 mt-1 cursor-pointer rounded-xl transition-all duration-200 hover:bg-gray-800'
                  onClick={() => {
                    document.getElementById("trendnav")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Now
                </button>

                {/* phones  */}
                <button
                  className='bg-black text-white sm:hidden text-[8px] p-1 mt-1 absolute bottom-14 right-32 cursor-pointer transition-all duration-200 hover:bg-gray-800'
                  onClick={() => {
                    document.getElementById("trendnav")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Now
                </button>
              </div>

            </div>

            {/* image  */}
            <div className='p-0 invisible sm:visible'>
              <img src={model12} alt="men Fashion" className='max-h-[95vh] sm:max-h-[88vh] ml-3.5 mt-10' style={{ filter: "drop-shadow(0 0 12px 0)" }} />
            </div>
            {/* phone  */}
            <div className='p-0 sm:hidden'>
              <img src={model12} alt="men Fashion" className='h-[16vh] object-cover absolute  top-9 right-[-6px]' style={{ filter: "drop-shadow(0 0 12px 0)" }} />
            </div>

          </div>

          {/* TRENDING SECTION */}
          <h1 className='text-sm sm:text-[25px] p-0 sm:p-5 mt-3 sm:mt-3'>TRENDING</h1>
<div className='p-0 sm:p-4 rounded-2xl'>

            <div className='p-5 rounded-2xl '>
              <Slider {...settings}>
                {filteredProducts.map((product) => {
                  return <Product product={product} key={product.id} />
                })}
              </Slider>
            </div>
          </div>
          <Section />

        </div>
      </div>

    </div>
  )
} 

export default Home
