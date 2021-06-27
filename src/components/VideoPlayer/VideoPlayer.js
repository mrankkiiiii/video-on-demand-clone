import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Modal, ModalBody } from "react-bootstrap";
import "./VideoPlayer.css";

const VideoPlayer = ({ show, onHide, video }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreBtn = () => {
    setShowMore(!showMore);
  };
  return (
    <div>
      <Modal centered show={show} onHide={onHide}>
        <ModalBody style={{ padding: "0" }}>
          <ReactPlayer
            url={video.videolink}
            playing={true}
            controls={true}
            pip={true}
            width='100%'
          />
          <div className='details'>
            <h3 className='title'>{video.title}</h3>
            {video.tags.map((tag) => (
              <span key={tag} className='tag'>
                {tag}
              </span>
            ))}
            <br />
            <br />
            {!showMore ? (
              <span className='description'>{video.description}</span>
            ) : (
              <span className='description'>Click to read description</span>
            )}
            <span
              onClick={() => handleShowMoreBtn()}
              className='description'
              style={{ color: "#0c5188", cursor: "pointer" }}
            >
              <i> {showMore ? "show more" : "show less"}</i>
            </span>
          </div>
        </ModalBody>
        <span onClick={onHide} className='clsbtn'>
          <svg
            height='16pt'
            viewBox='0 0 512 512'
            width='16pt'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0' />
            <path d='m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0' />
            <path d='m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0' />
          </svg>
        </span>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
