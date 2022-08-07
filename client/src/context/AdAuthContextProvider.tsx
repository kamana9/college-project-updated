import React from 'react';
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useReducer } from "react";
import {adContext} from "./context";

const data = () => {
  const token = Cookies.get("token");
  const x = token ? jwtDecode(token) : null;
  return x;
};

const initialValue = {
  admin : data()
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "Logged In":
      return {
        ...state,
        admin: action.payload,
      };
    case "Logged Out":
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};

const AdAuthContextProvider = ({ children }) => {
  const [loggedState, dispatch] = useReducer(reducer, initialValue);

  const loginHandler = (data: any) => {
    dispatch({ type: "Logged In", payload: data });
  };

  const logoutHandler = (data: any) => {
    dispatch({ type: "Logged Out", payload: data });
  };

  const value = {
    ...loggedState,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <adContext.Provider value={value}>{children}</adContext.Provider>;
};

export default AdAuthContextProvider;
