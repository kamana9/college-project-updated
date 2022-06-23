import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import YourAccount from "./../../components/dashboard/yourAccount";
import {
  Flex,
  Text,
  SimpleGrid,
  Box,
  Button,
  Heading,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
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
        <Link to="/">
          <Heading color="white">
            <Box textAlign="right" pt="1rem">
              <Button px="1rem" bg="#A1FE6B" color="black">
                logout
              </Button>
            </Box>
          </Heading>
        </Link>
      </Flex>
      <PageLayout>
        <Flex w="100%" h="100vh">
          <Flex w="100%" boxSizing="border-box">
            <Flex w="inherit" m="2rem" direction="column">
              <YourAccount balance={56262} accountNo={"25654965667469"} />
            </Flex>
          </Flex>
        </Flex>
      </PageLayout>
    </div>
  );
};

export default Dashboard;

const single = (
  <Center w="100px" h="100px" bg="red.500">
    Hello
  </Center>
);
