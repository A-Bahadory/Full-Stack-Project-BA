import { useState, useEffect } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <>
      <p style={{ backgroundColor: "yellow" }}>this is video paragraph !</p>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Videos;
