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
import SpotSidebarMenu from "./components/SpotSidebarMenu";

export default function Layout({
  collapse, // Callapse state
  handleCollapseClick, // Callapse state event handler
  isPlay, // Play state
  handlePlayclick, // IsPlay state event handler
  isFavorit, // Favorit state
  handleFavoritClick, // Favorit state event handler
  albumId, // Album state
  isSideMenu,
  setSideMenu,
  onClose
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
          {/* SIDEBAR MENU */}
          <SpotSidebarMenu
            display={`${isSideMenu ? "block" : "hidden"}  `}
            dimension={`${isSideMenu ? "w-80 h-dvh" : "w-0 h-dvh"}  `}
            onClose={onClose}
            setSideMenu={setSideMenu}
          />
          <Outlet />
        </SpotMiddleBox>
      </SpotMainBox>

      <SpotFooter
        isPlay={isPlay}
        handlePlayclick={handlePlayclick}
        isFavorit={isFavorit}
        handleFavoritClick={handleFavoritClick}
        handlePlayControlClick={handlePlayControlClick}
        display={`${isSideMenu && 'hidden'}`}
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
