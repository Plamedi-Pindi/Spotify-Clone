import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  BsArrowLeft,
  BsPlusCircle,
  BsArrowDownCircle,
  BsThreeDotsVertical,
  BsPlayCircleFill,
  BsRepeat,
  BsRepeat1,
  BsShuffle,
  BsPauseCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

// Components
import jumpinPlaylist from "../../components/PlaylistData/JumpIn.json";

export default function AlbumPage({
  isPlay, // Play state
  handlePlayclick, // Play state event handler
  isFavorit, // Favorit state
  handleFavoritClick, // Favorit state event handler
}) {
  //STATES
  const [listPlayMode, setListPlayMode] = useState("Random"); // States: Random, RepeatAll, RepeatOne

  const { id } = useParams(); // Accessing params
  const navigate = useNavigate();

  const isRandom = listPlayMode === "Random";
  const isRepeatAll = listPlayMode === "RepeatAll";
  const isRepeatOne = listPlayMode === "RepeatOne";
  const correntAlbum = jumpinPlaylist.filter(
    (album) => album.id === parseInt(id)
  );

  return (
    <>
      <ul className=" w-full">
        {correntAlbum.map((album) => (
          <li key={album.id}>

            {/* Render previous-page-return Icon */}
            <div className="fixed w-full flex items-center h-8vh bg-transparent p-2">
              <button
                className="bg-black/40 rounded-full w-10 h-10 flex items-center justify-center mr-10"
                onClick={handleBackClick}
              >
                <BsArrowLeft className="text-2xl text-wite " />
              </button>
              <h2 className="hidden text-sm font-medium">Album Title</h2>
            </div>
            {/*  */}

            {/* Main content */}
            <section className="bg-gradient-to-b from-pink-500/70 pt-4 h-50vh p-2">
              {/* Render Album image */}
              <img src={album.img} className="w-56 mx-auto h-52 object-cover" />
              {/* Render Album title */}
              <h2 className="mt-5 text-xl font-bold"> {album.title} </h2>

              {/* Display Author litle info */}
              <div className="flex flex-row items-center mt-3">
                {/* author image */}
                <img src={album.img} alt="" className="w-6 h-6 object-cover rounded-full" />
                {/* Author name */}
                <p className="text-sm ml-3"> {album.name} </p>
              </div>
              {/* Album release data */}
              <span className="text-sm text-neutral-400 font-light">
                Album . {album.year}
              </span>
              {/* Others commands */}
              <div className="flex flex-row justify-between items-center mt-2 ">

                <div className="flex flex-row items-center">
                  {/* Render icon to Set Album as a favorit */}
                  {isFavorit ? (
                    <BsCheckCircleFill
                      className="text-2xl text-green-600 mr-6"
                      onClick={handleFavoritClick}
                    />
                  ) : (
                    <BsPlusCircle
                      className="text-2xl text-neutral-400 mr-6"
                      onClick={handleFavoritClick}
                    />
                  )}
                  {/* Render icon to download the album */}
                  <BsArrowDownCircle className="text-2xl text-neutral-400 mr-6" />

                  {/* Render icon to display mor option */}
                  <BsThreeDotsVertical className="text-2xl text-neutral-400 mr-6" />
                </div>

                
                <div className="flex items-center">

                  {/* Render icon to switch play mode */}
                  {isRandom && (
                    // Shitch to Shuffle mode
                    <BsShuffle
                      className="text-2xl text-green-600 mr-4"
                      onClick={handleRepeatallClick}
                    />
                  )}
                  {isRepeatAll && (
                    // Shitch to Repeat all mode
                    <BsRepeat
                      className="text-2xl text-green-600 mr-4"
                      onClick={handleRepeatoneClick}
                    />
                  )}
                  {isRepeatOne && (
                    // Shitch to Repeat one mode
                    <BsRepeat1
                      className="text-2xl text-green-600 mr-4"
                      onClick={handleRandomClick}
                    />
                  )}

                  {/* Render Play and pouse audio icons */}
                  {isPlay ? (
                    <BsPauseCircleFill
                      className="text-5xl text-green-600"
                      onClick={handlePlayclick}
                    />
                  ) : (
                    <BsPlayCircleFill
                      className="text-5xl text-green-600"
                      onClick={handlePlayclick}
                      key={id}
                    />
                  )}
                </div>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </>
  );

  // EVENT HANDLERS FOR LIST PLAY MODE
  function handleRandomClick() {
    setListPlayMode("Random");
  }
  function handleRepeatallClick() {
    setListPlayMode("RepeatAll");
  }
  function handleRepeatoneClick() {
    setListPlayMode("RepeatOne");
  }

  //
  function handleBackClick() {
    navigate(`/Spotify-Clone `);
  }
}
