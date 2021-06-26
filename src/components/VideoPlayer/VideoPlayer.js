import React from "react";
import ReactPlayer from "react-player";
import { Modal, ModalBody } from "react-bootstrap";

const style = {
  details: {
    padding: "0 15px 15px",
  },
  tag: {
    border: "1px solid gray",
    padding: "5px 10px",
    marginRight: "10px",
    borderRadius: "10px",
    color: "#0c5188",
  },
  title: {
    color: "#0c5188",
    fontWeight: "700",
  },
};
const VideoPlayer = ({ show, onHide, video }) => {
  return (
    <div>
      <Modal centered show={show} onHide={onHide}>
        <ModalBody style={{ padding: "0" }}>
          <ReactPlayer
            // className='react-player'
            url={video.videolink}
            playing={true}
            controls={true}
            pip={true}
            width='100%'
            // height='100%'
          />
          <div style={style.details}>
            <h3 style={style.title}>{video.title}</h3>
            {video.tags.map((tag) => (
              <span key={tag} style={style.tag}>
                {tag}
              </span>
            ))}
            <br />
            <br />
            <span>{video.description}</span>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VideoPlayer;
