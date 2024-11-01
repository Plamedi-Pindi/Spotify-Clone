// Hooks
import { useState } from "react";

//React router
import { Outlet } from "react-router-dom";

// COMPONENT ==============
import SpotNavbar from "./components/SoptNavbar"; // Navebar componets
import SpotLeftSidebarBox from "./components/SpotLeftSidebox"; // Left Sidebar Box
import SpotMainBox from "./components/SpotMainBox"; // Main Box
import SpotMiddleBox from "./components/SpotMiddleBox"; // Middle Box
import SpotFooter from "./components/SpotFooter"; // Footer
import SpotMobilePlay from "./components/SpotMobilePlay"; // Mobile Play control
import jumpinPlaylist from "../../components/PlaylistData/JumpIn.json";

export default function Layout({
  collapse, // Callapse state
  handleCollapseClick, // Callapse state event handler
  isPlay, // Play state
  handlePlayclick, // IsPlay state event handler
  isFavorit, // Favorit state
  handleFavoritClick, // Favorit state event handler
  albumId, // Album state
}) {
  const [playControl, setPlayControl] = useState(false); // Show control play

  const correntAlbum = jumpinPlaylist.filter((album) => album.id == albumId);

  // ====
  function handlePlayControlClick() {
    setPlayControl(!playControl);
  }

  return (
    <div className="relative">
      <SpotNavbar />

      <SpotMainBox>
        <SpotLeftSidebarBox
          collapse={collapse}
          handleCollapseClick={handleCollapseClick}
        />
        
        <SpotMiddleBox>
          <Outlet />
        </SpotMiddleBox>
      </SpotMainBox>

      <SpotFooter
        isPlay={isPlay}
        handlePlayclick={handlePlayclick}
        isFavorit={isFavorit}
        handleFavoritClick={handleFavoritClick}
        handlePlayControlClick={handlePlayControlClick}
      />

      <SpotMobilePlay
        isPlay={isPlay}
        handlePlayclick={handlePlayclick}
        isFavorit={isFavorit}
        handleFavoritClick={handleFavoritClick}
        playControl={playControl}
        handlePlayControlClick={handlePlayControlClick}
      />
    </div>
  );
}
