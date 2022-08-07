import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import hell from "../../assets/svg/u_home-alt.svg";
import setting from "../../assets/svg/u_setting.svg";
import hell from "./../../assets/svg/u_home-alt.svg";

import "./ad_sidebar.css";

const Adsidebar = () => {
  return (
    <Box py="1rem" color="white" bg="#212222" minH="90vh" minW="240px">
      <NavLink to="/ad_login/ad_dashboard">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={hell} alt="menu" />
          <Text ml="0.5rem">Dashboard</Text>
        </Flex>
      </NavLink>
      <NavLink to="/ad_login/ad_create">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={setting} alt="menu" />
          <Text ml="0.5rem">create account</Text>
        </Flex>
      </NavLink>
      <NavLink to="/ad_login/ad_logout">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={hell} alt="menu" />
          <Text ml="0.5rem">logout</Text>
        </Flex>
      </NavLink>
    </Box>
  );
};
export default Adsidebar;
