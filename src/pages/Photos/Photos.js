import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import "./Photos.css";

const Photos = () => {
  const params = useParams();

  const [photos, setphotos] = useState([]);
  useEffect(() => {
    const getphotos = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
      );

      console.log(response.data);

      setphotos(response.data);
    };

    getphotos();
  }, [params.albumId]);

  return (
    <div className="photos">
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="photocard">
            <img src={photo.url} alt="album-art" className="photo" />
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
