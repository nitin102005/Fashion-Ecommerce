import React, { useEffect, useState, useRef, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import Btn from "../assets/Btn.json";
import { CartContext } from "../context/CartContext";

function ShoeSection() {
  const { addToCart } = useContext(CartContext);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const [menRes, womenRes] = await Promise.all([
          fetch("https://dummyjson.com/products/category/mens-shoes"),
          fetch("https://dummyjson.com/products/category/womens-shoes"),
        ]);

        const menData = await menRes.json();
        const womenData = await womenRes.json();

        const combinedShoes = [...menData.products, ...womenData.products];
        setShoes(combinedShoes);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes();
  }, []);

  const settings = {
    accessibility: true,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mensShoes = shoes.filter((item) => item.category === "mens-shoes");
  const womenShoes = shoes.filter((item) => item.category === "womens-shoes");

  // 🆕 Create dynamic refs
  const lottieRefs = useRef({});
  const [animationKeys, setAnimationKeys] = useState({});


  const handleAddToCart = (shoe) => {
    if (lottieRefs.current[shoe.id]) {
      lottieRefs.current[shoe.id].goToAndPlay(0, true);
    }
    const cartItem = {
      ...shoe,
      image: shoe.thumbnail,
      title: shoe.title
    };
    addToCart(cartItem);
  };

  return (
    <>
      <h1 id="snav" className="mx-4 text-[25px] p-3 mt-5">
        MEN'S FOOTWEAR
      </h1>
      <div className="gap-6 p-4 h-[50vh]">
        <Slider {...settings}>
          {mensShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="p-4 bg-white rounded-lg shadow hover:shadow-md transition h-[45vh] mx-2 flex flex-col justify-between"
            >
              <div>
                <img
                  src={shoe.thumbnail}
                  alt={shoe.title}
                  className="w-full h-48 object-cover rounded border border-[#e4e4e4] p-2"
                />
              </div>
              <div className="flex">
                <h2
                  className="text-lg mt-2"
                  style={{ maxWidth: "140px", lineHeight: "1.4" }}
                >
                  {shoe.title}
                </h2>
                <p className="ml-auto mt-2 bg-black text-white h-7 rounded-2xl px-3 text-center">
                  ₹{Math.round(shoe.price * 83)}
                </p>
              </div>
              <div className="h-[46px] w-[190px] overflow-hidden rounded-4xl ml-13 mt-1">
              <button
              
                className="relative object-cover scale-[1.9] bottom-[20px] p-[0px] cursor-pointer"
                onClick={() => {
                  handleAddToCart(shoe);
                  setAnimationKeys((prev) => ({
                    ...prev,
                    [shoe.id]: Date.now(), // force re-render with new key
                  }));
                }}
              >
                <Lottie
                  key={animationKeys[shoe.id]} // unique key to restart animation
                  animationData={Btn}
                  loop={false}
                  autoplay={true}
                  className="h-full w-full"
                />
              </button>
              </div>

            </div>
          ))}
        </Slider>
      </div>

      <h1 id="wnav" className="mx-4 text-[25px] p-3">WOMEN'S FOOTWEAR</h1>
      <div className="gap-6 p-4 h-[50vh]">
        <Slider {...settings}>
          {womenShoes.map((shoe) => {
            const displayTitle =
              shoe.id === 188
                ? "Pampi Black Shoes"
                : shoe.id === 189
                  ? "Calvin Klein Red Shoes"
                  : shoe.title;

            return (
              <div
                key={shoe.id}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition h-[45vh] mx-2 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={shoe.thumbnail}
                    alt={displayTitle}
                    className="w-full h-48 object-cover rounded border border-[#e4e4e4] p-2"
                  />
                </div>
                <div className="flex">
                  <h2
                    className="text-lg mt-2"
                    style={{ maxWidth: "140px", lineHeight: "1.4" }}
                  >
                    {displayTitle}
                  </h2>
                  <p className="ml-auto mt-2 bg-black text-white h-7 rounded-2xl px-3 text-center">
                    ₹{Math.round(shoe.price * 83)}
                  </p>
                </div>
                <div className="h-[46px] w-[190px] overflow-hidden rounded-4xl ml-13 mt-1">
                <button
                  className="relative object-cover scale-[1.9] bottom-[20px] p-[0px] cursor-pointer"
                  onClick={() => {
                    handleAddToCart(shoe);
                    setAnimationKeys((prev) => ({
                      ...prev,
                      [shoe.id]: Date.now(), // force re-render with new key
                    }));
                  }}
                >
                  <Lottie
                    key={animationKeys[shoe.id]} // unique key to restart animation
                    animationData={Btn}
                    loop={false}
                    autoplay={true}
                    className="h-full w-full"
                  />
                </button>
                </div>

              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default ShoeSection;