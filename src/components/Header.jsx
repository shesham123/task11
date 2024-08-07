/* eslint-disable react/prop-types */
import NavBar from './NavBar';
import useViewport from '../../hooks/useViewport';
import Cart from './Cart';

const Header = ({ openCart, hasCartItems, cart, isCartOpen, removeFromCart }) => {

    const screenWidth = useViewport()
    const breakpoint = 1024


    return (
        <>
            <header className='flex relative items-center p-5 justify-between lg:p-0 lg:mx-24 lg:py-8 lg:border-b-2'>
                <span className='flex ml-10 lg:ml-0 lg:gap-16'>
                    <img className='w-36' src='./images/logo.svg' />
                    <NavBar />
                </span>
                {

                    (isCartOpen && screenWidth >= breakpoint) && <Cart cart={cart} hasCartItems={hasCartItems} removeFromCart={removeFromCart} />
                }
                <span className='flex items-center lg:justify-end lg:gap-8'>
                    <div className='flex relative mr-6'>
                        {hasCartItems && <p className='bg-main-orange rounded-lg text-main-white text-center absolute left-3 bottom-3 text-xs px-1.5'>{cart.quantity}</p>}
                        <button aria-label='shopping cart' onClick={openCart}><svg width="22" height="20" className="fill-main-black"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" /></svg></button>

                    </div>
                    <img className='w-6 lg:w-12 border-2 border-transparent hover:border-main-orange hover:border-solid hover:border-2 hover:rounded-full hover:cursor-pointer' src='./images/image-avatar.png' alt='profile picture' />
                </span>
            </header>
        </>
    );
}

export default Header;