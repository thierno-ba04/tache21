import ReactPlayer from "react-player";

const CoursArchive = ({ archivedVideos }) => {
  return (
    <div>
      <h1>Archived Videos</h1>
      {archivedVideos.length === 0 ? (
        <p>No videos archived yet.</p>
      ) : (
        archivedVideos.map((url, index) => (
          <div key={index}>
            <ReactPlayer url={url} />
          </div>
        ))
      )}
    </div>
  );
};

export default CoursArchive;
