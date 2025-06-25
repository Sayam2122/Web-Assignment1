function VideoCard({ video, onLike, onWatchLater }) {
  return (
    <div className="border p-2">
      <img src={video.thumbnail} alt="thumb" />
      <h3>{video.title}</h3>
      <p>{video.channel}</p>
      <p>{video.views} • {video.time}</p>
      <div className="flex gap-2 mt-2">
  <button
    onClick={() => onLike(video.id)}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  >
    ❤️ Like
  </button>
  <button
    onClick={() => onWatchLater(video.id)}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    ➕ Watch Later
  </button>
</div>

    </div>
  );
}
export default VideoCard;