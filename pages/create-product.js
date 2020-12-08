import { useState, useEffect } from "react";
import { Auth, API } from "aws-amplify";
import { Box, Button } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { createProduct } from "../src/graphql/mutations";

function CreateProduct() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);

  const onClickHandler = async () => {
    setIsLoading(true);
    await addProductItem({
      title: "Pizza 1",
      description: "Pizza 001",
      price: 11.9,
      image: "/images/prod-01.jpg",
      inventory: 100,
      category: "PIZZA",
    });
    await addProductItem({
      title: "Pizza 2",
      description: "Pizza 002",
      price: 11,
      image: "/images/prod-02.jpg",
      inventory: 100,
      category: "PIZZA",
    });

    await addProductItem({
      title: "Pizza 3",
      description: "Pizza 003",
      price: 13.9,
      image: "/images/prod-03.jpg",
      inventory: 500,
      category: "PIZZA",
    });

    await addProductItem({
      title: "Pasta 1",
      description: "Pasta 001",
      price: 11.0,
      image: "/images/pasta-01.jpg",
      inventory: 50,
      category: "PASTA",
    });
    await addProductItem({
      title: "Pasta 2",
      description: "Pasta 002",
      price: 15.0,
      image: "/images/pasta-02.jpg",
      inventory: 150,
      category: "PASTA",
    });

    setIsLoading(false);
  };

  const addProductItem = (product) => {
    const productId = uuid();
    const productInfo = { ...product, id: productId };

    return API.graphql({
      query: createProduct,
      variables: { input: productInfo },
    });
  };

  return (
    <>
      <Box m="2">
        {user &&
        user.signInUserSession.accessToken.payload["cognito:groups"].find(
          (e) => e === "Admins"
        ) ? (
          <Button
            isLoading={isLoading}
            loadingText="Submitting"
            colorScheme="teal"
            variant="outline"
            onClick={onClickHandler}
          >
            Populate products
          </Button>
        ) : (
          "Sorry! You don't have permission to create new prouducts."
        )}
      </Box>
    </>
  );
}

export default CreateProduct;
