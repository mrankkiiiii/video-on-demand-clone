import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Carousel, AllVideos } from "../../components";
import "./HomePage.css";

const URL = "https://videoapi-dot-virtualeventdemo.el.r.appspot.com/";

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // make a request to get all videos
    getVideos();

    return () => {
      // cleanup
    };
  }, []);

  const getVideos = () => {
    axios({
      method: "POST",
      url: URL,
    })
      .then(function (response) {
        setVideos(response.data.result);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className='home'>
      {videos.length <= 0 ? (
        <div className='loader'>
          <Spinner animation='border' style={{ color: "#0c5188" }} />
        </div>
      ) : (
        <div>
          <Carousel videos={videos} />
          <AllVideos videos={videos} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
