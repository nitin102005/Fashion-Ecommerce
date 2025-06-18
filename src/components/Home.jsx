import React, { useContext } from 'react'
import '../App.css'
import '../index.css'
import Navbar from './Navbar'
import model2 from '../assets/model2.png'
import model4 from '../assets/model4.jpg'
// import poster1 from '../assets/poster1.png'
// import poster2 from '../assets/poster2.png'
// import poster3 from '../assets/poster3.png'
// import poster4 from '../assets/poster4.png'
// import poster5 from '../assets/poster5.png'
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
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  };

  //Get products from context
  const { products } = useContext(ProductContext)
  // console.log(products)
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"

  })
  console.log(filteredProducts)




  return (

    <div id='homenav' className='bg-slate-300 p-8 h-[600vh]'>
      <div className='bg-white rounded-2xl p-7 pl-8 pr-8 h-[vh]' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.3)' }}>
        <div className='bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] rounded-2xl p-4 pl-8 pr-8 h-[585vh]'>
          <Navbar />
          <div className='h-[70vh] w-[1286px] bg-white backdrop-blur-2xl mt-6 rounded-2xl flex items-start justify-end ml-4 overflow-hidden' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)' }}>
            <img src={model4} alt="men Fashion" className='h-[98vh] relative bottom-7 left-98' style={{ filter: "drop-shadow(0 0 12px 0)" }} />
            <h1 className='bg-[#000000e4]  text-white text-[58px] p-2 relative top-10 left-83 whitespace-pre rounded-[9px] text-center '> Elevate Your Fits <br/> Define Your Vibe.. </h1>
            <p className='relative right-20 top-60 text-[20px] whitespace-nowrap' >Where minimal meets meaningful.</p>
            <div className='absolute h-[40vh] w-[290px] left-[470px] top-[295px] mx-auto z-50'>

              <Slider {...settingsposter}>
                <div>
                  <h3 className='text-[18px] bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] p-4 rounded-2xl text-sm font-medium Mona-Sans'>“Style is a way to say who you are without speaking.” <br /> – Rachel Zoe</h3>
                </div>
                <div>
                  <h3 className='text-[18px] bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] p-4 rounded-2xl text-sm font-medium Mona-Sans'>“Minimal isn’t basic — it’s bold.” <br /> – Barefit Philosophy</h3>
                </div>
                <div>
                  <h3 className='text-[18px] bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] p-4 rounded-2xl text-sm font-medium Mona-Sans'>“Dress how you want to be remembered.” <br />– Anonymous</h3>
                </div>
                <div>
                  <h3 className='text-[18px] bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] p-4 rounded-2xl text-sm font-medium Mona-Sans'>“Confidence is the best outfit. Rock it and own it.” <br /> – Unknown</h3>
                </div>
                <div>
                  <h3 className='text-[18px] bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] p-4 rounded-2xl text-sm font-medium Mona-Sans'>“In a world full of trends, remain timeless.”<br /> – Imaan Hammam</h3>
                </div>

              </Slider>
              <button className='bg-black text-white w-[170px] h-10 text-2xl left-[58px] absolute bottom-[100px] cursor-pointer rounded-2xl' onClick={()=>{
            document.getElementById("trendnav")?.scrollIntoView({behavior: "smooth"})
          }}>Explore Now</button>
            </div>

            <img src={model2} alt="men Fashion" className='h-[88vh] relative bottom-15' style={{ filter: "drop-shadow(0 0 12px 0)" }} />


          </div>

          {/* TRENDING SECTION */}
          <div className='mx-4 '>
            <h1 id='trendnav' className='text-[25px] p-3 mt-5'>TRENDING</h1>
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
