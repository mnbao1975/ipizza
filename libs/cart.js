import { v4 as uuid } from "uuid";
import Cookies from "js-cookie";

const getCartId = () => {
  let currentCartId = Cookies.get("cartId");
  if (currentCartId) {
    return currentCartId;
  }

  currentCartId = uuid();
  Cookies.set("cartId", currentCartId, { expires: 7 });
  return currentCartId;
};

const getCartCounterCoookie = () => {
  return Cookies.get("cartCounterCoookie") || 0;
};

const setCartCounterCoookie = (value) => {
  Cookies.set("cartCounterCoookie", value, { expires: 7 });
};

export { getCartId, getCartCounterCoookie, setCartCounterCoookie };
