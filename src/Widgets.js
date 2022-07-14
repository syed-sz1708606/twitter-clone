import React from "react";
import './Widgets.css'

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1546165412550918152"} />

        <TwitterTimelineEmbed 
        sourceType="profile"
        screenName="elonmusk"
        options={{height: 400}}
        />

        <div className="shareTweet">
          <TwitterShareButton className="shareButton"
          url={"https://github.com/syed-sz1708606"}
            options={{ text: "#reactjs is awesome", via: "szbaz9" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
