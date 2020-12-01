import { useEffect, useContext } from "react";
import { Flex, Box, Text, Spacer, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import LineItem from "../components/LineItem";
import { ShoppingContext } from "../contexts/ShoppingContext";
import { HeaderContext } from "../contexts/HeaderContext";

function Cart() {
  const { lineItems, updateLineItems } = useContext(ShoppingContext);
  const { cartCounter, setCartCounter } = useContext(HeaderContext);

  useEffect(() => {
    console.log("Visiting cart page");
    const liveLineItems = [
      { id: 1, title: "Pizza 1", price: 10, number: 2 },
      { id: 2, title: "Pizza 2", price: 11, number: 1 },
      { id: 4, title: "Pasta 3", price: 13, number: 1 },
    ];
    updateLineItems(liveLineItems);
  }, []);

  return (
    <>
      <Header />
      <Text ml="3" mt="5" as="h1">
        Your Cart:
      </Text>
      <VStack ml="2" mr="2">
        {lineItems &&
          lineItems.map((lineItem) => (
            <LineItem
              id={lineItem.id}
              title={lineItem.title}
              price={lineItem.price}
              number={lineItem.number}
            />
          ))}
      </VStack>
    </>
  );
}

export default Cart;
