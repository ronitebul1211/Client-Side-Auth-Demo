import React from "react";
import { Redirect, Route } from "react-router-dom";
import authService from "../service/authService";

const PrivateRoute = ({ component: Component, render, ...rest }) => (
   <Route
      {...rest}
      render={(props) =>
         authService.isAuthenticated() === true ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
   />
);
export default PrivateRoute;
