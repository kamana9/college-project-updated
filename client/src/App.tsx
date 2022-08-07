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
import Adlog from "./pages/ad_dashboard/ad_login";
import Adashboard from "./pages/ad_dashboard/ad_dashboard";
import Adclog from "./pages/ad_dashboard/ad_create";
import Adlogg from "./pages/ad_dashboard/ad_logout";
import { adContext } from "./context/context";
import PageLayout from "./container/pageLayout/pageLayout";

const app = () => {
  const { user } = useContext(authContext);
  const token = Cookies.get("token");
  
  const { admin } = useContext(adContext);
  // const token = Cookies.get("token");

  useLayoutEffect(() => {
    axios.defaults.headers.common["auth-token"] = token;
  }, [token]);

  return (
    <>
      <Flex direction="column" color="white" bg="#0F1010" w="100%">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/ad_login/" element={<Adlog />} />
        <Route path="/post" element={<Adashboard />} />
        <Route path="/ad_login/ad_dashboard"
         element={<Protected to={'/ad_login'} 
         isLoggedIn={admin}>
                <Adashboard />
              </Protected>
        } />
        <Route path="/ad_login/ad_create" element={ 
        <Protected to={'/ad_login'} isLoggedIn={admin}>
                <Adclog />
              </Protected>} />
        <Route path="/ad_login/ad_logout" element={ 
        <Protected to={'/ad_login'} isLoggedIn={admin}>
       <Adlogg />
      </Protected>} />
          <Route path="/post" element={<Dashboard />} />
          <Route path="/register/" element={<Registration />} />
          <Route path="/login/" element={<Log />} />
          {/* <Route path="/user" element={<PageLayout />}></Route> */}
          <Route
            path="/login/dashboard"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/login/send-money"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
                <SendMoney />
              </Protected>
            }
          />
          <Route
            path="/login/favourities"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
                <Fav />
              </Protected>
            }
          />
          <Route
            path="/login/transaction"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
                <Transaction />
              </Protected>
            }
          />
          <Route
            path="/login/settings"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
                <Settings />
              </Protected>
            }
          />
          <Route
            path="/login/setPin"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
                <Pinn />
              </Protected>
            }
          />
          <Route
            path="/login/logout"
            element={
              <Protected to={'/login'} isLoggedIn={user}>
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
