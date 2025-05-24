import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);

  const location = useLocation();

  // if -> user thake then return children;
  //   jodi user na thake tahole , navigate to --> login
  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
  }
};

export default PrivateRoutes;
