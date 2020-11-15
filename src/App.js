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
import ProtectedRoute from "./auth/ProtectedRoute";

class App extends React.Component {
   render() {
      const { isLoading } = this.props.auth0;
      return isLoading ? (
         <div>Loading ....</div>
      ) : (
         <React.Fragment>
            <Navbar />
            <div className="page-container">
               <Switch>
                  <ProtectedRoute path="/dashboard" component={DashboardPage} />
                  <ProtectedRoute path="/settings" component={SettingsPage} />
                  <Route path="/" exact component={HomePage} />
                  <Route path="*" exact component={PageNotFound} />
               </Switch>
            </div>
         </React.Fragment>
      );
   }
}

export default withAuth0(App);
