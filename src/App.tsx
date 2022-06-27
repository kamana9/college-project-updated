import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

import Home from "./pages/home/home";
import { Route, Routes, Outlet } from "react-router-dom";
import { Switch } from "@chakra-ui/react";
import Dashboard from "./pages/dashboard/dashboard";
import SendMoney from "./pages/dashboard/sendMoney";
import Transaction from "./pages/dashboard/transaction";
import Settings from "./pages/dashboard/settings";
import Log from "./pages/dashboard/logging";
import Registration from "./pages/dashboard/register";
import Fav from "./pages/dashboard/favourities";
import Protected from "./components/Protected";
import authContext from "./context/context";
import Cookies from "js-cookie";
import axios from "axios";
import Pinn from "./pages/dashboard/pin";
import Logg from "./pages/dashboard/logout";

const app = () => {
  const { user } = useContext(authContext);
  const token = Cookies.get("token");

  useLayoutEffect(() => {
    axios.defaults.headers.common["auth-token"] = token;
  }, [token]);

  return (
    <>
      <Flex direction="column" color="white" bg="#0F1010" w="100%">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Dashboard />} />
          <Route path="/register/" element={<Registration />} />
          <Route path="/login/" element={<Log />} />
          <Route
            path="/login/dashboard"
            element={
              <Protected isLoggedIn={user}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/login/send-money"
            element={
              <Protected isLoggedIn={user}>
                <SendMoney />
              </Protected>
            }
          />
          <Route
            path="/login/favourities"
            element={
              <Protected isLoggedIn={user}>
                <Fav />
              </Protected>
            }
          />
          <Route
            path="/login/transaction"
            element={
              <Protected isLoggedIn={user}>
                <Transaction />
              </Protected>
            }
          />
          <Route
            path="/login/settings"
            element={
              <Protected isLoggedIn={user}>
                <Settings />
              </Protected>
            }
          />
          <Route
            path="/login/setPin"
            element={
              <Protected isLoggedIn={user}>
                <Pinn />
              </Protected>
            }
          />
          <Route
            path="/login/logout"
            element={
              <Protected isLoggedIn={user}>
                <Logg />
              </Protected>
            }
          />
        </Routes>
      </Flex>
    </>
  );
};

export default app;
