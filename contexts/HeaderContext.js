import { createContext, useState } from "react";
import { getCartCounterCoookie } from "../libs/cart";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [cartCounter, setCartCounter] = useState(getCartCounterCoookie());
  return (
    <HeaderContext.Provider
      value={{
        cartCounter,
        setCartCounter,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderProvider };
