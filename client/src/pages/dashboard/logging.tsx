import React, { useContext, useState } from "react";
import {
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import DefaultInput from "./../../components/defaultInput";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { validateEmail, trimInput } from "../../utils/helper";
import axios from "axios";
import context from "../../context/context";
import { useMutation } from "react-query";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import cogoToast from "cogo-toast";

const Log = () => {
  const { login, user } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state }: any = useLocation();
  let navigate = useNavigate();

  const mutations = useMutation(
    (data: any) => axios.post("/auth/login", data),
    {
      onSuccess: (response) => {
        setEmail("");
        setPassword("");
        if (response.data?.message) {
          cogoToast.info(response.data.message);
          navigate("/register");
        }
        if (response.data?.token) {
          cogoToast.success("Logged In");
          const decoded = jwt_decode(response.data.token);
          Cookies.set("token", response.data.token);
          login(decoded);
        }
      },
      onError: (error: any) => {
        if (error.response?.data) {
          cogoToast.error(error.response.data);
        }
      },
    }
  );

  const formSubmitHandler = (e: any) => {
    e.preventDefault();

    const trimmedEmail = trimInput(email);
    const emailValidation = validateEmail(trimmedEmail);

    if (!trimmedEmail || !password) {
      return alert("Please Fill the Required Fields");
    }
    if (!emailValidation) {
      return alert("Please Enter a Valid Email");
    }

    const data = {
      email: trimmedEmail,
      password: password,
    };
    try {
      mutations.mutate(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (user) {
    const path = state?.path || "/login/dashboard";
    return <Navigate to={path} replace />;
  }

  return (
    <>
      <Flex w="100%" h="100vh">
        <Link to="/">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Link>
        <form onSubmit={formSubmitHandler}>
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Login to your account
              </Text>
              <Text fontSize="xs">Email</Text>
              <DefaultInput
                placeholder=""
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Text fontSize="xs"> Password</Text>
              <DefaultInput
                type="password"
                placeholder=""
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
              />
              <Box textAlign="left" pt="1rem">
                <Button px="2rem" bg="#A1FE6B" color="black" type="submit">
                  Login
                </Button>
              </Box>
              <Link to="/register">
                <Text color="#A1FE6B" fontSize="xs">
                  Click here to go to Registration page
                </Text>
              </Link>
            </VStack>
          </HStack>
        </form>
      </Flex>
    </>
  );
};

export default Log;
