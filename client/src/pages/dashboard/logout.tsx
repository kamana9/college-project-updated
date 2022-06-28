import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import {
  Flex,
  Text,
  Box,
  Button,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext } from "react";
import authContext from "../../context/context";
import cogoToast from "cogo-toast";

const Logg = () => {
  const { logout } = useContext(authContext);

  const handleLogOutHandler = () => {
    Cookies.remove("token");
    cogoToast.success("logged Out");
    logout(null);
  };

  return (
    <div>
      <Heading color="white">
        <Heading as="span" display="inline" color="#A1FE6B">
          Kredit
        </Heading>
      </Heading>{" "}
      <Flex
        alignItems="center"
        color="gray.50"
        bg="#1B1B1B"
        py="0.5rem"
        px="1rem"
        w="100%"
      >
        <PageLayout>
          <HStack m="2rem" alignItems="flex-start" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Do you want to logout from your account??
              </Text>
              <Text fontSize="m" fontWeight="bold">
                If yes, please press the button below.
              </Text>
              <Link to="/">
                <Box textAlign="left" pt="1rem">
                  <Button
                    px="1rem"
                    bg="#A1FE6B"
                    color="black"
                    onClick={handleLogOutHandler}
                  >
                    logout
                  </Button>
                </Box>
              </Link>
            </VStack>
          </HStack>
        </PageLayout>
      </Flex>
    </div>
  );
};

export default Logg;
