import "./App.css";
import Videos from "./videos/videos.jsx";
import VideoForm from "./VideoForm/VideoForm.jsx";

function App() {
  return (
    <>
      <p style={{ backgroundColor: "yellow" }}> video Recommendations </p>
      <Videos />
      <VideoForm />
    </>
  );
}

export default App;
