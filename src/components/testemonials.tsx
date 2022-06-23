import React from "react";
import { Text, Avatar, Flex } from "@chakra-ui/react";
interface propsTypes {
  name: string;
  company: string;
  testemony: string;
  imageLink: string;
}

const Testemonials = (props: propsTypes) => {
  return (
    <Flex
      my="5rem"
      bg="#191A1A"
      p="3rem"
      w="550px"
      h="240px"
      direction="column"
      alignItems="flex-start"
      position="relative"
    >
      <Text position="absolute" lineHeight="1" top="-4rem" fontSize="200px">
        “
      </Text>
      <Text>{props.testemony}</Text>
      <Flex alignItems="flex-end" mt="2rem" gap="1rem">
        <Avatar size="lg" src={props.imageLink} />
        <Flex direction="column">
          <Text>{props.name}</Text>
          <Text fontSize="sm">{props.company}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Testemonials;
