import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//Components
import Navbar from "./components/Navbar";
//Protected Page
import PrivateRoute from "./pages/PrivateRoute";
import DashboardPage from "./pages/protected/DashboardPage";
import SettingsPage from "./pages/protected/SettingsPage";
//Public Page
import PageNotFound from "./pages/public/PageNotFound";
import SignInPage from "./pages/public/SignInPage";
import HomePage from "./pages/public/HomePage";

//AUTH0
import { withAuth0 } from "@auth0/auth0-react";

class App extends React.Component {
   // state = { isAuthenticated: false };

   // componentDidMount() {
   //    this.setState({ isAuthenticated: authService.isAuthenticated() });
   // }

   // handleSignOut = () => {
   //    authService.logout();
   //    this.setState({ isAuthenticated: authService.isAuthenticated() });
   // };

   // handleSignIn = () => {
   //    authService.login("roni", "123");
   //    this.setState({ isAuthenticated: authService.isAuthenticated() });
   // };

   render() {
      const { isLoading } = this.props.auth0;
      return isLoading ? (
         <div>Loading ....</div>
      ) : (
         <React.Fragment>
            <Navbar isAuthenticated={this.state.isAuthenticated} handleSignOut={this.handleSignOut} />
            <div className="page-container">
               <Switch>
                  <PrivateRoute path="/dashboard" component={DashboardPage} />
                  <PrivateRoute path="/settings" component={SettingsPage} />
                  <Route
                     path="/sign-in"
                     exact
                     render={(props) => <SignInPage {...props} onSignInCallback={this.handleSignIn} />}
                  />
                  <Route path="/" exact component={HomePage} />
                  <Route path="*" exact component={PageNotFound} />
               </Switch>
            </div>
         </React.Fragment>
      );
   }
}

export default withAuth0(App);
