import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import Musics from "./pages/Music/musics";
import Podcast from "./pages/Podcast/Podcast";
import AlbumPage from "./pages/Album/Album";
import ArtistPage from "./pages/Artist/ArtistPage";

function App() {
  const [collapse, setCollapse] =
    useState(false); /* Active collapse to left side box*/
  
  function handleCollapseClick() {
    setCollapse(!collapse);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/Spotify-Replication"
            element={
              <Layout
                collapse={collapse}
                handleCollapseClick={handleCollapseClick}
              />
            }
          >
            <Route index element={<Home collapse={collapse} />} />
            <Route path="/Spotify-Replication/music" element={<Musics />} />
            <Route path="/Spotify-Replication/podcast" element={<Podcast />} />
            <Route path="/Spotify-Replication/albums" element={<AlbumPage />} />
            <Route path="/Spotify-Replication/artist" element={<ArtistPage />} />
          </Route>
          <Route path="/Spotify-Replication/*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
