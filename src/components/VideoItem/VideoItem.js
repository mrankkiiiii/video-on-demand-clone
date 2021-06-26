import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { VideoPlayer } from "../index";
import "./VideoItem.css";
const VideoItem = ({ video }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const handleVideoClick = () => {
    setIsPlayerOpen(true);
  };
  // console.log(video);
  const handleFavClick = (video) => {
    let favs = JSON.parse(window.localStorage.getItem("fav"));
    if (favs?.title.includes(video.title)) {
      favs.title.pop(video.title);
    } else {
      favs.title.push(video.title);
    }

    window.localStorage.setItem("fav", JSON.stringify(favs));
    // console.log("clicked");
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
