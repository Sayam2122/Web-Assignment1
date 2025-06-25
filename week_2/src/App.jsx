import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";
import { videos } from "./data/dummyVideos";
function App() {
  const [watchLater, setWatchLater] = useState(() => JSON.parse(sessionStorage.getItem("watchLater")) || []);
  const [likes, setLikes] = useState(() => JSON.parse(sessionStorage.getItem("likes")) || []);
  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
    sessionStorage.setItem("likes", JSON.stringify(likes));
  }, [watchLater, likes]);
  const addToWatchLater = id => {
    const video = videos.find(v => v.id === id);
    if (video && !watchLater.some(v => v.id === id)) {
      setWatchLater([...watchLater, video]);
    }
  };
  const removeFromWatchLater = id => {
    setWatchLater(watchLater.filter(v => v.id !== id));
  };
  const likeVideo = id => {
    if (!likes.includes(id)) setLikes([...likes, id]);
  };
  return (
    <Router>
      <Navbar watchLaterCount={watchLater.length} />
      <Routes>
        <Route path="/" element={<Home onLike={likeVideo} onWatchLater={addToWatchLater} />} />
        <Route path="/watchlater" element={<WatchLater watchLater={watchLater} onRemove={removeFromWatchLater} />} />
      </Routes>
    </Router>
  );
}
export default App;