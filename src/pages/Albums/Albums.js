import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import "./Albums.css";

const Albums = () => {
  const params = useParams();

  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const getAlbums = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums`
      );

      //   console.log(
      //     response.data.filter((album) => album.userId === +params.userId)
      //   );

      setAlbums(
        response.data.filter((album) => album.userId === +params.userId)
      );
    };

    getAlbums();
  }, [params.userId]);

  return (
    <div className="albums">
      {albums.map((album) => {
        return (
          <div key={album.id} className="album">
            <Link to={`/albums/${album.id}/photos`}>
              <div>Album Title: {album.title}</div>
            </Link>
            <Link to={`/albums/${album.id}/photos`}>
              <div> Album photos</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
