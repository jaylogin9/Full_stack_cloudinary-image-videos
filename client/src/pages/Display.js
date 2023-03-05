import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const {id} = useParams()
  const [video, setVideo] = useState([]);
  const videoRef = useRef('false');

  useEffect(() => {
    async function fetchData() {
      try {
        const video = await axios.post(`https://full-stack-cloudinary-image-videos-backend.vercel.app/display/${id}`);
        setVideo(video.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
     // eslint-disable-next-line
  }, [])


  return (
    <div className="container mt-2">
      <h2> Video Display</h2>
      <video ref={videoRef} width="320" height="240" src={video} controls autoPlay />
    </div>
  );
};

export default VideoPlayer;
