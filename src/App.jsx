import { useState, useEffect } from "react";
import Header from "./components/Header"
import ProductPage from "./components/ProductPage";


function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const openCart = () => {
    setIsCartOpen(prevCartState => !prevCartState)
  }
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [hasCartItems, setHasCartItems] = useState(JSON.parse(localStorage.getItem('cartState')) || false)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartState', JSON.stringify(hasCartItems));
  }, [cart, hasCartItems]);


  const productName = "Fall Limited Edition Sneakers"
    const originalPrice = 250
    let discount = 0.5
    const finalPrice = originalPrice * discount

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }


  const addToCart = () => {
    setCart({ productName, quantity, finalPrice: finalPrice })
    setHasCartItems(true)
  }

  const removeFromCart = () => {
    setCart([])
    setHasCartItems(false)
  }

  return (
    <>

      <Header openCart={openCart} hasCartItems={hasCartItems} cart={cart} isCartOpen={isCartOpen} removeFromCart={removeFromCart} />
      <main className="lg:flex lg:justify-center">
        <ProductPage isCartOpen={isCartOpen} cart={cart} hasCartItems={hasCartItems} quantity={quantity} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} addToCart={addToCart} removeFromCart={removeFromCart} productName={productName} originalPrice={originalPrice} discount={discount} finalPrice={finalPrice} />
      </main>
    </>
  )
}

export default App
