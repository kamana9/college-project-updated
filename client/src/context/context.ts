import { createContext } from "react";

const authContext = createContext({
  user: null,
  
  login: (data: any) => {},
  logout: (data: any) => {},
});

const adContext = createContext({
  admin: null,
  
  login: (data: any) => {
    console.log(data)
    
  },
  logout: (data: any) => {},
});

export default authContext;
export  {adContext};

