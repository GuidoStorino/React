import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cart);
  const addItem = (item, quantity) => {
    setCart([...cart, { item, quantity }]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((re) => re.item.id !== itemId));

    console.log(`item removed using id  ${itemId}`);
  };
  const clear = () => {
    setCart([]);

    console.log("Your cart is empty");
  };

  const isInCart = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      return true;
    } else {
      return false;
    }
  };
  const Total = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].item.price * cart[i].quantity;
    }
    return total
  };
  useEffect(() => {
    setTotalPrice(Total());
    console.log(totalPrice)
  },[cart]);

  

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;