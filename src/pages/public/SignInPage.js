import React from "react";
import { Redirect } from "react-router-dom";

class SignInPage extends React.Component {
   state = { redirect: false };

   handleSignIn = () => {
      //Success -> response with token
      //send token -> app save token in local storage and set state to authenticated.
      this.props.onSignInCallback("token");
      this.setState({ redirect: true });
   };

   redirectWhenSignIn = () => {
      const pathHistory = this.props.location.state;
      const referrerPath = pathHistory ? pathHistory.from : "/dashboard";
      return <Redirect to={referrerPath} />;
   };

   render() {
      if (this.state.redirect) {
         return this.redirectWhenSignIn();
      }

      return (
         <div className="page-public page-sign-in">
            Sign In Page
            <button onClick={this.handleSignIn}>SIGN IN</button>
         </div>
      );
   }
}

export default SignInPage;
