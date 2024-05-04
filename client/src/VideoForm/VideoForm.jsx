const VideoForm = () => {
  const handleSubmit = () => {
    console.log("testing");
  };
  const AddVideosForm = (
    <form>
      <input type="text" name="title" placeholder="title"></input>
      <input type="text" name="src" placeholder="link"></input>
      <button>send</button>
    </form>
  );

  return AddVideosForm;
};

export default VideoForm;
