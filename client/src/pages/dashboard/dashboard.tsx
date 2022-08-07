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
import axios from "axios";
import { useQuery } from "react-query";

const Dashboard = () => {
  const walletInfo = useQuery("wallet-info", () =>
    axios.get("/wallet/dashboard")
  );

  const data = walletInfo.data?.data.rows;

  return (
    <div>
      {/* <Flex
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
      </Flex> */}
      <PageLayout>
        <Flex w="100%" h="100vh">
          <Flex w="100%" boxSizing="border-box">
            <Flex w="inherit" m="2rem" direction="column">
              <YourAccount
                firstName={data ? data[0].first_name : "Your"}
                lastName={data ? data[0].last_name : "Account"}
                balance={data ? data[0]?.balance : 0}
                accountNo={"25654965667469"}
              />
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
