import "./MovieInfo.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const MovieInfo = ({ movieObj }) => {
  const [flixData, setFlixData] = useState(null);

  const fetchFlixData = async () => {
    try {
      const response = await axios.get(
        `https://flixdb.glitch.me/api/movies?key=3Hd9zT4wQ6LmB7pY2jK1Xr8V&title=${movieObj.title}`
      );
      setFlixData(response.data);
    } catch (error) {
      console.warn("Error fetching flix data in MovieInfo: ", error);
      setFlixData(null);
    }
  };

  useEffect(() => {
    movieObj && fetchFlixData();
  }, [movieObj]);

  return (
    movieObj && (
      <div className="flex-item">
        <h4>{movieObj.title}</h4>
        {flixData && (
          <div className="poster-wrapper">
            <img src={flixData?.poster_url} />
          </div>
        )}
        <div>
          <div className="data-Item">
            <span>Running Time</span>
            <span>{movieObj.runningTime}</span>
          </div>
          <div className="data-Item">
            <span>Genre </span>
            <span>{movieObj.genre}</span>
          </div>
          {flixData && (
            <div className="data-Item">
              <span>Release Date </span>
              <span>{flixData?.release_date}</span>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default MovieInfo;
