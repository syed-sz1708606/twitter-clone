import React, { useState } from "react";
import { Avatar, Button } from "@mui/material";
import moment from "moment";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  function sendTweet(e) {
    e.preventDefault();
    db.collection("posts").add({
      avatar: "https://pbs.twimg.com/profile_images/1363085164537077764/jWnUyOaG_400x400.jpg",
      displayName: "Syed Zubair",
      userName: "szbaz9",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
    });

    setTweetImage("")
    setTweetMessage("")
  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1363085164537077764/jWnUyOaG_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Whats Happening?"
            className="tweetbox__input-message"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetbox__input-image"
          placeholder="optional image url"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox__tweet__button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
