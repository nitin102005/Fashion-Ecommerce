import React, { useContext, useRef } from 'react';

import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import Btn from "../assets/Btn.json";
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import Navbar from "./navbar";
import { getFilteredProducts } from '../utils/filterProducts';
import getDisplayTitle from '../utils/getDisplayTitle';




const ProductDetails = () => {
    const { products } = useContext(ProductContext);
    const filteredProducts = getFilteredProducts(products);


    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const lottieRef = useRef();
    const similarLottieRefs = useRef({});
    const handleAddToCart = () => {
        addToCart(product);
        lottieRef.current?.play();
    };
    const handleAddSimilarProductToCart = (product, id) => {
        addToCart(product);
        similarLottieRefs.current[id]?.current?.play();
    };

    const { getProductById } = useContext(ProductContext);
    const product = getProductById(id);
    const productId = parseInt(id);

    let displayTitle = product.title;
    if (productId === 16) {
        displayTitle = "Hooded Jacket";
    } else if (productId === 17) {
        displayTitle = "Raincoat for Women";
    } else if (productId === 15) {
        displayTitle = "Women's Ski Coat";
    }
    else if (productId === 18) {
        displayTitle = "Women's Boat Neck Tee";
    }
    else if (productId === 1) {
        displayTitle = "SACK Laptop Backpack";
    }
    else if (productId === 20) {
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
    else if (productId === 5) {
        displayTitle = "Women's Bracelet";
    }
    else if (productId === 6) {
        displayTitle = "Silver Petite Ring";
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div id='homenav' className='bg-slate-300 p-8 h-screen'>
                <div className='bg-white rounded-2xl p-7 pl-8 h-[90vh] pr-8' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.3)' }}>
                    <div className='bg-gradient-to-b from-[#C4E1E6] to-[#eaf1f5] rounded-2xl p-4 pl-8 pr-8 h-[80vh]'>
                        <Navbar />
                        <div className='flex flex-row mt-4'>
                            <div className='h-[60vh] w-[656px] bg-white backdrop-blur-2xl mt-6 rounded-2xl flex items-start justify-centre ml-4 overflow-hidden' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)' }}>
                                <div className="container mx-auto px-4 py-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                                        {/* Product Image */}
                                        <div className="flex gap-14 ml-8 mt-5 ">
                                            <img
                                                src={product.image}
                                                alt={product.displaytitle}
                                                className="rounded-2xl p-10 h-[39vh] group-hover:scale-110 transition duration-300 border border-[#e4e4e4]"
                                            />

                                            {/* Product Info */}
                                            <div className="space-y-4 ">
                                                <h1 className="text-3xl font-bold w-[20vw]">{displayTitle}</h1>
                                                <></>
                                                <p className="text-2xl font-semibold">₹{Math.round(product.price * 83)}</p>
                                                <p className="text-gray-600">{product.description}</p>

                                                {/* Add to Cart Button */}
                                                <div className='overflow-hidden mb-2 h-[46px] w-[182px]'>
                                                    <button
                                                        className=" text-white object-cover scale-[2.1] cursor-pointer p-1 rounded-full z-50 relative bottom-6 "
                                                        onClick={handleAddToCart}
                                                    > <Lottie
                                                            lottieRef={lottieRef}
                                                            loop={false}
                                                            autoplay={false}
                                                            animationData={Btn} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Similar Products Section */}

                                </div>
                            </div>
                            <div className='h-[60vh] w-[650px] bg-white backdrop-blur-2xl mt-6 rounded-2xl flex ml-4 overflow-hidden' style={{ boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.2)' }}>
                                <div className="mt-5 ml-4">
                                    <h2 className="text-2xl font-bold">You May also Like this :</h2>
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-6 mt-2 ml-2 overflow-y-auto overflow-x-hidden w-[37vw] h-[50vh] p-2">
                                        {filteredProducts.map((similarProduct) => {
                                            const displayTitle = getDisplayTitle(similarProduct);
                                            if (!similarLottieRefs.current[similarProduct.id]) {
                                                similarLottieRefs.current[similarProduct.id] = React.createRef();
                                            }

                                            return (
                                                <div
                                                    key={similarProduct.id}
                                                    className="border border-[#e4e4e4] flex items-center gap-4 p-4 h-[25vh]"
                                                >
                                                    <img
                                                        src={similarProduct.image}
                                                        alt={displayTitle}
                                                        className="h-[80%] object-contain rounded-2xl p-2 border border-[#e4e4e4]"
                                                    />
                                                    <div>
                                                        <div>{displayTitle}</div>
                                                        <p className="font-semibold">₹{Math.round(similarProduct.price * 83)}</p>
                                                        <div className='overflow-hidden mt-2 h-[36px] w-[110px] rounded-2xl'>
                                                            <button
                                                                className=" text-white object-cover scale-[2.0] cursor-pointer p-1 rounded-full z-50 relative bottom-3 "
                                                                onClick={() => handleAddSimilarProductToCart(similarProduct, similarProduct.id)}
                                                            > <Lottie
                                                                    lottieRef={similarLottieRefs.current[similarProduct.id]}
                                                                    loop={false}
                                                                    autoplay={false}
                                                                    animationData={Btn} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default ProductDetails;
