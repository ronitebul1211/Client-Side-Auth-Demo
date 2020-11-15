import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { withAuth0 } from "@auth0/auth0-react";
import Authentication from "./Authentication";

class Navbar extends React.Component {
   render() {
      const { isAuthenticated } = this.props.auth0;
      return (
         <nav className="nav-bar">
            <ul>
               <li>
                  <Link to="/">MY APP LOGO</Link>
               </li>
               {isAuthenticated ? (
                  <React.Fragment>
                     <li>
                        <Link to="/dashboard">DASHBOARD</Link>
                     </li>
                     <li>
                        <Link to="/settings">SETTINGS</Link>
                     </li>
                  </React.Fragment>
               ) : null}
            </ul>
            <ul>
               <Authentication />
            </ul>
         </nav>
      );
   }
}

export default withAuth0(Navbar);
