// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componets
import { Playing } from "../../../components/Library/RecentPlay";
import SoptPlayer from "../../../components/Player/SpotPlayeerComponent";
import SpotMediaPlay from "./SpotMediaPlay";

// ASSETS =================
import mercy from "../../../assets/imgs/Artists/Mercy-Chinwolk.jpg";

// Spotify Logo
import logo from "/logo.png";

// REATCT ICONS ============
import {
  BsHouseDoorFill,
  BsSearch,
  BsCollectionPlay,
  BsSpeaker,
  BsFilePlay,
  BsVolumeUp,
  BsMic,
  BsArrowsAngleExpand,
  BsViewList,
} from "react-icons/bs";

export default function SpotPlayControll({
  handlePlayControlClick,
  display
}) {
  const [isActive, setIsActive] = useState("Home"); // Change state to: Home, Search, Library, Premium

  const navigate = useNavigate();

  let homeActive = isActive === "Home";
  let searchActive = isActive === "Search";
  let LibraryActive = isActive === "Library";
  let PremiumActive = isActive === "Premium";

  function HandleHomeClick() {
    setIsActive("Home");
    navigate("/Spotify-Clone");
  }

  function HandleSearchClick() {
    setIsActive("Search");
  }
  function HandleLibraryClick() {
    setIsActive("Library");
  }
  function HandlePremiumClick() {
    setIsActive("Premium");
  }

  return (
    <div className="absolute bottom-0  fixed w-full md:h-14vh md:relative">
      {/* MOBILE NAV START ==================*/}
      <div className= {`md:hidden ${display}`} >
        {/* PLAY SECTION */}
        <SpotMediaPlay onClick={handlePlayControlClick}/>

        {/* NAVBAR ================== */}
        <ul className="bg-neutral-950/90  w-full h-16  flex flex-row justify-around items-center">
          <li
            className="flex flex-col items-center text-neutral-400"
            onClick={HandleHomeClick}
          >
            <BsHouseDoorFill
              className={`text-xl ${homeActive && "text-white"}`}
            />
            <p
              className={`text-xs mt-1 text-neutral-400 ${
                homeActive && "text-white"
              }`}
            >
              Home
            </p>
          </li>
          <li
            className="flex flex-col items-center text-neutral-400"
            onClick={HandleSearchClick}
          >
            <BsSearch className={`text-xl ${searchActive && "text-white"}`} />
            <p
              className={`text-xs mt-1 text-neutral-400 ${
                searchActive && "text-white"
              }`}
            >
              Search
            </p>
          </li>
          <li
            className="flex flex-col items-center text-neutral-400"
            onClick={HandleLibraryClick}
          >
            <BsCollectionPlay
              className={`text-xl ${LibraryActive && "text-white"}`}
            />
            <p
              className={`text-xs mt-1 text-neutral-400 ${
                LibraryActive && "text-white"
              }`}
            >
              Your Library
            </p>
          </li>
          <li
            className="flex flex-col items-center text-neutral-400"
            onClick={HandlePremiumClick}
          >
            <img src={logo} alt="Logo" className="w-5" />
            <p
              className={`text-xs mt-1 text-neutral-400 ${
                PremiumActive && "text-white"
              }`}
            >
              Premium
            </p>
          </li>
        </ul>
      </div>
      {/* MOBILE NAV END*/}

      {/* DESKTOP START */}
      <section className="hidden md:flex justify-between items-center h-full pl-4 pr-4">
        <Playing
          imgUrl={mercy}
          title="Incredible God"
          name="Mercy Chinwo"
          imgWidth="w-14"
          imgHeight="w-14"
        />

        {/* SpotPlayer component */}
        <div className=" w-1/2 flex justify-center">
          <SoptPlayer /> 
        </div>

        <div className="w-1/4 flex items-center space-x-4 justify-end">
          <BsFilePlay
            className="text-lg text-green-600 cursor-pointer"
            title="Now Playing View"
          />
          <BsMic
            className="text-lg text-400 hover:text-white hover:scale-105 duration-300 cursor-pointer"
            title="Lyric"
          />
          <BsViewList
            className="text-lg text-400 hover:text-white hover:scale-105 duration-300 cursor-pointer"
            title="Queue"
          />
          <BsSpeaker
            className="text-lg text-400 hover:text-white hover:scale-105 duration-300 cursor-pointer"
            title="Connect to device"
          />
          <BsVolumeUp
            className="text-xl text-400 hover:text-white hover:scale-105 duration-300 cursor-pointer"
            title="Mute"
          />
          <BsArrowsAngleExpand
            className="text-sm text-400 hover:text-white hover:scale-110 duration-300 cursor-pointer"
            title="Full screen"
          />
        </div>
      </section>
    </div>
  );
}
