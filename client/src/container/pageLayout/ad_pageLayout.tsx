import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import Adsidebar from "../../components/ad_components/ad_sidebar";
import { Outlet } from "react-router-dom";

const AdPageLayout = (props: any) => {
  return (
    <Flex boxSizing="border-box" w="100%" h="fit-content">
      <Adsidebar />
      <Box w="90%">{props.children}</Box>
    </Flex>
  );
};

export default AdPageLayout;
