import React from 'react'
import { Flex, Text, Input, Spacer, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../context/context";

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      color="gray.50"
      bg="#1B1B1B"
      py="0.5rem"
      px="1rem"
      w="100%"
    >
      <Link to="/">
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
      </Link>
      <Spacer />

      <Spacer />
      <Link to="/login">
        <Text mx="1rem" fontSize="md">
          Login
        </Text>
      </Link>
      <Link to="/register">
        <Text mx="1rem" fontSize="md">
          Register
        </Text>
      </Link>
    </Flex>
  );
};

export default Navbar;
