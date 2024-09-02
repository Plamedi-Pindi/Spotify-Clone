import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import "../../index.css";
import logo from "/logo.png";
import Button from "../../components/Button/ButtonComponent";
import LikedSong from "../../components/Library/Playlists";
import { Episodes } from "../../components/Library/Playlists";
import { Playing } from "../../components/Library/RecentPlay";
import Artist from "../../components/Library/Artists";
import A1img from "../../assets/imgs/Artists/A1.jpeg";
import mercy from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import williams from "../../assets/imgs/Artists/Williams McDowel.jpeg";
import omid from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import fatane from "../../assets/imgs/Artists/fatane-rahimi-Agv-xPQBO60-unsplash.jpg";
import {
  BsHouseDoorFill,
  BsBell,
  BsArrowDownCircle,
  BsSearch,
  BsBox2Heart,
  BsPlusLg,
  BsArrowRight,
  BsCollectionPlayFill,
  BsCollectionPlay,
  BsListUl,
  BsPinAngleFill,
  BsDot,
  BsPlayFill,
  BsPlusCircle,
  BsSpeaker,
  BsPause,
  BsPauseCircleFill,
  BsDashCircle,
  BsChevronDown,
  BsThreeDotsVertical,
  BsSkipStartFill,
  BsSkipEndFill,
  BsPlayCircleFill,
  BsCheckCircleFill,
  BsShare,
} from "react-icons/bs";


