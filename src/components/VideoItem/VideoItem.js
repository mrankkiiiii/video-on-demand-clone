import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { VideoPlayer } from "..";
import "./VideoItem.css";

const VideoItem = ({ video, setFavs, favs }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // handle player pop up button
  const handleVideoClick = () => {
    setIsPlayerOpen(true);
  };

  // handle fav button
  const handleFavClick = (video) => {
    let favs = JSON.parse(window.localStorage.getItem("fav"));

    // if already exists then remove the list
    if (favs?.title.includes(video.title)) {
      let newArray = arrayRemove(favs, video.title);
      favs.title = newArray;
    } else {
      favs.title.push(video.title);
    }
    setFavs(favs);
    window.localStorage.setItem("fav", JSON.stringify(favs));
  };

  // remove element from fav array
  const arrayRemove = (arr, value) => {
    return arr.title.filter(function (ele) {
      return ele !== value;
    });
  };

  // if the text size is greator than certain limit then
  // use this function to trim the text as per the UI
  const ellipsize = (str, limit) => {
    if (str.length > limit) {
      return `${str.slice(0, limit)}...`;
    }
    return str;
  };

  return (
    <>
      {isPlayerOpen && (
        <VideoPlayer
          show={isPlayerOpen}
          onHide={() => setIsPlayerOpen(false)}
          video={video}
        />
      )}
      <div className='video-item'>
        <img
          onClick={() => handleVideoClick()}
          src={video.thumbnailUrl}
          alt={video.title}
        />
        <span onClick={() => handleVideoClick()} className='video-title'>
          {video.title}
        </span>

        {/* hover details start */}
        <div className='hoverDetails' onClick={() => handleVideoClick()}>
          <span className='video-title'>{video.title}</span>
          <br />
          <br />
          <span className='video-description'>
            {ellipsize(video.description, 150)}
          </span>
        </div>
        {/* hover details end */}

        {/* Fav btn start */}
        <span onClick={() => handleFavClick(video)} className='fav-btn'>
          {favs?.title.includes(video.title) ? (
            <FavoriteIcon style={{ color: "#fff" }} />
          ) : (
            <FavoriteIcon style={{ color: "rgba(0, 0, 0, 0.4)" }} />
          )}
        </span>
        {/* Fav btn end */}
      </div>
    </>
  );
};

export default VideoItem;
