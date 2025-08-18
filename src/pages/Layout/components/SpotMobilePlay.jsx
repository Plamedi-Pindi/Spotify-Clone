// ASSETS =================
import mercy from "../../../assets/imgs/Artists/Mercy-Chinwolk.jpg";

// REATCT ICONS ============
import {
  BsPlusCircle,
  BsSpeaker,
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

export default function SpotMobilePlay({
  handlePlayControlClick,
  playControl,
  isFavorit,
  handleFavoritClick,
  isPlay,
  handlePlayclick
}) {
  return (
    <div
      className={`w-full h-dvh bg-gradient-to-b from-blue-900 to-neutral-950 absolute p-4 md:hidden ${
        playControl ? "block top-0 duration-100" : "hidden"
      } z-40`}
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
          <BsDashCircle className="text-2xl mr-4 text-white" />

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
      <div className="flex w-full justify-center mt-3 items-center sm:w-1/2 mx-auto">
        <BsSkipStartFill className="text-4xl text-white" />
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
        <BsSkipEndFill className="text-4xl  text-white" />
      </div>

      <div className="flex justify-between items-center">
        <BsSpeaker className="text-xl text-white" />
        <BsShare className="text-xl text-white" />
      </div>
    </div>
  );
}
