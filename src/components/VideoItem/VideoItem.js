import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { VideoPlayer } from "../index";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const handleVideoClick = () => {
    setIsPlayerOpen(true);
  };
  const handleFavClick = (video) => {
    let favs = JSON.parse(window.localStorage.getItem("fav"));
    if (favs?.title.includes(video.title)) {
      favs.title.pop(video.title);
    } else {
      favs.title.push(video.title);
    }

    window.localStorage.setItem("fav", JSON.stringify(favs));
  };

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
        <div className='hoverDetails' onClick={() => handleVideoClick()}>
          <span className='video-title'>{video.title}</span>
          <br />
          <br />
          <span className='video-description'>
            {ellipsize(video.description, 150)}
          </span>
        </div>
        <span onClick={() => handleFavClick(video)} className='fav-btn'>
          {JSON.parse(window.localStorage.getItem("fav"))?.title.includes(
            video.title
          ) ? (
            <FavoriteIcon style={{ color: "#fff" }} />
          ) : (
            <FavoriteIcon style={{ color: "rgba(0, 0, 0, 0.4)" }} />
          )}
        </span>
      </div>
    </>
  );
};

export default VideoItem;
