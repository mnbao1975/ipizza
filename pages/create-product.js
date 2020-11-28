import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Box, Text } from "@chakra-ui/react";

function CreateProduct() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);
  return (
    <Box m="2">
      {user &&
      user.signInUserSession.accessToken.payload["cognito:groups"].find(
        (e) => e === "Admins"
      ) ? (
        <Box
          as="button"
          borderRadius="md"
          bg="blue.500"
          color="white"
          px={4}
          h={8}
        >
          New product
        </Box>
      ) : (
        "Sorry! You don't have permission to create new prouducts."
      )}
    </Box>
  );
}

export default CreateProduct;
