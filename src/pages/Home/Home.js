import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    };

    getUsers();
  }, []);
  return (
    <div className="home">
      {users.map((user) => {
        return (
          <div key={user.id} className="user">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
            <div>
              {" "}
              <Link to={`/albums/${user.id}`}>User Albums </Link>
            </div>
            <div>
              {" "}
              <Link to={`/tweets`}>User Tweets </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
