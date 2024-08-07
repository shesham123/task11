/* eslint-disable react/prop-types */
import ImageGallery from "react-image-gallery";
import Cart from "./Cart";
import useViewport from '../../hooks/useViewport';
import { useState } from "react";


const ProductPage = ({ isCartOpen, cart, hasCartItems, quantity, increaseQuantity, decreaseQuantity, addToCart, removeFromCart, productName, originalPrice, discount, finalPrice }) => {

    const screenWidth = useViewport()
    const breakpoint = 1024

    const images = [
        {
            original: "./images/image-product-1.jpg",
            originalAlt: "A sneaker upright and a sneaker flat down",
            thumbnail: "./images/image-product-1-thumbnail.jpg",
            thumbnailAlt: "A sneaker upright and a sneaker flat down",
        },
        {
            original: "./images/image-product-2.jpg",
            originalAlt: "A sneaker upright and a sneaker on pile of round stones with branch in front",
            thumbnail: "./images/image-product-2-thumbnail.jpg",
            thumbnailAlt: "A sneaker upright and a sneaker on pile of round stones with branch in front",
        },
        {
            original: "./images/image-product-3.jpg",
            originalAlt: "A sneaker on pile of round stones with paper folded between stones",
            thumbnail: "./images/image-product-3-thumbnail.jpg",
            thumbnailAlt: "A sneaker on pile of round stones with paper folded between stones",
        },
        {
            original: "./images/image-product-4.jpg",
            originalAlt: "A sneaker on pile of round stones",
            thumbnail: "./images/image-product-4-thumbnail.jpg",
            thumbnailAlt: "A sneaker on pile of round stones",
        },
    ]


    const [lightBoxDisplay, setLightBoxDisplay] = useState(false)


    const openLightBox = () => {
        if (screenWidth > breakpoint) {
            setLightBoxDisplay(true);
        }
    }

    return (
        <div className="lg:flex lg:m-20 lg:w-[80%] lg:gap-10">
            <div className="relative lg:basis-1/2">
                {

                    (isCartOpen && screenWidth < breakpoint) && <Cart cart={cart} hasCartItems={hasCartItems} removeFromCart={removeFromCart} />
                }
                {lightBoxDisplay &&
                    
                        <div className="bg-main-black/75 w-screen h-screen fixed top-0 left-0 z-10">
                            <div className="flex flex-col justify-center items-center h-full">
                                <div className="w-1/3 relative z-20">
                                <button onClick={() => setLightBoxDisplay(false)} className="cursor-pointer absolute right-0 -top-8"><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" className="fill-main-white hover:fill-main-orange"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" /></svg></button>
                                <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showThumbnails={true} showNav={true} onClick={openLightBox} />
                                </div>
                                </div>
                        </div>
                    
                }
                    
                    <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} showThumbnails={screenWidth > breakpoint ? true : false} showNav={screenWidth < breakpoint ? true : false} onClick={openLightBox} />
            </div>
            <div className="flex flex-col m-5 gap-2 lg:basis-1/2 lg:m-8 lg:px-8">
                <h1 className="text-main-orange uppercase font-bold text-sm tracking-widest">Sneaker Company</h1>
                <h2 className="font-bold text-3xl lg:text-5xl">{productName}</h2>
                <p className="text-dark-grayish-blue my-2">These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <div className="flex justify-between items-center my-2 lg:flex-col lg:items-start">
                    <div className="flex gap-4 items-center">
                        <p className="font-bold text-3xl">${finalPrice.toFixed(2)}</p>
                        <p className="font-bold text-main-orange rounded-lg py-1 px-2 bg-pale-orange">{discount * 100}%</p>
                    </div>
                    <p className="font-bold text-grayish-blue line-through">${originalPrice.toFixed(2)}</p>
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <div className="flex justify-between items-center bg-light-grayish-blue p-4 px-6 rounded-lg lg:basis-[40%]">
                        <button className="hover:opacity-70" aria-label="Decrease quantity" onClick={decreaseQuantity}><img src="./images/icon-minus.svg" alt="minus-icon" /></button>
                        <p className="font-bold">{quantity}</p>
                        <button className="hover:opacity-70" aria-label="Increase quantity" onClick={increaseQuantity}><img src="./images/icon-plus.svg" alt="plus-icon" /></button>
                    </div>
                    <button onClick={addToCart} className="flex justify-center items-center bg-main-orange rounded-lg p-4 text-main-white font-bold gap-4 lg:basis-[60%] hover:opacity-70"><svg width="20" height="18" className="fill-main-white" viewBox="0 0 22 22"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" /></svg>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;