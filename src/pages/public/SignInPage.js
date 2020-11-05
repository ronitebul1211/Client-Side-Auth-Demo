import React from "react";

const SignInPage = ({ onSignInCallback }) => {
   return (
      <div className="page-public page-sign-in">
         Sign In Page
         <button onClick={onSignInCallback}>SIGN IN</button>
      </div>
   );
};

export default SignInPage;
