import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

function Home({ onLike, onWatchLater }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {videos.map(video => (
          <VideoCard
            key={video.id}
            video={video}
            onLike={onLike}
            onWatchLater={onWatchLater}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
