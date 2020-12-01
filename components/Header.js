import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
// Third party icons from https://react-icons.github.io
// More info: https://chakra-ui.com/docs/components/icon#using-chakra-ui-icons
import { MdShoppingBasket } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";

import { useState, useEffect, useContext } from "react";
import { Auth } from "aws-amplify";
import { HeaderContext } from "../contexts/HeaderContext";

function Header() {
  const [user, setUser] = useState(null);
  const { cartCounter } = useContext(HeaderContext);

  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => setUser(null));
  }, []);

  return (
    <Box
      pos="sticky"
      top="0"
      boxShadow="md"
      p="4"
      bg="white"
      display="flex"
      alignItems="center"
    >
      <Box>
        <Link href="/">
          <a>
            <Text fontSize="xl" fontWeight="bold" color="blue.500">
              iPizza
            </Text>
          </a>
        </Link>
      </Box>
      <Box flex="1">
        <InputGroup>
          <Input variant="flushed" placeholder="Search pizza" ml="2" />
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="grey" />}
          />
        </InputGroup>
      </Box>
      <Link href="/profile">
        <a>
          <Box ml="4">
            <Text fontSize="sm">Hello</Text>
            <Text fontWeight="bold">{user ? user.username : "Sign In"}</Text>
          </Box>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Box ml="4">
            <Text fontSize="sm">Return</Text>
            <Text fontWeight="bold">& Order</Text>
          </Box>
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <Box display="flex" ml="6" alignItems="center">
            <Icon as={MdShoppingBasket} w={8} h={8} mr="1" />
            <Text fontWeight="bold">{cartCounter}</Text>
          </Box>
        </a>
      </Link>
    </Box>
  );
}

export default Header;
