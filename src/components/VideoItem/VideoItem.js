import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { VideoPlayer } from "../index";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const handleVideoClick = () => {
    setIsPlayerOpen(true);
  };
  const handleFavClick = () => {
    console.log("clicked");
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
        <span onClick={() => handleFavClick()} className='fav-btn'>
          <FavoriteIcon />
        </span>
      </div>
    </>
  );
};

export default VideoItem;
