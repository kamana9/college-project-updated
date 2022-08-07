import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import { QueryClientProvider, QueryClient } from "react-query";
import theme from "./theme";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import Cookies from "js-cookie";
import AdAuthContextProvider from "./context/AdAuthContextProvider";

const queryClient = new QueryClient();

//Font

axios.defaults.baseURL = "http://localhost:8000/api/v1";
// axios.defaults.headers.common["auth-token"] = Cookies.get("token") || "";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthContextProvider>
        <AdAuthContextProvider>
          <ChakraProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ChakraProvider>
        </AdAuthContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
