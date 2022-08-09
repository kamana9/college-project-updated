import React, { useEffect, useMemo } from "react";

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
  Spacer,
} from "@chakra-ui/react";
import { isError, useQuery } from "react-query";
import DefaultButton from "../../components/defaultButton";
import axios from "axios";
import { useQueryClient } from "react-query";
import cogoToast from "cogo-toast";
import { useMutation } from "react-query";
import { useState } from "react";

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  phone: string;
  email: string;
  password: string;
  dob: string;
  gender: string;
  createdat: string;
  modifiedat: string;
  userTransactions: ITransaction[];
}

interface ITransaction {
  trans_id: string;
  sender_phone: string;
  receiver_phone: string;
  amount: string;
  trans_date: string;
  username: string | null;
}
const Adashboard = () => {
  let getDOBDate;
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const getTransactionsFromUserPhone = (
    userPhone: string,
    transactions: ITransaction[]
  ) => {
    return transactions.filter(
      (transaction: ITransaction) => transaction.sender_phone === userPhone
    );
  };
  let { data, isLoading, isError } = useQuery(
    "users",
    async () => axios.get("http://localhost:8000/api/v1/wallet/users"),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          setUsers(data.data);
        }
      },
    }
  );
  let { isLoading: isTransactionsLoading, isError: isTransactionsError } =
    useQuery(
      "transactions",
      async () => axios.get("http://localhost:8000/api/v1/wallet/transaction"),
      {
        onSuccess: (data) => {
          if (data.status === 200 || data.status === 201) {
            setTransactions(data.data);
          }
        },
      }
    );

  const queryClient = useQueryClient();

  const [id, setId] = useState(null);

  // useEffect(() => {
  //   if (transactions.length > 0) {
  //   }
  // }, []);

  // deletingData from the server
  const removeUserMutation = useMutation(
    (values: any) => {
      console.log(values);
      return axios.delete(`/wallet/deleteuser/${values.id}`);
    },
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          queryClient.invalidateQueries("users");
          cogoToast.success(data.data);
        }
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something went wrong...</h1>;
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
          {users.map(
            (user) => (
              // console.log(user.dob),
              (getDOBDate = new Date(user.dob)),
              (
                // // console.log(user.dob, getDOBDate.getMonth(), "convert"),
                // (makeDate = getDOBDate.getFullYear() + getDOBDate.getMonth()),
                // console.log(makeDate, "make date"),
                <AccordionItem my="0.5rem" border="none" key={user.id}>
                  <Text p="0.4rem" bg="#191A1A" border="none">
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        {user.username}
                      </Box>

                      <AccordionIcon />
                    </AccordionButton>
                  </Text>
                  <AccordionPanel pb={4}>
                    {user.email}
                    <Spacer />
                    {getDOBDate.toLocaleDateString()}
                    <Spacer />
                    {user.phone}
                    <Spacer />
                    {user.gender}
                    <Spacer />
                    {getTransactionsFromUserPhone(user.phone, transactions).map(
                      (transaction: ITransaction) => (
                        <React.Fragment key={transaction.trans_id}>
                          Receiver Phone : {transaction.receiver_phone}
                          <Spacer />
                          Amount : {transaction.amount}
                          <Spacer />
                          Transaction Date :{" "}
                          {new Date(
                            transaction.trans_date
                          ).toLocaleDateString()}
                          <Spacer />
                          <Spacer />
                        </React.Fragment>
                      )
                    )}
                    <Spacer />
                    <Box textAlign="right" pt="1rem">
                      <DefaultButton
                        onClick={() =>
                          removeUserMutation.mutate({ id: user.id.toString() })
                        }
                      >
                        delete
                      </DefaultButton>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              )
            )
          )}
        </Accordion>
      </AdPageLayout>
    </>
  );
};

export default Adashboard;
