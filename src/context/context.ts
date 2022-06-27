import { createContext } from "react";

const authContext = createContext({
  user: null,
  login: (data: any) => {},
  logout: (data: any) => {},
});

export default authContext;
