import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import {
  Heading,
  Flex,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
} from "@chakra-ui/react";

import PageLayout from "./../../container/pageLayout/pageLayout";
import { Link } from "react-router-dom";

const Transaction = () => {
  return (
    <div>
      <Link to="/">
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
      </Link>
      <PageLayout>
        {" "}
        <Flex w="100%" h="100vh">
          <Tabs m="2rem">
            <TabList borderColor="blackAlpha.100">
              <Tab _selected={{ borderColor: "#A1FE6B" }}>All</Tab>
              <Tab _selected={{ borderColor: "#A1FE6B" }}>Received</Tab>
              <Tab _selected={{ borderColor: "#A1FE6B" }}>Send</Tab>
              <Tab _selected={{ borderColor: "#A1FE6B" }}>Withdraw</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Table size="md" variant="striped" colorScheme="whiteAlpha">
                  <Thead>
                    <Tr color="white">
                      <Th border="none">ID</Th>
                      <Th border="none">Transaction Detail</Th>
                      <Th border="none">Amount</Th>
                      <Th border="none">Transaction Date</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontSize="sm" color="#FAFAFA">
                    <Tr>
                      <Td>101</Td>
                      <Td>Recharge</Td>
                      <Td>Rs: 100</Td>
                      <Td> 02:01PM - 2022/02/20</Td>
                    </Tr>
                    <Tr>
                      <Td>102</Td>
                      <Td>Shopping </Td>
                      <Td>Rs: 2500</Td>
                      <Td> 11:40AM -2022/02/20</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </PageLayout>
    </div>
  );
};

export default Transaction;
