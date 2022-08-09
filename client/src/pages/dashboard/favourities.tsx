import { useState } from "react";
import React from "react";
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
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { validatePhoneNo } from "../../utils/helper";
import { useQueryClient } from "react-query";
import cogoToast from "cogo-toast";

const Fav = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState(null);
  const queryClient = useQueryClient();

  // getting data from the server
  const favInfo = useQuery("fav", () => axios.get("/wallet/favs"));

  // for posting data to the server
  const addFavMutations = useMutation(
    (values: any) => axios.post("/wallet/addfav", values),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("fav");
        if (data?.data) {
          cogoToast.success(data.data);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  // deletingData from the server
  const removeFavMutations = useMutation(
    (values: any) => axios.delete(`/wallet/delete/${values}`),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("fav");
        if (data?.data) {
          cogoToast.success(data.data);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const updateFavMutations = useMutation(
    (values: any) => axios.put("/wallet/update", values),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries("fav");
        if (data?.data) {
          cogoToast.success(data.data);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  // logic related form submit
  const addFormHandler = (e: any) => {
    e.preventDefault();
    const checkPhoneNo = validatePhoneNo(phoneNo);

    if (!phoneNo) {
      return cogoToast.error("Cannot be Empty");
    }
    if (!Number(phoneNo)) {
      return cogoToast.error("Phone Number cannot be a Letters");
    }
    if (!checkPhoneNo) {
      return cogoToast.error("Invalid Phone Number");
    }
    const data = {name:name ,phone: phoneNo };

    try {
      addFavMutations.mutate(data);
      setPhoneNo("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavHandler = (id: any) => {
    try {
      removeFavMutations.mutate(id);
    } catch (err) {
      console.log(err);
    }
  };

  // updating the data using same form
  const updateFormHandler = () => {
    const checkPhoneNo = validatePhoneNo(phoneNo);

    if (!phoneNo) {
      return cogoToast.error("Cannot be Empty");
    }
    if (!Number(phoneNo)) {
      return cogoToast.error("Phone Number cannot be a Letters");
    }
    if (!checkPhoneNo) {
      return cogoToast.error("Invalid Phone Number");
    }
    const data = {
      phone: phoneNo,
      id: id,
    };
    try {
      updateFavMutations.mutate(data);
      setPhoneNo("");
      setId(null);
      setIsUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateFavHandler = (value: any) => {
    setIsUpdate(true);
    const data = favInfo.data?.data;
    const { id, phone} = data.find((data: any) => data.id === value);
    setPhoneNo(phone);
    setId(id);
  };

  return (
    <div>
      {/* <Link to="/">
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
      </Link>*/}
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
                  Enter phone number{" "}
                </Text>
                <Text fontSize="xs">Phone Number:</Text>
                <DefaultInput
                  placeholder="Eg: 98*********"
                  value={phoneNo}
                  onChange={(e: any) => setPhoneNo(e.target.value)}
                />
                {isUpdate ? (
                  <Box textAlign="center" pt="1rem">
                    <DefaultButton onClick={updateFormHandler}>
                      Update
                    </DefaultButton>
                  </Box>
                ) : (
                  <Box textAlign="center" pt="1rem">
                    <DefaultButton onClick={addFormHandler}>add</DefaultButton>
                  </Box>
                )}
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
                    <Th border="none">Phone Number</Th>
                    <Th border="none">operation </Th>
                  </Tr>
                </Thead>
                <Tbody fontSize="sm" color="#FAFAFA">
                  {favInfo.data
                    ? favInfo.data.data.map((obj: any, index: number) => (
                        <Tr key={obj.id}>
                          <Td>{index + 1}</Td>
                          <Td>{obj.phone}</Td>
                          <Td>
                            <Box textAlign="right" pt="1rem">
                              <DefaultButton
                                onClick={() => deleteFavHandler(obj.id)}
                                type=""
                              >
                                remove
                              </DefaultButton>
                            </Box>
                            <Box textAlign="right" pt="1rem">
                              <DefaultButton
                                type=""
                                onClick={() => updateFavHandler(obj.id)}
                              >
                                update
                              </DefaultButton>
                            </Box>
                          </Td>
                        </Tr>
                      ))
                    : null}
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
