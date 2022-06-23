import React from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import Dashboard from "./pages/dashboard/dashboard";
import SendMoney from "./pages/dashboard/sendMoney";
import Transaction from "./pages/dashboard/transaction";
import Settings from "./pages/dashboard/settings";
import Log from "./pages/dashboard/logging";
import Registration from "./pages/dashboard/register";
import Fav from "./pages/dashboard/favourities";

const app = () => {
  return (
    <Flex direction="column" color="white" bg="#0F1010" w="100%">
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/post" element={<Dashboard />}></Route>
        <Route path="/register/" element={<Registration />} />
        <Route path="/login/">
          <Route path="/login/" element={<Log />} />

          <Route path="/login/dashboard" element={<Dashboard />} />
          <Route path="/login/send-money" element={<SendMoney />} />
          <Route path="/login/favourities" element={<Fav />} />
          <Route path="/login/transaction" element={<Transaction />} />
          <Route path="/login/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Flex>
  );
};

export default app;
