// CSS
import "./index.css";

// Hooks
import { useState } from "react";

// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import Musics from "./pages/Music/musics";
import Podcast from "./pages/Podcast/Podcast";
import AlbumPage from "./pages/Album/Album";
import ArtistPage from "./pages/Artist/ArtistPage";
import AboutArtist from "./pages/Artist/AboutArtist";

function App() {
  const [collapse, setCollapse] = useState(false); // Active collapse to left side box
  const [isPlay, setIsPlay] = useState(false); // Change state to a play mode
  const [isFavorit, setFavorit] = useState(false); // Chandge state to set a favorit album, playlist or music
  const [albumId, setAlbumId] = useState(1);
  const [isMenuDisplay, setIsMenuDisplay] = useState(false); // Sidebar Menu

  //
  const handleSidebarMenuClick = () => {
    setIsMenuDisplay(!isMenuDisplay);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/Spotify-Clone"
            element={
              <Layout
                collapse={collapse} // Props for collapse state
                handleCollapseClick={handleCollapseClick} // props for collapse state event handler
                isPlay={isPlay} // Props for Play state
                handlePlayclick={handlePlayclick} // Props for Play state event handler
                isFavorit={isFavorit} // Props for Favorit state
                handleFavoritClick={handleFavoritClick} // Props for Favorit state event handler
                albumId={albumId} // props for Album Id
                isSideMenu={isMenuDisplay}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  collapse={collapse}
                  sideMenu={handleSidebarMenuClick}
                  isMenuOn={isMenuDisplay}
                />
              }
            />
            <Route
              path="/Spotify-Clone/music"
              element={<Musics collapse={collapse} isMenuOn={isMenuDisplay} sideMenu={setIsMenuDisplay} />}
            />
            <Route path="/Spotify-Clone/podcast" element={<Podcast isMenuOn={isMenuDisplay} sideMenu={setIsMenuDisplay}  />} />
            <Route
              path="/Spotify-Clone/albums/:id"
              element={
                <AlbumPage
                  isPlay={isPlay} //Props for Play state
                  handlePlayclick={handlePlayclick} // Props for Play state event handler
                  isFavorit={isFavorit} // Props for Favorit state
                  handleFavoritClick={handleFavoritClick} // Props for Favorit event handler
                  
                />
              }
            />
            <Route path="/Spotify-Clone/artist/:id" element={<ArtistPage />} />

            <Route
              path="/Spotify-Clone/artist/aboutArtist/:id"
              element={<AboutArtist />}
            />
          </Route>

          <Route path="/Spotify-Clone/*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );

  // EVENT HANDLER FOR COLLAPSE STATE
  function handleCollapseClick() {
    setCollapse(!collapse);
  }
  // EVENT HANDLER FOR PLAY STATE
  function handlePlayclick(e) {
    e.stopPropagation();
    setIsPlay(!isPlay);
  }
  // EVENT HANDLER FOR FAVORIT STATE
  function handleFavoritClick(e) {
    e.stopPropagation();
    setFavorit(!isFavorit);
  }
}

export default App;
