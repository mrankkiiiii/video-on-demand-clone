import { VideoItem } from "../";
import "./AllVideos.css";

const AllVideos = ({ videos }) => {
    console.log(videos)
  return (
    <div className='all-videos-container'>
      <div style={{textAlign: "center"}}>Tags</div>
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
  );
};

export default AllVideos;
