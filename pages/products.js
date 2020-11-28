import { Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import CreateProduct from "./create-product";

function Products() {
  return (
    <>
      <Header />
      <Flex
        zIndex="100"
        flexWrap="wrap"
        alignItems="center"
        // justifyContent="center"
        // justify="left"
        max="800px"
        mt="15"
      >
        <ProductCard
          id={1}
          title="Pizza 1"
          description="Pizza 001"
          price={10.0}
          image="/images/prod-01.jpg"
          category="PIZZA"
        />
        <ProductCard
          id={2}
          title="Product 2"
          description="Pizza 002"
          price={10.0}
          image="/images/prod-02.jpg"
          category="PIZZA"
        />
        <ProductCard
          id={3}
          title="Product 3"
          description="Pizza 003"
          price={12.0}
          image="/images/prod-03.jpg"
          category="PIZZA"
        />
        <ProductCard
          id={4}
          title="Pasta 1"
          description="Pasta 001"
          price={12.0}
          image="/images/pasta-01.jpg"
          category="PASTA"
        />
        <ProductCard
          id={5}
          title="Pasta 2"
          description="Pasta 002"
          price={13.0}
          image="/images/pasta-02.jpg"
          category="PASTA"
        />
      </Flex>
    </>
  );
}

export default Products;
