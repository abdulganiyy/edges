import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import "./Tweets.css";

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  const deleteTweet = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );
      console.log(response.data);
      setTweets([...tweets.filter((tweet) => tweet.id !== id)]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const tweets = response.data;
      setTweets(tweets.slice(0, 10));
    };

    getTweets();
  }, []);

  return (
    <div className="tweets">
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id} className="tweet">
            <Link to={`/tweets/${tweet.id}`}>{tweet.body}</Link>
            <Link className="edit-tweet" to={`/tweets/${tweet.id}`}>
              Edit tweet
            </Link>

            <span onClick={() => deleteTweet(tweet.id)} className="delete-btn">
              &times;
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Tweets;
