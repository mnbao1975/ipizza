import React from "react";
import { Box, Spacer } from "@chakra-ui/react";

function LineItem({ id, title, price, number, removeHandler }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      w="100%"
      borderWidth="1px"
      borderRadius="sm"
      borderColor="gray.200"
      boxShadow="sm"
      p="2"
    >
      <Box>{title}</Box>
      <Spacer />
      <Box ml="8">Price: ${price}</Box>
      <Box ml="8">Num: {number}</Box>
      <Box
        as="button"
        borderRadius="md"
        bg="tomato"
        color="white"
        px={2}
        h={8}
        ml="8"
      >
        Remove
      </Box>
    </Box>
  );
}

export default LineItem;
