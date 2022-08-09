import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import DefaultButton from "./../../components/defaultButton";
import DefaultInput from "./../../components/defaultInput";
import { VStack, HStack, Flex, Text, Heading, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import cogoToast from "cogo-toast";

const Pinn = () => {
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const mutations = useMutation(
    (values: any) => axios.post("/wallet/setpin", values),
    {
      onSuccess: (data) => {
        setPassword("");
        if (data.data) {
          cogoToast.success(data.data);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pin) {
      return alert("Please Enter a Pin");
    }

    if (pin.length !== 5) {
      return alert("The length of pin must be 5 ");
    }
    try {
      const data = {
        pin,
        password,
      };
      mutations.mutate(data);
    } catch (err) {
      console.log(err);
    }
  };
  const trsnPassword = (e: any) => {
    setPassword("");
    if (!password) {
      return alert("please enter password");
    }
    if (password != password) {
      return alert("password is wrong");
    }
    try {
      const data = {
        password: password,
      };
      mutations.mutate(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <PageLayout>
        <Flex w="100%" h="100vh">
          <HStack m="2rem" alignItems="flex-start" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <form onSubmit={formSubmitHandler}>
                <Text fontSize="lg" fontWeight="bold">
                  Set pin
                </Text>
                <Text pb="1rem" fontSize="md">
                  Enter the pin you wish for.
                </Text>
                <Text fontSize="xs">Set pin:</Text>
                <DefaultInput
                  placeholder=""
                  value={pin}
                  type="password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPin(e.target.value)
                  }
                />
                <Text fontSize="xs">Password</Text>
                <DefaultInput
                  placeholder=""
                  type="password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  value={password}
                />
                <Box textAlign="center" pt="1rem">
                  <DefaultButton
                    // onClick={() => setPin && setPin(pin)}
                    type="submit"
                  >
                    Set
                  </DefaultButton>
                </Box>
              </form>
            </VStack>
          </HStack>
        </Flex>
      </PageLayout>
    </div>
  );
};

export default Pinn;
