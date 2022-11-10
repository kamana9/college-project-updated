import React, { useState } from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import DefaultButton from "./../../components/defaultButton";
import DefaultInput from "./../../components/defaultInput";
import { VStack, HStack, Flex, Text, Heading, Box } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { validatePhoneNo } from "../../utils/helper";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import cogoToast from "cogo-toast";

const SendMoney = () => {
  const queryClient = useQueryClient();

  const mutations = useMutation(
    (value: any) => axios.post("/wallet/sendmoney", value),
    {
      onSuccess: (data) => {
        setAmount("");
        setPhoneNo("");
        setPin("");
        queryClient.invalidateQueries("wallet-info");
        if (data?.data) {
          cogoToast.success(data?.data);
        }
      },
      onError: (err: any) => {
        cogoToast.error(err.message);
      },
    }
  );

  const [amount, setAmount] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pin, setPin] = useState("");

  const formSubmitHandler = (e: any) => {
    e.preventDefault();

    const checkPhoneNumber = validatePhoneNo(phoneNo);

    if (!amount || !phoneNo) {
      return cogoToast.error("Please Fill the Required Fields");
    }
    if (!Number(phoneNo)) {
      return cogoToast.error("value can't be letter");
    }
    if (pin.length !== 5) {
      return cogoToast.info("Invalid Pin , Please Enter the Set Pin");
    }
    if (amount <= "0") {
      return cogoToast.info("Invalid amount , Please Enter positive value");
    }
    // amount >= 0
    if (!checkPhoneNumber) {
      return cogoToast.error("Invalid Phone Number");
    }

    const data = {
      receiver_phone: phoneNo,
      amount,
      pin: pin,
    };

    try {
      mutations.mutate(data);
    } catch (err) {
      console.log("hola");
      console.log(err);
    }
  };

  return (
    <div>
      {/* <Link to="/">
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
      </Link> */}
      <PageLayout>
        <Flex w="100%" h="100vh">
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Send Money to Wallet
              </Text>
              <Text pb="1rem" fontSize="md">
                Enter phone number and amount and transafer money instantly{" "}
              </Text>
              <form onSubmit={formSubmitHandler}>
                <Text fontSize="xs">Amount:</Text>
                <DefaultInput
                  placeholder="Rs:5000"
                  type="number"
                  value={amount}
                  onChange={(e: any) => {
                    setAmount(e.target.value);
                  }}
                />
                <Text fontSize="xs">Pin No:</Text>
                <DefaultInput
                  placeholder="Eg: 9****"
                  type="password"
                  value={pin}
                  onChange={(e: any) => {
                    setPin(e.target.value);
                  }}
                />
                <Text fontSize="xs">Phone No:</Text>
                <DefaultInput
                  placeholder="Eg: 98*********"
                  value={phoneNo}
                  onChange={(e: any) => {
                    setPhoneNo(e.target.value);
                  }}
                />
                <Box textAlign="center" pt="1rem">
                  <DefaultButton type="submit">Send</DefaultButton>
                </Box>
              </form>
            </VStack>
          </HStack>
        </Flex>
      </PageLayout>
    </div>
  );
};

export default SendMoney;
