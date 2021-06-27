import React, { useState, useEffect } from "react";
import { VideoItem } from "..";

import "./AllVideos.css";

const AllVideos = ({ videos }) => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [favs, setFavs] = useState({ title: [] });

  useEffect(() => {
    let favs = JSON.parse(window.localStorage.getItem("fav"));
    if (!favs || favs.title.length <= 0) {
      window.localStorage.setItem("fav", JSON.stringify({ title: [] }));
    }
    // set favs videos initially from the browser
    setFavs(favs);

    let tagArray = [];

    // getting all tags from the videos array
    Object.entries(videos).map((data) =>
      data[1]["tags"].map((val) => tagArray.push(val))
    );

    // storing unique tags only
    setTags(Array.from(new Set(tagArray)));

    // eslint-disable-next-line
  }, []);

  // handle tag btn
  const handleTagClick = (tag) => {
    // if tag is already selected then set tag empty string
    if (selectedTag === tag) {
      return setSelectedTag("");
    }

    setSelectedTag(tag);
  };
  return (
    <>
      <div className='all-videos-container'>
        <Tags
          tags={tags}
          selectedTag={selectedTag}
          handleTagClick={handleTagClick}
        />
        {selectedTag && <h4>Videos on {selectedTag}</h4>}
        <div className='all-videos'>
          {favs?.title.length <= 0 && selectedTag === "favourites" && (
            <h4>No videos to show</h4>
          )}
          {videos.length > 0 &&
            videos
              .filter((video) => {
                if (selectedTag === "favourites") {
                  if (favs.title.includes(video.title)) return video;
                } else if (video.tags.includes(selectedTag)) return video;
                return null;
              })
              .map((video) => (
                <div className='all-videos-item' key={video.title}>
                  <VideoItem video={video} setFavs={setFavs} favs={favs} />
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
                <VideoItem video={video} setFavs={setFavs} favs={favs} />
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
            style={{ textTransform: tag.length === 2 && "uppercase" }}
          >
            {tag}
          </span>
        ))}
    </div>
  );
};
