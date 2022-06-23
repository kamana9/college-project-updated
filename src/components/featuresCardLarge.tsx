import { Stack, Text, Button, Center } from "@chakra-ui/react";
import React from "react";

const featuresCardLarge = (props: any) => {
  return (
    <Center>
      <Stack maxW="500px" w={props.width ? props.width : "100%"}>
        <Text fontWeight="semibold" color="#A1FE6B">
          - Lorem Ipsum
        </Text>
        <Text
          fontSize="sm"
          fontWeight="bold"
          color="green.400"
          lineHeight="1.5"
        ></Text>
        <Text color="white" fontWeight="bold" fontSize="3xl">
          {props.title}
        </Text>
        <Text color="gray.300" lineHeight="1.5" fontSize="xl">
          {props.discription}
        </Text>
        <Stack py="1.5rem">
          <Button color="black" bg="#A1FE6B" w="240px">
            Get Started Now
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};

export default featuresCardLarge;
