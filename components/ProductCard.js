// Sample card from Airbnb
import Image from "next/image";
import { Box, Spacer } from "@chakra-ui/react";

import { useContext } from "react";
import { ShoppingContext } from "../contexts/ShoppingContext";
import { HeaderContext } from "../contexts/HeaderContext";
import { setCartCounterCoookie } from "../libs/cart";

function ProductCard(productInfo) {
  const { id, title, description, price, image } = productInfo;
  const { addToCartEvent, cartId } = useContext(ShoppingContext);
  const { cartCounter, setCartCounter } = useContext(HeaderContext);

  const onClickHandler = () => {
    const couter = cartCounter + 1;
    setCartCounterCoookie(couter);
    setCartCounter(couter);
    addToCartEvent({ ...productInfo, cartId });
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      m="2"
      borderColor="gray.200"
      boxShadow="md"
    >
      <Image src={image} alt="A product" width={300} height={200} />

      <Box p="4">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>

        <Box mt="4" as="h4" lineHeight="tight" isTruncated mb="1">
          {description}
        </Box>
        <Box fontWeight="semibold">${price}</Box>

        <Box d="flex" mt="2" alignItems="center">
          <Spacer />
          <Box
            as="button"
            borderRadius="md"
            bg="tomato"
            color="white"
            px={4}
            h={8}
            onClick={onClickHandler}
          >
            Add to cart
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
