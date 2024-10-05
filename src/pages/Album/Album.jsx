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

export default function AlbumPage({
  isPlay, // Play state
  handlePlayclick, // Play state event handler
  isFavorit, // Favorit state
  handleFavoritClick, // Favorit state event handler
  jumpinPlaylist, // JumpinPlaylist state
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
      <ul>
        {correntAlbum.map((album) => (
          <li key={album.id}>
            <div className="fixed w-full flex items-center h-8vh bg-transparent p-2">
              <button 
                className="bg-black/40 rounded-full w-10 h-10 flex items-center justify-center mr-10"
                onClick={handleBackClick}
              >
                <BsArrowLeft className="text-2xl text-wite " />
              </button>
              <h2 className="hidden text-sm font-medium">Album Title</h2>
            </div>
            <section className="bg-gradient-to-b from-pink-500/70 pt-4 h-50vh p-2">
              <img src={album.img} alt="" className="w-60p mx-auto h-52 " />
              <h2 className="mt-5 text-xl font-bold"> {album.title} </h2>

              <div className="flex flex-row items-center mt-3">
                <img src={album.img} alt="" className="w-6 h-6 rounded-full" />
                <p className="text-sm ml-3"> {album.name} </p>
              </div>
              <span className="text-sm text-neutral-400 font-light">
                Album . {album.year}
              </span>
              <div className="flex flex-row justify-between items-center mt-2 ">
                <div className="flex flex-row items-center">
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
                  <BsArrowDownCircle className="text-2xl text-neutral-400 mr-6" />
                  <BsThreeDotsVertical className="text-2xl text-neutral-400 mr-6" />
                </div>
                <div className="flex items-center">
                  {/* Set state for list play mode */}
                  {isRandom && (
                    <BsShuffle
                      className="text-2xl text-green-600 mr-4"
                      onClick={handleRepeatallClick}
                    />
                  )}
                  {isRepeatAll && (
                    <BsRepeat
                      className="text-2xl text-green-600 mr-4"
                      onClick={handleRepeatoneClick}
                    />
                  )}
                  {isRepeatOne && (
                    <BsRepeat1
                      className="text-2xl text-green-600 mr-4"
                      onClick={handleRandomClick}
                    />
                  )}
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
