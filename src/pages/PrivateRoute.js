import React from "react";
import { Redirect, Route } from "react-router-dom";
import authService from "../service/authService";

const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route
      {...rest}
      render={(props) =>
         authService.isAuthenticated() === true ? (
            <Component {...props} />
         ) : (
            <Redirect to={{ pathname: "/sign-in", state: { from: rest.location.pathname } }} />
         )
      }
   />
);
export default PrivateRoute;
