import React, { useState, useEffect } from "react";
import { VideoItem } from "../";
import "./AllVideos.css";

const AllVideos = ({ videos }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    let favs = JSON.parse(window.localStorage.getItem("fav"));
    if (!favs || favs.title.length <= 0) {
      window.localStorage.setItem("fav", JSON.stringify({ title: [] }));
    }
    let tagArray = [];
    Object.entries(videos).map((data) =>
      data[1]["tags"].map((val) => tagArray.push(val))
    );
    setTags(Array.from(new Set(tagArray)));
  }, []);
  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      return setSelectedTag("");
    }
    setSelectedTag(tag);
  };
  return (
    <>
      <Tags
        tags={tags}
        selectedTag={selectedTag}
        handleTagClick={handleTagClick}
      />
      <div className='all-videos-container'>
        {selectedTag && <h4>Videos on {selectedTag}</h4>}
        <div className='all-videos'>
          {videos.length > 0 &&
            videos
              .filter((video) => {
                if (selectedTag === "favourites") {
                  let favs = JSON.parse(window.localStorage.getItem("fav"));
                  if (favs.title.includes(video.title)) return video;
                } else if (video.tags.includes(selectedTag)) return video;
                return null;
              })
              .map((video) => (
                <div className='all-videos-item' key={video.title}>
                  <VideoItem video={video} />
                </div>
              ))}
        </div>
      </div>
      <div className='all-videos-container'>
        <h4>All Videos</h4>
        <div className='all-videos'>
          {videos.length > 0 &&
            videos.map((video) => (
              <div className='all-videos-item' key={video.title}>
                <VideoItem video={video} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllVideos;

const Tags = ({ tags, handleTagClick, selectedTag }) => {
  return (
    <div className='AlltagContainer'>
      Tags :&nbsp;&nbsp;
      <span
        className={`Alltag ${selectedTag === "favourites" && "active"}`}
        onClick={() => handleTagClick("favourites")}
      >
        Favourites
      </span>
      {tags.length > 0 &&
        tags.map((tag) => (
          <span
            onClick={() => handleTagClick(tag)}
            key={tag}
            className={`Alltag ${selectedTag === tag && "active"}`}
          >
            {tag}
          </span>
        ))}
    </div>
  );
};