export default function Layout() {
  const [collapse, setCollapse] =
    useState(false); /* Active collapse to left side box*/
  const [isPlay, setIsPlay] = useState(false); /* Change state to a play mode */
  const [isActive, setIsActive] =
    useState("Home"); /* Change state to: Home, Search, Library, Premium */
  const [playControl, setPlayControl] = useState(false); /* Show control play */
  const [isFavorit, setFavorit] = useState(false);

  let homeActive = isActive === "Home";
  let searchActive = isActive === "Search";
  let LibraryActive = isActive === "Library";
  let PremiumActive = isActive === "Premium";

  function HandleHomeClick() {
    setIsActive("Home");
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

  function handlePlayControlClick() {
    setPlayControl(!playControl);
  }

  function handleFavoritClick(e){
    e.stopPropagation();
    setFavorit(true);
  }
  return (
    <div className="relative">
      {/* =========================== UPP SECTION ============================== */}
      <div className="hidden md:flex md:h-10vh  flex-row items-center justify-between  ">
        <img src={logo} alt="Logo img" className="w-8 ml-7" />
        <div className="flex flex-row items-center">
          <button className="bg-neutral-800 w-11 h-11 rounded-full mr-2 hover:scale-105 duration-300">
            <BsHouseDoorFill className="text-2xl ml-2.5 " />
          </button>
          {/* Search bar */}
          <div className="w-28rm relative flex items-center bg-neutral-800 mr-8 h-11 rounded-full">
            <button className="pl-3 pr-3">
              <BsSearch className=" left-0 z-10 text-2xl text-neutral-400 hover:text-neutral-100 duration-300" />
            </button>
            <input
              type="text"
              className="h-6 w-23rm outline-none border-r border-neutral-300/50 bg-neutral-800 text-neutral-100"
              placeholder="What do you whant to play?"
            />
            <button className=" h-full w-10 rounded-e-full">
              <BsBox2Heart className=" right-0 z-10 text-xl m-3 text-white text-neutral-400 hover:text-neutral-100  hover:scale-105 duration-300" />
            </button>
          </div>
          <button className="hidden xl:block bg-white text-black text-sm font-bold p-1.5 pr-4 pl-4  rounded-2xl mr-6 hover:scale-105 duration-300 ">
            Explore Premium
          </button>
          <a
            href="#"
            className="hidden lg:flex mr-10  items-center font-bold text-sm text-white hover:underline hover:scale-105 duration-300"
          >
            <BsArrowDownCircle className="mr-1 text-base text-white font-extrabold" />
            Install App
          </a>
          <BsBell className="mr-6 text-lg text-neutral-400 font-bold hover:scale-110 hover:text-neutral-100 duration-300" />
          <div className="bg-neutral-900 p-2 rounded-full mr-2 hover:scale-105 duration-500 ">
            <div className="bg-red-500 rounded-full w-8 h-8 pt-2 text-center text-neutral-950 font-bold text-sm  cursor-pointer">
              P
            </div>
          </div>
        </div>
      </div>
      {/* =============================== MIDDLE SECTION ======================================= */}
      <div className="h-100vh md:flex md:h-77vh pl-2 pr-2 ">
        {/* Left Box Content ================================================================= */}
        <div
          className={`hidden md:block md:w-5rm md:bg-neutral-900 rounded-lg mr-2 ${
            !collapse && "lg:w-37rm"
          } `}
        >
          {/*  */}
          <div className={`${!collapse && "lg:h-24p"}  pt-4 h-10p`}>
            <div
              className={`flex justify-center ${
                !collapse && "lg:justify-between"
              }  lg:w-11/12 block mx-auto h-8`}
            >
              <h1
                className={`flex items-center hover:text-neutral-100 duration-200 text-base text-neutral-400 `}
                onClick={handleCollapseClick}
              >
                {!collapse ? (
                  <>
                    <BsCollectionPlayFill className={`text-2xl lg:ml-2 `} />
                    <span className="hidden lg:block  ml-3">Your Library</span>
                  </>
                ) : (
                  <BsCollectionPlay
                    className={`text-2xl  ${collapse && "lg:mr-2"}`}
                  />
                )}
              </h1>
              {/* Collapse control */}
              {!collapse && (
                <div className="hidden flex-row items-center lg:flex">
                  <BsPlusLg className="text-3xl hover:bg-neutral-800 text-neutral-100  duration-200 p-1.5 rounded-full mr-2" />
                  <BsArrowRight className="text-3xl hover:bg-neutral-800 text-neutral-100  duration-200 rounded-full p-1.5" />
                </div>
              )}
            </div>
            {/* Collapse control */}
            {!collapse && (
              <div className="hidden lg:flex w-95p mx-auto justify-around mt-6 flex ">
                <Button> Playlists </Button>
                <Button> Artists </Button>
                <Button> Albums </Button>
                <Button>Podcasts & Shows</Button>
              </div>
            )}
          </div>
          <section
            className={` scrollBehaviour flex justify-center lg:justify-normal lg:mt-0 ${
              !collapse && "lg:h-76p"
            } h-88p overflow-hidden hover:overflow-auto lg:flex-col pb-2`}
          >
            {/* Collapse colntrol */}
            {!collapse && (
              <div className="hidden lg:flex flex-row justify-between items-center text-neutral-400 w-11/12 mx-auto mt-2.5">
                {/* Search in playlirs */}
                <div className=" flex items-center bg-neutral-800 w-48 rounded">
                  <button>
                    <BsSearch className=" ml-2 mr-1" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search in your library"
                    className=" text-sm text-neutral-400 pl-2 p-1 outline-none w-full rounded-e bg-neutral-800"
                  />
                </div>
                {/* Sort by */}
                <h3 className="text-sm font-medium hover:text-neutral-100 hover:scale-105 duration-300 cursor-pointer">
                  <span>Recentes</span>
                  <BsListUl className="inline ml-1 text-2xl" />
                </h3>
              </div>
            )}
            <div className=" w-95p mx-auto mt-2">
              <LikedSong>
                {!collapse && (
                  <div className="hidden lg:block ml-3">
                    <h3 className="text-base font-medium">Liked Songs</h3>
                    <BsPinAngleFill className="inline mr-1.5 text-green-500" />
                    <p className="inline text-sm text-neutral-400">Playlist</p>
                    <BsDot className="inline text-lg text-neutral-400" />
                    <span className="text-sm text-neutral-400">79 songs</span>
                  </div>
                )}
              </LikedSong>
              <Episodes>
                {!collapse && (
                  <div className="hidden lg:block ml-3">
                    <h3 className="text-base font-medium">Your Episodes</h3>
                    <BsPinAngleFill className="inline mr-1.5 text-green-500" />
                    <p className="inline text-sm text-neutral-400">
                      Saved & downloaded episodes
                    </p>
                  </div>
                )}
              </Episodes>
              <Artist
                isCollapsed={!collapse}
                name="Plamedi Pindi"
                imgUrl={A1img}
              />
              <Artist
                isCollapsed={!collapse}
                name="Mercy Chinwo"
                imgUrl={mercy}
              />
              <Artist
                isCollapsed={!collapse}
                name="Williams McDowell"
                imgUrl={williams}
              />
              <Artist isCollapsed={!collapse} name="Omid Armin" imgUrl={omid} />
              <Artist
                isCollapsed={!collapse}
                name="Fatane Rahimi"
                imgUrl={fatane}
              />
            </div>
          </section>
        </div>
        <div className={`md:bg-neutral-900 md:rounded-lg md:w-95p`}>
          {/* PAGES CONTENT */}
          <Outlet />
          {/* PAGES CONTENT */}
        </div>
        {/* Right box optional content ==================== */}
        <div className=""></div>
      </div>
      {/* =============================== BOTTOM SECTION ========================================= */}
      <div className="absolute bottom-0 w-full md:h-14vh md:relative">
        {/* MOBILE NAV START ==================*/}
        <div className="md:hidden">
          {/* MOBILE PLAY SECTION ============*/}
          <section
            className="bg-blue-700/30 h-14 w-95p mx-auto rounded flex justify-between items-center p-2"
            onClick={handlePlayControlClick}
          >
            <Playing
              imgUrl={mercy}
              title="Incredible God"
              name="Mercy Chinwo"
            />
            <div className="flex items-center">

              <BsSpeaker className="text-2xl mr-4 text-white" />

              {isFavorit ? (
                <BsCheckCircleFill 
                  className="text-2xl mr-3 text-green-600" 
                  onClick={handleFavoritClick}
                />
              ) : (
                <BsPlusCircle 
                  className="text-2xl mr-3 text-white" 
                  onClick={handleFavoritClick}
                />
              )}
              
              {isPlay ? (
                <BsPause className="text-4xl text-white" onClick={handlePlayclick} />
              ) : (
                <BsPlayFill className="text-4xl text-white" onClick={handlePlayclick} />
              )}
            </div>
          </section>
          {/* MOBILE NAVBAR ================== */}
          <ul className="bg-neutral-900/50 w-full h-16  flex flex-row justify-around items-center">
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
      </div>

      {/* Modal for playing section ==================================================================*/}
      <div
        className={`w-full h-100vh bg-gradient-to-b from-blue-900 to-neutral-950 absolute p-4 md:hidden ${
          playControl ? "block top-0 duration-100" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center h-9p  ">
          <BsChevronDown onClick={handlePlayControlClick} className="text-xl" />
          <div className="text-center text-sm">
            <p className="">PLAYING FROM ARTIST</p>
            <p className="font-medium">Mercy Chinwo</p>
          </div>
          <BsThreeDotsVertical className="text-xl" />
        </div>
        {/* IMG */}
        <img
          src={mercy}
          alt="Music imaage"
          className="rounded-md w-full h-1/2 sm:w-1/2 mx-auto mt-6"
        />

        {/* Track info */}
        <div className="mt-7 flex justify-between items-center w-full sm:w-1/2 mx-auto h-10p ">
          <div className=" w-3/4">
            <h3 className="text-lg font-medium text-white">Incredible God</h3>
            <p className="text-neutral-400 text-sm">Mercy Chinwo</p>
          </div>
          <div className="flex items-center">
            <BsDashCircle  className="text-2xl mr-4 text-white"/>

            {isFavorit ? (
              <BsCheckCircleFill 
                className="text-2xl text-green-600 " 
                onClick={handleFavoritClick}
              />
            ) : (
            <BsPlusCircle 
              className="text-2xl text-white" 
              onClick={handleFavoritClick}
            />
            )}
          </div>
        </div>

        {/* Track control */}
        <div 
          className="flex w-full justify-center mt-3 items-center sm:w-1/2 mx-auto">
          <BsSkipStartFill className="text-4xl text-white"/>
          {isPlay ? (
            <BsPauseCircleFill 
              className="text-6xl  ml-3 mr-3  text-white"
              onClick={handlePlayclick}
            />
          ) : (
            <BsPlayCircleFill 
              className="text-6xl  ml-3 mr-3  text-white"
              onClick={handlePlayclick}
            />
          )}
          <BsSkipEndFill className="text-4xl  text-white"/>
        </div>

        <div className="flex justify-between items-center">
          <BsSpeaker className="text-xl text-white"/>
          <BsShare className="text-xl text-white"/>
        </div>
      </div>
    </div>
  );

  // EVENT HANDLER ==================================
  function handleCollapseClick() {
    setCollapse(!collapse);
  }

  function handlePlayclick(e) {
    e.stopPropagation();
    setIsPlay(!isPlay);
  }
}
