import React from "react";
import axios from "axios";
import { useState } from "react";

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
import { Link } from "react-router-dom";
import { trimInput, validateEmail } from "../../utils/helper";
import cogoToast from "cogo-toast";
import DefaultInput from "./../../components/defaultInput";
import AdPageLayout from "../../container/pageLayout/ad_pageLayout";
const Adclog = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const formSubmitHandler = (e: any) => {
    e.preventDefault();

    const trimmedFirstName = trimInput(firstName);
    const trimmedLastName = trimInput(lastName);
    const trimmedPhoneNo = trimInput(phoneNo);
    const trimmedUserName = trimInput(username);
    const trimmedDob = trimInput(dob);
    const trimmedEmail = trimInput(email);
    const emailValidation = validateEmail(trimmedEmail);

    if (
      !trimmedFirstName ||
      !trimmedLastName ||
      !trimmedPhoneNo ||
      !Number(trimmedPhoneNo) ||
      !trimmedUserName ||
      !trimmedDob ||
      !trimmedEmail ||
      !gender
    ) {
      return alert("Please Fill the Fields Correctly");
    }
    if (!emailValidation) {
      return alert("Please fill the Correct Email");
    }

    axios
      .post("/auth/register", {
        first_name: trimmedFirstName,
        last_name: trimmedLastName,
        password: password,
        username: trimmedUserName,
        phone: trimmedPhoneNo,
        email: trimmedEmail,
        dob: trimmedDob,
        gender: gender,
      })
      .then((response) => {
        setDob("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setGender("");
        setPhoneNo("");
        setUsername("");
        setPassword("");
        cogoToast.success(response.data);
      })
      .catch((err) => {
        if (err.response) {
          cogoToast.error(err.response.data);
        }
      });
  };

 

  
  return (
    <>
      <Flex
        alignItems="center"
        color="gray.50"
        bg="#1B1B1B"
        py="0.5rem"
        px="1rem"
        w="100%"
      >
        <Heading color="white">
          <Heading as="span" display="inline" color="#A1FE6B">
            Kredit
          </Heading>
        </Heading>
      </Flex>
      <AdPageLayout>
        <form onSubmit={formSubmitHandler}>
          <HStack alignItems="flex-start" m="2rem" textAlign="left" gap="4rem">
            <VStack alignItems="left" width="300px">
              <Text fontSize="lg" fontWeight="bold">
                Create Account for user
              </Text>
              <div className="form-inline">
                <Text fontSize="xs">First Name :</Text>
                <DefaultInput
                 placeholder=""
                 value={firstName}
                  onChange={(e: any) => setFirstName(e.target.value)}
                 />
                <Text fontSize="xs">Last Name:</Text>
                <DefaultInput placeholder=""
                value={lastName}
                onChange={(e: any) => setLastName(e.target.value)} />
              </div>

              <Text fontSize="xs">Phone Number:</Text>
              <DefaultInput placeholder=""
              value={phoneNo}
              onChange={(e: any) => setPhoneNo(e.target.value)} />
              <Text fontSize="xs">Username:</Text>
              <DefaultInput placeholder=""
              value={username}
              onChange={(e: any) => setUsername(e.target.value)} />
              <Text fontSize="xs">Date of Birth :</Text>
              <DefaultInput placeholder="" 
              value={dob}
              onChange={(e: any) => setDob(e.target.value)}/>

              <Text fontSize="xs">Email:</Text>
              <DefaultInput placeholder="" 
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}/>
              <Text fontSize="xs">Password:</Text>
              <DefaultInput placeholder=""
              value={password}
              onChange={(e: any) => setPassword(e.target.value)} />
              <Text display="inline-block" fontSize="xs">
                Gender:
              </Text>
              <div className="form-inline">
                <input name="gender" value="male" type="radio"
                 checked={gender === "male"}
                 onChange={(e: any) => setGender(e.target.value)} 
                />

                <Text display="inline-block" fontSize="xs">
                  Male
                </Text>
                <br></br>
                <input name="gender" value="female" type="radio"
                 checked={gender === "female"}
                 onChange={(e: any) => setGender(e.target.value)} />
                <Text display="inline-block" fontSize="xs"
                >
                  Female
                </Text>
                <br></br>
                <input name="gender" value="other" type="radio"
                 checked={gender === "other"}
                 onChange={(e: any) => setGender(e.target.value)} />
                <Text display="inline-block" fontSize="xs">
                  Others
                </Text>
              </div>
              <Box textAlign="center" pt="1rem">
                <Button px="2rem" bg="#A1FE6B" color="black" type="submit">
                  Register
                </Button>
              </Box>
            </VStack>
          </HStack>
        </form>{" "}
      </AdPageLayout>
    </>
  );
};

export default Adclog;
