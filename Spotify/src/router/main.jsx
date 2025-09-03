// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Layout from "../pages/Layout";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage";
import Musics from "../pages/Music/musics";
import Podcast from "../pages/Podcast/Podcast";
import AlbumPage from "../pages/Album/Album";
import ArtistPage from "../pages/Artist/ArtistPage";
import AboutArtist from "../pages/Artist/AboutArtist";
import ProfileViews from "../pages/Profil/ProfileViews";

import { useState } from "react";

const MainRouter = () => {

    const [collapse, setCollapse] = useState(false); // Active collapse to left side box
    const [albumId, setAlbumId] = useState(1);
    const [isMenuDisplay, setIsMenuDisplay] = useState(false); // Sidebar Menu

    //
    const handleSidebarMenuClick = () => {
        setIsMenuDisplay(true);
    };

    //
    const handleSidebarMenuOff = () => {
        setIsMenuDisplay(false);
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
                                albumId={albumId} // props for Album Id
                                isSideMenu={isMenuDisplay}
                                onClose={handleSidebarMenuOff}
                                setSideMenu={setIsMenuDisplay}
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
                        <Route path="/Spotify-Clone/podcast" element={<Podcast isMenuOn={isMenuDisplay} sideMenu={setIsMenuDisplay} />} />
                        <Route
                            path="/Spotify-Clone/albums/:id"
                            element={
                                <AlbumPage  />
                            }
                        />

                        {/* Artist page route */}
                        <Route path="/Spotify-Clone/artist/:id" element={<ArtistPage />} />

                        {/* About artist page route  */}
                        <Route
                            path="/Spotify-Clone/artist/aboutArtist/:id"
                            element={<AboutArtist />}
                        />

                        {/* User Profile page route */}
                        <Route path="/Spotify-Clone/userprofile" element={<ProfileViews />} />


                    </Route>

                    <Route path="/Spotify-Clone/*" element={<NoPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainRouter;
