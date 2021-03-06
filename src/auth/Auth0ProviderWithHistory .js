import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";

class Auth0ProviderWithHistory extends React.Component {
   domain = process.env.REACT_APP_AUTH0_DOMAIN;
   clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

   onRedirectCallback = () => {
      this.props.history.push("/dashboard");
   };

   render() {
      return (
         <Auth0Provider
            domain={this.domain}
            clientId={this.clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={this.onRedirectCallback}>
            {this.props.children}
         </Auth0Provider>
      );
   }
}
// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
export default withRouter(Auth0ProviderWithHistory);
