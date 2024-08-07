/* eslint-disable react/prop-types */

const Cart = ({ cart, hasCartItems,removeFromCart }) => {

    const total = cart.finalPrice * cart.quantity

    return (
        <>
            <div className="bg-main-white rounded-lg absolute z-50 left-2 top-2 right-2 bottom-7 shadow-2xl lg:top-20 lg:w-[28%] lg:left-[70%] lg:h-[16rem]">
                <h1 className="font-bold p-5">Cart</h1>
                <hr></hr>
                {hasCartItems ?
                    <div className="flex flex-col m-6 gap-7">
                        <div className="flex justify-between">
                            <img src="./images/image-product-1-thumbnail.jpg" className="rounded-md w-14 h-14" />
                            <div className="flex flex-col gap-1">
                                <p className="text-dark-grayish-blue">{cart.productName}</p>
                                <p className="text-dark-grayish-blue">${cart.finalPrice.toFixed(2)} x {cart.quantity} <span className="font-bold text-main-black">${total.toFixed(2)}</span></p>
                            </div>
                            <button onClick={removeFromCart} aria-label="Remove item"><img className="w-4" src="./images/icon-delete.svg" /></button>
                        </div>
                        <button className="rounded-lg bg-main-orange text-main-white p-4 font-bold">Checkout</button>
                    </div> :
                    <div className="flex justify-center items-center h-44">
                        <p className="text-dark-grayish-blue font-bold text-center">Your cart is empty.</p>
                    </div>
                }
            </div>
        </>
    )

}

export default Cart