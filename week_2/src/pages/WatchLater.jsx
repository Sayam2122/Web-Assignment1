import VideoCard from "../components/VideoCard";
function WatchLater({ watchLater, onRemove }) {
  return (
    <div className="p-4">
      {watchLater.map(video => (
        <VideoCard key={video.id} video={video} onLike={() => {}} onWatchLater={() => onRemove(video.id)} />
      ))}
    </div>
  );
}
export default WatchLater;