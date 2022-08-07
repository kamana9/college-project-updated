import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ isLoggedIn, children,to }) {
  const location = useLocation();
  if (!isLoggedIn) {
    return (
      <Navigate
        to={to}
        replace={true}
        state={{ path: location.pathname }}
      />
    );
  }
  return children;
}


export default Protected;

