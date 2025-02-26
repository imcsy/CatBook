import React, {useState} from "react";
import NavBar from "./modules/NavBar.js";
import { Router } from "@reach/router";
import Feed from "./pages/Feed.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  // required method: whatever is returned defines what
  // shows up on screen
  const [userId, setuserId] = useState(null);
  

  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar setuserId={setuserId} />
      <div className="App-container">
        <Router>
          <Feed userId={userId} path="/" />
          <Profile path="/profile/:userId" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
