import React from "react";
import {
  Heading,
  Text,
  HStack,
  Flex,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import DefaultInput from "./../../components/defaultInput";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <Flex w="100%" h="100vh">
        <Link to="/">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Link>
        <form action="post" method="">
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Register your account
              </Text>
              <div className="form-inline">
                <Text fontSize="xs">First Name :</Text>
                <DefaultInput placeholder="" />
                <Text fontSize="xs">Last Name:</Text>
                <DefaultInput placeholder="" />
              </div>

              <Text fontSize="xs">Phone Number:</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs">Username:</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs">Date of Birth :</Text>
              <DefaultInput placeholder="" />

              <Text fontSize="xs">Email:</Text>
              <DefaultInput placeholder="" />
              <Text fontSize="xs">Password:</Text>
              <DefaultInput placeholder="" />
              <Text display="inline-block" fontSize="xs">
                Gender:
              </Text>
              <div className="form-inline">
                <input name="gender" value="male" type="radio" />

                <Text display="inline-block" fontSize="xs">
                  Male
                </Text>
                <br></br>
                <input name="gender" value="female" type="radio" />
                <Text display="inline-block" fontSize="xs">
                  Female
                </Text>
                <br></br>
                <input name="gender" value="other" type="radio" />
                <Text display="inline-block" fontSize="xs">
                  Others
                </Text>
              </div>
              <Box textAlign="center" pt="1rem">
                <Button px="2rem" bg="#A1FE6B" color="black" type="submit">
                  Register
                </Button>
              </Box>
              <Link to="/login">
                <Text color="#A1FE6B" fontSize="xs">
                  Click here to go to Login page
                </Text>
              </Link>
            </VStack>
          </HStack>
        </form>{" "}
      </Flex>
    </>
  );
};

export default Registration;
