import React from "react";
import AdPageLayout from "../../container/pageLayout/ad_pageLayout";
import {
  Flex,
  Heading,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import DefaultButton from "../../components/defaultButton";
const Adashboard = () => {
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
        <Text fontSize="lg" fontWeight="bold">
          User Details
        </Text>
        <Accordion
          maxW="900px"
          w="100%"
          color="white"
          defaultIndex={[0]}
          allowMultiple
        >
          <AccordionItem my="0.5rem" border="none">
            <Text p="0.4rem" bg="#191A1A" border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  User 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              details
              <Box textAlign="right" pt="1rem">
                <DefaultButton type="">delete</DefaultButton>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my="0.5rem" border="none">
            <Text p="0.4rem" bg="#191A1A" border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  User 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              details
              <Box textAlign="right" pt="1rem">
                <DefaultButton type="">delete</DefaultButton>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem my="0.5rem" border="none">
            <Text p="0.4rem" bg="#191A1A" border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  User 3
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              details
              <Box textAlign="right" pt="1rem">
                <DefaultButton type="">delete</DefaultButton>
              </Box>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem my="0.5rem" border="none">
            <Text p="0.4rem" bg="#191A1A" border="none">
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  User 4
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel pb={4}>
              details
              <Box textAlign="right" pt="1rem">
                <DefaultButton type="">delete</DefaultButton>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </AdPageLayout>
    </>
  );
};

export default Adashboard;
