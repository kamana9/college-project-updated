import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Dashboard from "./../pages/dashboard/dashboard";

//Icons
// @ts-ignore
import home from "../assets/svg/u_home-alt.svg"; // @ts-ignore
import sendMoney from "../assets/svg/u_import.svg"; // @ts-ignore
import laptop from "../assets/svg/u_laptop.svg"; // @ts-ignore
import rupee from "../assets/svg/u_rupee-sign.svg"; // @ts-ignore
import setting from "../assets/svg/u_setting.svg";
//Css
import "./sidebar.css";
const Sidebar = () => {
  return (
    <Box py="1rem" color="white" bg="#212222" minH="90vh" minW="240px">
      <NavLink
        to="/login/dashboard
      "
      >
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={home} alt="menu" />
          <Text ml="0.5rem">Dashboard</Text>
        </Flex>
      </NavLink>
      <NavLink to="/login/send-money">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={sendMoney} alt="menu" />
          <Text ml="0.5rem">Send Money</Text>
        </Flex>
      </NavLink>
      {/* . */}
      <NavLink to="/login/transaction">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={rupee} alt="menu" />
          <Text ml="0.5rem">Transaction</Text>
        </Flex>
      </NavLink>

      <NavLink to="/login/favourities">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={laptop} alt="menu" />
          <Text ml="0.5rem">favourities</Text>
        </Flex>
      </NavLink>

      <NavLink to="/login/settings">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={setting} alt="menu" />
          <Text ml="0.5rem">Settings</Text>
        </Flex>
      </NavLink>
      <NavLink to="/login/setPin">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={setting} alt="menu" />
          <Text ml="0.5rem">set_pin</Text>
        </Flex>
      </NavLink>
      <NavLink to="/login/logout">
        <Flex
          _hover={{ bg: "#c4c4c460" }}
          p="1rem"
          w="100%"
          alignItems="center"
        >
          <Image boxSize="1.5rem" src={home} alt="menu" />
          <Text ml="0.5rem">logout</Text>
        </Flex>
      </NavLink>
    </Box>
  );
};

export default Sidebar;
