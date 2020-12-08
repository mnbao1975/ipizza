// Sample card from Airbnb
import Image from "next/image";
import { Box, Spacer } from "@chakra-ui/react";
import { Auth, API } from "aws-amplify";
import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { HeaderContext } from "../contexts/HeaderContext";
import { setCartCounterCoookie, getCartId } from "../libs/cart";
import { createOrder } from "../src/graphql/mutations";
import { getOrderInfo } from "../src/graphql/queries";

function ProductCard(productInfo) {
  const { id, title, description, price, image } = productInfo;
  const { cartCounter, setCartCounter } = useContext(HeaderContext);

  const cartId = getCartId();
  const onClickHandler = () => {
    const couter = cartCounter + 1;
    setCartCounterCoookie(couter);
    setCartCounter(couter);
    updateCart({ ...productInfo, cartId });
  };

  const updateCart = async ({ cartId, price }) => {
    let username;
    let currentOrderInfo;

    // Get current order which is not yet submitted
    try {
      const signedInUser = await Auth.currentAuthenticatedUser();
      username = signedInUser.username || "";

      const orderObj = await API.graphql({
        query: getOrderInfo,
        variables: { PK: `order#${cartId}`, SK: { eq: `order#${cartId}` } },
      });
      currentOrderInfo = orderObj.data.getOrderInfo.items[0];
    } catch (err) {
      console.log(err);
    }

    if (!currentOrderInfo) {
      // add new order item in the table
      const orderInfo = {
        PK: `order#${cartId}`,
        SK: `order#${cartId}`,
        username,
        status: "CREATED",
        grandTotal: price,
      };

      try {
        await API.graphql({
          query: createOrder,
          variables: { input: orderInfo },
        });
      } catch (err) {
        console.log(err);
      }
    }
    // add/update line item -> product info
    //const productId = uuid();
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
