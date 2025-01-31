import React, { useState, useEffect } from "react";
import CatHappiness from "../modules/CatHappiness.js";

import "../../utilities.css";
import "./Profile.css";
import { get } from "../../utilities";

const Profile = (props) => {
  const [catHappiness, setCatHappiness] = useState(0);
  const [name, setname] = useState(null);

  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  const incrementCatHappiness = () => {
    setCatHappiness(catHappiness + 1);
  };

  useEffect(() => {
    if(props.userId!="null"){
    get("/api/user", { userId: props.userId }).then((user) => {
      setname(user.name);
    })}
    else{
      setname(null);
    }
  }, [props.userId]);

  return (
     name ? 
      <>
      <div
        className="Profile-avatarContainer"
         onClick={() => {
          incrementCatHappiness();
        }}
      >
        <div className="Profile-avatar" />
      </div>
      <h1 className="Profile-name u-textCenter">{name}</h1>
      <hr className="Profile-line" />
      <div className="u-flex">
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">About Me</h4>
          <div id="profile-description">
            I am really allergic to cats i don't know why i have a catbook
          </div>
        </div>
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">Cat Happiness</h4>
          <CatHappiness catHappiness={catHappiness} />
        </div>
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
          <div id="favorite-cat">corgi</div>
        </div>
      </div>
    </>
      :
      <div> Loading! </div>
  );
};

export default Profile;
