import React, { Component } from "react";
import "../../utilities.css";
import "./Profile.css";
import CatHappiness from "../modules/CatHappiness.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catHappy: 0,
    }
  }
//}

  incrementCH = () => {
    this.setState({
      catHappy: this.state.catHappy + 1
    })
  }

//const Profile = () => {
  render() {
  return ( 
    <div>

      {/** pics */}
      <div className="Profile-avatarContainer">
        <div 
        className="Profile-avatar"
        onClick = {this.incrementCH}  
        />
      </div>

      {/** name */}
      <h1 className="Profile-name u-textCenter">TINA</h1>
      <hr className="Profile-line" />

      {/** content */}
      <div className="u-flex">

        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">About Me</h4>
          <div id="profile-description">
            I am a catbook.
          </div>
        </div>

        {/** TODO STEP 1:
         *  Insert Cat Happiness component here.
         *  HINT: You probably want to add a new Profile-subContainer to hold the CatHappiness component.
         */}
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">Cat Happiness</h4>
          <CatHappiness CH={this.state.catHappy} />
        </div>
        
          
        <div className="Profile-subContainer u-textCenter">
          <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
          <div id="favorite-cat">corgi</div>
        </div>

      </div>
    </div>
  );
}
};

export default Profile;
