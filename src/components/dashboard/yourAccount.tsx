import React from "react";
import { Flex, Text, Spacer } from "@chakra-ui/react";
interface propsType {
  balance: number;
  accountNo: string;
}
const YourAccount = (props: propsType) => {
  return (
    <Flex p="1rem 2rem" bg="#191A1A" direction="column" w="400px" h="240px">
      <Flex>
        <Text fontSize="sm">Your Account</Text>
        <Spacer />
        <Text p="0.2rem 0.5rem" bg="#FFFFFF06" fontSize="sm">
          FINAL
        </Text>
      </Flex>
      <Text fontWeight="light" fontSize="xl">
        Balance
      </Text>
      <Text lineHeight="1.1" color="#A1FE6B" fontSize="6xl" fontWeight="bold">
        {props.balance}
      </Text>
      <Text fontSize="md" fontWeight="light">
        Account
      </Text>
      <Text fontSize="md" fontWeight="light">
        {props.accountNo}
      </Text>
      <Flex my="0.5rem" w="50%" justifyContent="space-between">
        <Text>Print</Text>
        <Text>Download</Text>
      </Flex>
    </Flex>
  );
};

export default YourAccount;
