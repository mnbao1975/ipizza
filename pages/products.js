import { API } from "aws-amplify";
import { Flex, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { listProducts } from "../src/graphql/queries";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const productsObj = await API.graphql({ query: listProducts });
      setProducts(productsObj.data.listProducts.items);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Header />
      <Flex
        zIndex={100}
        flexWrap="wrap"
        alignItems="center"
        // justifyContent="center"
        // justify="left"
        max="800px"
        mt="15"
      >
        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </Flex>
    </>
  );
}

export default Products;
