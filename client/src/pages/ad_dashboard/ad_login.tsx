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
import { adContext } from "../../context/context";

import { useMutation } from "react-query";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import cogoToast from "cogo-toast";

const Adlog = () => {
  const { login, admin } = useContext(adContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state }: any = useLocation();
  let navigate = useNavigate();

  const mutations = useMutation((data: any) => axios.post("/admin", data), {
    onSuccess: (response) => {
      if (response.status === 200 || response.status === 201) {
        //setEmail("");
        setPassword("");

        if (response.data?.token) {
          cogoToast.success("Logged In");
          const decoded = jwt_decode(response.data.token);
          Cookies.set("token", response.data.token);
          login(decoded);
          console.log("Navigating to dashboard");
          navigate("/ad_login/ad_dashboard");
        }
      }
    },
    onError: (error: any) => {
      if (error.response?.data) {
        cogoToast.error(error.response.data);
      }
    },
  });

  const formSubmitHandler = (e: any) => {
    e.preventDefault();
    // navigate("/ad_login/ad_dashboard");

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

  if (admin) {
    const path = state?.path || "/ad_login/ad_dashboard";
    return <Navigate to={path} replace />;
    // return   navigate("/ad_login/ad_dashboard");
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   navigate("/ad_login/ad_dashboard");
  // };
  // const handleChange=(e)=>{
  //   setEmail(()=>e.target.value);
  //   setPassword(()=>e.target.value);
  // }

  return (
    <>
      <Flex w="100%" h="100vh">
        <Link to="/">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Link>
        <form action="post" method="" onSubmit={formSubmitHandler}>
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Admin login Page
              </Text>
              <Text fontSize="xs">Email</Text>
              <DefaultInput
                type="email"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Text fontSize="xs"> Password</Text>
              <DefaultInput
                type="password"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Box textAlign="left" pt="1rem">
                <Button px="2rem" bg="#A1FE6B" color="black" type="submit">
                  Login
                </Button>
              </Box>
            </VStack>
          </HStack>
        </form>{" "}
      </Flex>
    </>
  );
};

export default Adlog;
