import React from 'react'
import { PhoneIcon, EmailIcon, TriangleDownIcon } from "@chakra-ui/icons";

import {
  Flex,
  Text,
  Box,
  Input,
  Button,
  Spacer,
  Heading,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex bg="#191A1A" color="white" p="3rem" w="100%">
      <Flex direction="column" w="40%" maxW="400px">
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
        <Text color="gray.200">
        Fast, Secure and easy choice to trasnfer your funds with satisfactory
          users and reviews.
        </Text>
      </Flex>
      <Spacer />
      <Flex maxW="700px">
        <Flex direction="column" mx="2rem">
          <Text mb="0.5rem" fontWeight="bold">
            STAY CONNECTED
          </Text>
          <Input
            borderRadius="0.2rem"
            color="black"
            bg="gray.100"
            w="200px"
            placeholder="Enter Your Email"
          />
          <Text mt="2rem">
            <TriangleDownIcon mr="0.5rem" /> Kirtipur, Kathmandu, Nepal
          </Text>
          <Text mt="0.5rem">
            <PhoneIcon mr="0.5rem" />
            +977-910000000
          </Text>
          <Text mt="0.5rem">
            <EmailIcon mr="0.5rem" /> kreditofficial@gmail.com
          </Text>
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold"> CONNECT WITH US</Text>
          <Flex my="1.5rem" w="100%" justifyContent="space-around">
            <EmailIcon />
            <PhoneIcon />

            <EmailIcon />
            <PhoneIcon />
          </Flex>
          <Text fontWeight="bold"> SOON ON:</Text>
          <Flex
            maxW="250px"
            w="100%"
            direction="column"
            justifyContent="space-around"
          >
            <Button my="0.25rem" colorScheme="whatsapp">
              Google Play
            </Button>{" "}
            <Button my="0.25rem" colorScheme="orange">
              App Store
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
