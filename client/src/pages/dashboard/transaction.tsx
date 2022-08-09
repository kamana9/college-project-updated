import React from "react";
import { Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import {
  Heading,
  Flex,
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { isError, useQuery } from "react-query";
import axios from "axios";

import PageLayout from "./../../container/pageLayout/pageLayout";
import { Link } from "react-router-dom";
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

const Transaction = () => {
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
  let { isLoading, isError } = useQuery(
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
  if (isLoading || isTransactionsLoading) return <h1>Loading...</h1>;
  if (isError || isTransactionsError) return <h1>Something went wrong...</h1>;
  return (
    <div>
      
          <PageLayout>
            {" "}
            <Text fontSize="lg" fontWeight="bold">
              Transaction detail
            </Text>
            <br />
            <br />
            <Flex w="100%" h="100vh">
              
              
              {users.map((user) =>
                getTransactionsFromUserPhone(user.phone, transactions).map(
                  (transaction: ITransaction) => (
                    <Text key={user.id}>
                      <Spacer />
                      <React.Fragment key={transaction.trans_id}>
                        <Spacer />
                        Receiver Phone : {transaction.receiver_phone}
                        <Spacer />
                        Sender Phone : {transaction.sender_phone}
                        <Spacer />
                        Amount : {transaction.amount}
                        <Spacer />
                        Transaction Date :{" "}
                        {new Date(transaction.trans_date).toLocaleDateString()}
                        <Spacer />
                        <Spacer />
                      </React.Fragment>
                      <Spacer />
                    </Text>
                  )
                )
              )}
              <Spacer />
            </Flex>
          </PageLayout>
       
    </div>
  );
};

export default Transaction;
