import {
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import React from "react";

export const Faq = () => {
  return (
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
            How Safe Is My Money In Kredit?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
        Funds stored in this wallet is just as safe as physical cash in your
          own wallet. Moreover it is actually more secure than physical cash.
          The risk of snatch thefts, robberies and petty thieves stealing your
          wallet is always present. With kredit, you can minimise the amount of
          physical cash to carry.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem my="0.5rem" border="none">
        <Text p="0.4rem" bg="#191A1A" border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Is Kredit e-wallet?            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
        We might not have all the possible features and funcationalities but
          it is an e-wallet that lets you transfer funds with ur contacts.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem my="0.5rem" border="none">
        <Text p="0.4rem" bg="#191A1A" border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What Happens If My Phone Gets Stolen?            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
        You can access your data by providing your valid information. So you
          don't need to worry if you loose your device. But just dont save your
          passwords.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem my="0.5rem" border="none">
        <Text p="0.4rem" bg="#191A1A" border="none">
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What is the benifit of using your service?            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
        All the users will be able to transfer funds to others easily. And
          there is no third party to deduct certain amount everytime you perform
          a transaction.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
