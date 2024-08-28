import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import "../../index.css";
import logo from "/logo.png";
import Button from "../../components/Button/ButtonComponent";
import LikedSong from "../../components/Library/Playlists";
import { Episodes } from "../../components/Library/Playlists";
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
} from "react-icons/bs";

export default function Layout() {
  const [collapse, setCollapse] =
    useState(false); /* Define if LeftBox Content is collapsed or not */

  return (
    <div>
      {/* =========================== UPP SECTION ============================== */}
      <div className="w-full h-9vh mt-2 flex flex-row items-center justify-between">
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
          <button className="bg-white text-black text-sm font-bold p-1.5 pr-4 pl-4  rounded-2xl mr-6 hover:scale-105 duration-300">
            Explore Premium
          </button>
          <a
            href="#"
            className="mr-10 flex items-center font-bold text-sm text-white hover:underline hover:scale-105 duration-300"
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
      <div className="flex flex-row justify-between p-2 pb-0 h-86vh">
        {/* Left box content and control ===============*/}
        <div
          className={`h-full  ${
            !collapse ? "basis-23p" : "basis-20"
          }  flex flex-col justify-between overflow-hidden relative`}
        >
          <div className="bg-neutral-900 w-full h-full basis-full rounded-lg pt-5">
            <div
              className={`flex flex-row block mx-auto ${
                !collapse ? "justify-between" : "justify-center"
              } items-center w-11/12 `}
            >
              {/* collapse dependent */}
              <h2
                title="Collapse Your Library "
                className="text-base font-medium text-neutral-400 hover:text-neutral-100 duration-200 flex items-center cursor-pointer p-1.5"
                onClick={handleCollapseClick}
              >
                {collapse ? (
                  <BsCollectionPlay className="text-3xl mr-3" />
                ) : (
                  <>
                    <BsCollectionPlayFill className="text-2xl mr-3" />
                    <span>Your Library</span>
                  </>
                )}
              </h2>
              {/* collapse dependent */}
              {!collapse && (
                <div className="flex flex-row items-center">
                  <BsPlusLg className="text-3xl hover:bg-neutral-800 text-neutral-100  duration-200 p-1.5 rounded-full mr-2" />
                  <BsArrowRight className="text-3xl hover:bg-neutral-800 text-neutral-100  duration-200 rounded-full p-1.5" />
                </div>
              )}
            </div>
            {/* collapse dependent */}
            {!collapse && (
              <div className="w-full justify-center mt-6 flex">
                <Button> Playlists </Button>
                <Button> Artists </Button>
                <Button> Albums </Button>
                <Button>Podcasts & Shows</Button>
              </div>
            )}
            <section
              className={`scrollBehaviour mt-3 overflow-y-hidden hover:overflow-y-auto ${
                !collapse ? " h-23rm" : " h-25rm"
              } relative `}
            >
              {/* collapse dependent */}
              {!collapse && (
                <div className="flex flex-row justify-between items-center text-neutral-400 w-95p mx-auto ">
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
              {/* Library Cards */}
              {/*  */}
              <ul className={` ${!collapse && "mt-4"} w-96p mx-auto pb-4`}>
                <LikedSong>
                  {!collapse && (
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Liked Songs</h3>
                      <BsPinAngleFill className="inline mr-1.5 text-green-500" />
                      <p className="inline text-sm text-neutral-400">
                        Playlist
                      </p>
                      <BsDot className="inline text-lg text-neutral-400" />
                      <span className="text-sm text-neutral-400">79 songs</span>
                    </div>
                  )}
                </LikedSong>
                <Episodes>
                  {!collapse && (
                    <div className="ml-3">
                      <h3 className="text-base font-medium">Your Episodes</h3>
                      <BsPinAngleFill className="inline mr-1.5 text-green-500" />
                      <p className="inline text-sm text-neutral-400">
                        Saved & downloaded episodes
                      </p>
                    </div>
                  )}
                </Episodes>
                {/* Artists */}
                <Artist
                  isCollapse={collapse}
                  name="Plamedi Pindi"
                  imgUrl={A1img}
                />
                <Artist
                  isCollapse={collapse}
                  name="Mercy Chinwo"
                  imgUrl={mercy}
                />
                <Artist
                  isCollapse={collapse}
                  name="Williams McDowell"
                  imgUrl={williams}
                />
                <Artist isCollapse={collapse} name="Omid Armin" imgUrl={omid} />
                <Artist
                  isCollapse={collapse}
                  name="Fatane Rahimi"
                  imgUrl={fatane}
                />
              </ul>
              {/*  */}
            </section>
          </div>
        </div>
        {/* MAIN BOX DISPLAY CONTENT ====================*/}
        <div className={`bg-neutral-900  h-full  rounded-lg ${!collapse ? 'basis-54p' : 'basis-72p'}`}>
          {/* PAGES CONTENT */}
          <Outlet />
          {/* PAGES CONTENT */}
        </div>
        {/* Right box optional content ==================== */}
        <div className="bg-neutral-900 w-52 h-52 h-full basis-22p rounded-lg"></div>
      </div>
      {/* =============================== BOTTOM SECTION ========================================= */}
      <div className=" w-full h-14vh"></div>
    </div>
  );

  // EVENT HANDLER ==================================
  function handleCollapseClick() {
    setCollapse(!collapse);
  }
}
