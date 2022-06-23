import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./../../components/sidebar";

const PageLayout = (props: any) => {
  return (
    <Flex boxSizing="border-box" w="100%" h="fit-content">
      <Sidebar />
      <Box w="90%">{props.children}</Box>
    </Flex>
  );
};

export default PageLayout;
