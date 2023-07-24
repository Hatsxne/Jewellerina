import React, { useState, useContext } from "react";
import { ShopContext } from "../../App";

function Cart()
{
  const {cart, setCart} = useContext(ShopContext);
  console.log("cart");
  console.log(cart);

  return (
    <div className="cart">
        <div>
            {cart.map((item) => (
                <div>
                    <h1>{item.name}</h1>
                    <h1>{item.price}</h1>
                </div>
                ))}
        </div>
    </div>
  );
}
export default Cart;