import React, { useState } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import { get, post } from "../../utilities";
import "./NavBar.css";

// This identifies your application to Google's authentication service
const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = ({setuserId}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [id, setid] = useState(null);

  const handleLogin = (res) => {
    // 'res' contains the response from Google's authentication servers
    // TODO: Send res.tokenObj.id_token to the backend
    post("/api/login", {token: res.tokenObj.id_token}).then((user) => {
      setLoggedIn(true);
      setuserId(user._id);
      setid(user._id);
      console.log( `Logged in as ${user.name}`);
    }).catch(err => {
      console.log(err);
    })
  };

  const handleLogout = () => {
    // TODO: Tell the backend we logged out
    post("/api/logout").then(() =>{
      setLoggedIn(false);
      console.log("Logged out successfully!");
      setid(null);
    })
  };

  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        <Link to={`/profile/${id}`} className="NavBar-link">
          Profile
        </Link>
        {loggedIn ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
