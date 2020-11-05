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
import SignUpPage from "./pages/public/SignUpPage";
import HomePage from "./pages/public/HomePage";

// Service
import authService from "./service/authService";

class App extends React.Component {
   state = { isAuthenticated: false };

   componentDidMount() {
      this.setState({ isAuthenticated: authService.isAuthenticated() });
   }

   handleSignOut = () => {
      authService.logout();
      this.setState({ isAuthenticated: authService.isAuthenticated() });
   };

   handleSignIn = () => {
      authService.login("roni", "123");
      this.setState({ isAuthenticated: authService.isAuthenticated() });
   };

   render() {
      return (
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
                  <Route path="/sign-up" exact component={SignUpPage} />
                  <Route path="/" exact component={HomePage} />
                  <Route path="*" exact component={PageNotFound} />
               </Switch>
            </div>
         </React.Fragment>
      );
   }
}

export default App;
