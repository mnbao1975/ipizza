import { createContext, useState } from "react";
import { getCartId } from "../libs/cart";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const addToCartEvent = (productInfo) => {
    console.log("addToCartEvent:", productInfo);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartId: getCartId(),
        addToCartEvent,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
