import React from "react";
import PageLayout from "./../../container/pageLayout/pageLayout";
import { Link } from "react-router-dom";
import { Heading, Flex } from "@chakra-ui/react";

const Settings = () => {
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
        <Flex w="100%" h="100vh"></Flex>
       </PageLayout> 
    </div>
  );
};

export default Settings;
