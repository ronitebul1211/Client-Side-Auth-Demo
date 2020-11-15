import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

//Auth0
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory ";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
   <BrowserRouter>
      <Auth0ProviderWithHistory domain={domain} clientId={clientId} redirectUri={window.location.origin}>
         <App />
      </Auth0ProviderWithHistory>
   </BrowserRouter>,
   document.getElementById("root"),
);
