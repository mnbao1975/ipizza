import { createContext, useState } from "react";
import { Auth, API } from "aws-amplify";
import { getCartId } from "../libs/cart";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [lineItems, updateLineItems] = useState([]);

  const addToCartEvent = (productInfo) => {
    console.log("addToCartEvent:", productInfo);
  };

  return (
    <ShoppingContext.Provider
      value={{
        cartId: getCartId(),
        lineItems,
        updateLineItems,
        addToCartEvent,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingContext, ShoppingProvider };
