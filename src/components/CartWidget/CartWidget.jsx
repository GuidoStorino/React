import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import cartIcon from "../../assets/icons/carrito.svg";
import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  let cant = 0;

  for (let i = 0; i < cart.length; i++) {
    cant = cant + cart[i].quantity;
  }

  return (
    <Link to="/cart" className="cart">
      <div className="cart-widget">
        <div className="cart-number">
        {cant}
        </div>

        <img
          src={cartIcon}
          className="cart-icon remove-bg"
          alt="shopping cart"
        />
      </div>
    </Link>
  );
};
export default CartWidget;
