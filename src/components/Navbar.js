import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends React.Component {
   renderAppOptions = () => {
      if (this.props.isAuthenticated) {
         return (
            <React.Fragment>
               <li>
                  <Link to="/dashboard">DASHBOARD</Link>
               </li>
               <li>
                  <Link to="/settings">SETTINGS</Link>
               </li>
            </React.Fragment>
         );
      }
   };

   renderUserOptions = () => {
      if (this.props.isAuthenticated) {
         return (
            <React.Fragment>
               <li onClick={this.props.handleSignOut}>SIGN OUT</li>
            </React.Fragment>
         );
      } else {
         return (
            <React.Fragment>
               <li>
                  <Link to="/sign-up">SIGN UP</Link>
               </li>
               <li>
                  <Link to="/sign-in">SIGN IN</Link>
               </li>
            </React.Fragment>
         );
      }
   };

   render() {
      return (
         <nav className="nav-bar">
            <ul>
               <li>
                  <Link to="/">MY APP LOGO</Link>
               </li>
               {this.renderAppOptions()}
            </ul>
            <ul>{this.renderUserOptions()}</ul>
         </nav>
      );
   }
}

export default Navbar;
