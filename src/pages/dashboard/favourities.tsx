import { Heading } from "@chakra-ui/react";
import DefaultInput from "./../../components/defaultInput";
import {
  VStack,
  HStack,
  Flex,
  Text,
  Box,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
} from "@chakra-ui/react";
import DefaultButton from "./../../components/defaultButton";
import PageLayout from "./../../container/pageLayout/pageLayout";
import { Link } from "react-router-dom";
const Fav = () => {
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
        <Flex w="100%" h="100vh">
          <form>
            <HStack
              alignItems="flex-start"
              m="2rem"
              textAlign="left"
              gap="10rem"
            >
              <VStack alignItems="left" width="300px">
                <Text fontSize="lg" fontWeight="bold">
                  Add Favourites
                </Text>
                <Text pb="1rem" fontSize="md">
                  enter phone number and name{" "}
                </Text>
                <Text fontSize="xs">Name:</Text>
                <DefaultInput placeholder="" />
                <Text fontSize="xs">Phone Number:</Text>
                <DefaultInput placeholder="Eg: 98*********" />
                <Box textAlign="center" pt="1rem">
                  <DefaultButton type="submit">add</DefaultButton>
                </Box>
              </VStack>
            </HStack>
          </form>
          <HStack alignItems="flex-start" m="2rem" textAlign="right" gap="7rem">
            <VStack alignItems="right" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Your Favourites
              </Text>
              <Table size="md" variant="striped" colorScheme="whiteAlpha">
                <Thead>
                  <Tr color="white">
                    <Th border="none">SN</Th>
                    <Th border="none"> Name</Th>
                    <Th border="none">Phone Number</Th>
                    <Th border="none">operation </Th>
                  </Tr>
                </Thead>
                <Tbody fontSize="sm" color="#FAFAFA">
                  <Tr>
                    <Td>1</Td>
                    <Td>name_1</Td>
                    <Td>phone_1</Td>
                    <Td>
                      <Box textAlign="right" pt="1rem">
                        <DefaultButton type="">remove</DefaultButton>
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>name_2 </Td>
                    <Td>phone_2 </Td>
                    <Td>
                      {" "}
                      <Box textAlign="right" pt="1rem">
                        <DefaultButton type="">remove</DefaultButton>
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </VStack>
          </HStack>
        </Flex>
      </PageLayout>
    </div>
  );
};

export default Fav;
