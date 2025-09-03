// Hooks
import { useState, useEffect } from "react";

//React router
import { Outlet } from "react-router-dom";

// COMPONENT ==============
import SpotNavbar from "./components/SoptNavbar"; // Navebar componets
import SpotLeftSidebarBox from "./components/SpotLeftSidebox"; // Left Sidebar Box
import SpotMainBox from "./components/SpotMainBox"; // Main Box
import SpotMiddleBox from "./components/SpotMiddleBox"; // Middle Box
import SpotMobilePlay from "./components/SpotMobilePlay"; // Mobile Play control
// import jumpinPlaylist from "../../components/PlaylistData/JumpIn.json";
import SpotSidebarMenu from "./components/SpotSidebarMenu";
import { useMediaPlayContext } from '../../context/MediaPlayContext';
import SpotPlayControll from "./components/SpotPlayControll";
import api from "../../services/api";

export default function Layout({
  collapse, // Callapse state
  handleCollapseClick, // Callapse state event handler
  albumId, // Album state
  isSideMenu,
  setSideMenu,
  onClose
}) {

  const [playControl, setPlayControl] = useState(false); // Show control play
  const [jumpinPlaylist, setJumpinPlaylist] = useState([]);

  useEffect(() => {
    const fetchJump = async () => {
      await api.get('/jumplist')
        .then(response => {
          setJumpinPlaylist(response.data);
        })
        .catch(error => {
          console.error("Erro ao buscar dados no jumplist", error);
        })
    }

    fetchJump();
  }, []);

  const { isOpened } = useMediaPlayContext();

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

      <SpotMobilePlay
        playControl={isOpened} // llll
        handlePlayControlClick={handlePlayControlClick}
      />

      <SpotPlayControll
        handlePlayControlClick={handlePlayControlClick}
        display={`${isSideMenu && 'hidden'}`}
      />

    </div>
  );
}
