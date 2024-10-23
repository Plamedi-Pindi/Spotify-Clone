
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

import jumpin from "./components/PlaylistData/JumpIn.json"; //

function App() {
  const [collapse, setCollapse] = useState(false); // Active collapse to left side box
  const [isPlay, setIsPlay] = useState(false); // Change state to a play mode
  const [isFavorit, setFavorit] = useState(false); // Chandge state to set a favorit album, playlist or music
  const [jumpinPlaylist, setjumpinPlaylist] = useState(jumpin); // Album list object variable state
  const [albumId, setAlbumId] = useState(1);


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
                albumId={albumId}  // props for Album Id
                jumpinPlaylist={jumpinPlaylist} // Props for jumpinPlaylist state
              />
            }
          >
            <Route
              index
              element={
                <Home
                  collapse={collapse}
                  jumpinPlaylist={jumpinPlaylist}
                  setAlbumId={setAlbumId}
                />
              }
            />
            <Route path="/Spotify-Clone/music" element={<Musics collapse={collapse}/>} />
            <Route path="/Spotify-Clone/podcast" element={<Podcast />} />
            <Route
              path="/Spotify-Clone/albums/:id"
              element={
                <AlbumPage
                  isPlay={isPlay} //Props for Play state
                  handlePlayclick={handlePlayclick} // Props for Play state event handler
                  isFavorit={isFavorit} // Props for Favorit state
                  handleFavoritClick={handleFavoritClick} // Props for Favorit event handler
                  jumpinPlaylist={jumpinPlaylist} // Props for JumpinPlaylist state
                />
              }
            />
            <Route
              path="/Spotify-Clone/artist/:id"
              element={<ArtistPage jumpinPlaylist={jumpinPlaylist}/>}
            />
            
            <Route path="/Spotify-Clone/artist/aboutArtist/:id" element={<AboutArtist />} />
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
