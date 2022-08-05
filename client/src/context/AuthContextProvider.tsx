import React from 'react';
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useReducer } from "react";
import authContext from "./context";

const data = () => {
  const token = Cookies.get("token");
  const x = token ? jwtDecode(token) : null;
  return x;
};

const initialValue = {
  user: data(),
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "Logged In":
      return {
        ...state,
        user: action.payload,
      };
    case "Logged Out":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
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

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
