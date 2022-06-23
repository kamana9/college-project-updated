import { Stack, Text, Center } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const FeaturesCardTwo = (props: any) => {
  return (
    <Center>
      <Stack w="260px">
        <Text color="white" fontWeight="bold" fontSize="xl">
          {props.title}
        </Text>
        <Text color="gray.300" lineHeight="1.5">
          {props.discription}
        </Text>
        <Text fontWeight="semibold" color="yellow.400" lineHeight="1.5">
          Read More <ArrowForwardIcon color="yellow.400" />
        </Text>
      </Stack>
    </Center>
  );
};

export default FeaturesCardTwo;
