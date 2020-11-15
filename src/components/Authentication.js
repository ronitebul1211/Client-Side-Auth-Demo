import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class AuthenticationButton extends React.Component {
   render() {
      const { isAuthenticated, logout, loginWithRedirect } = this.props.auth0;
      console.log(this.props.location);
      return isAuthenticated ? (
         <li
            onClick={() => {
               logout();
            }}>
            SIGN OUT
         </li>
      ) : (
         <li
            onClick={() => {
               loginWithRedirect({});
            }}>
            SIGN IN
         </li>
      );
   }
}
// Wrap class component in high order component that five it access to auth0context (e.g  line 7)
export default withAuth0(AuthenticationButton);
