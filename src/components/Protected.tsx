import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Protected({ isLoggedIn, children }) {
  const location = useLocation();
  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ path: location.pathname }}
      />
    );
  }
  return children;
}

export default Protected;
