import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "./SingleTweet.css";
const SingleTweet = () => {
  const params = useParams();

  const [tweet, setTweet] = useState({
    id: "",
    name: "",
    email: "",
    body: "",
  });

  const onChangeHandler = (e) => {
    setTweet({
      ...tweet,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/comments/${tweet.id}`,
      tweet
    );

    const _tweet = response.data;
    setTweet({
      ..._tweet,
      id: _tweet.id,
      name: _tweet.name,
      email: _tweet.email,
      body: _tweet.body,
    });
  };

  useEffect(() => {
    const getTweet = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/${params.tweetId}`
      );

      const _tweet = response.data;
      setTweet({
        ..._tweet,
        id: _tweet.id,
        name: _tweet.name,
        email: _tweet.email,
        body: _tweet.body,
      });
    };

    getTweet();
  }, [params.tweetId]);
  return (
    <div className="single-tweet">
      {tweet && (
        <div className="form-wrapper">
          <form className="form">
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="name"
                onChange={onChangeHandler}
                name="name"
                value={tweet.name}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="email"
                onChange={onChangeHandler}
                name="email"
                value={tweet.email}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="tweet"
                onChange={onChangeHandler}
                name="body"
                value={tweet.body}
              />
            </div>
            <div className="form-group">
              <button
                className="form-btn"
                type="submit"
                onClick={(e) => onSubmitHandler(e)}
              >
                UPDATE
              </button>{" "}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SingleTweet;
