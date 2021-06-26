import Flickity from "react-flickity-component";
import { Button } from "react-bootstrap";
import "./Carousel.css";
import { useState } from "react";
import { VideoPlayer } from "..";

const Carousel = ({ videos }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [video, setVideo] = useState("");
  const handleVideoClick = (vid) => {
    setVideo(vid);
    setIsPlayerOpen(true);
  };
  const flickityOptions = {
    initialIndex: 3,
    cellAlign: "left",
    contain: true,
    selectedAttraction: 0.2,
    friction: 0.7,
    // wrapAround: true,
    freeScroll: true,
    autoPlay: 4000,
    pageDots: false,
    // groupCells: "80%",
  };
  return (
    <div>
      {isPlayerOpen && (
        <VideoPlayer
          show={isPlayerOpen}
          onHide={() => setIsPlayerOpen(false)}
          video={video}
        />
      )}
      {videos.length > 0 && (
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          static
        >
          {videos.slice(0, 8).map((video, index) => {
            return (
              <div key={index}>
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className='carousel-img'
                />

                <div className='media-container'>
                  <h4 className='carousel-title'>{video.title}</h4>
                  <Button onClick={() => handleVideoClick(video)}>
                    Watch Now
                  </Button>
                </div>
                <div className='carousel-shadow-bottom'></div>
              </div>
            );
          })}
        </Flickity>
      )}
    </div>
  );
};

export default Carousel;
