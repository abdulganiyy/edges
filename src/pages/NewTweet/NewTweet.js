import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./NewTweet.css";

const NewTweet = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      data
    );

    console.log(response.data);
    navigate("/");
  };
  return (
    <div className="new-tweet">
      <div className="form-wrapper">
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="name"
              onChange={onChangeHandler}
              name="name"
              value={data.name}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="email"
              onChange={onChangeHandler}
              name="email"
              value={data.email}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="tweet"
              onChange={onChangeHandler}
              name="body"
              value={data.body}
            />
          </div>
          <div className="form-group">
            <button
              className="form-btn"
              type="submit"
              onClick={(e) => onSubmitHandler(e)}
            >
              SEND
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTweet;
