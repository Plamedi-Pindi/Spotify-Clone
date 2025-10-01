
// REATCT ICONS  
import {
  BsPlusCircle,
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

import {
  MonitorSpeaker,
  Shuffle,
  Timer
} from 'lucide-react';

// Import React Context
import { useMediaPlayContext } from '../../../context/MediaPlayContext';

// Import Components
import ProgressBar from "../../../components/Progress Bar/ProgressBar";

export default function SpotMobilePlay() {

  // Context Call
  const {
    isOpened, setIsOpened,
    isFavorit, setIsFavorit,
    isRandom, setIsRandom,
    audioProgress, setAudioProgress,
    musicCurrentTime, setMusicCurrentTime,
    musicTotalLength, setMusicTotalLength,
    isPlaying,
    handlePlayAudio,
    playNextAudio,
    playPreviousAudio,
    currentArtist,
    audioIndex,
    noPrevMucis,
    audioRef,
    audioUpdate
  } = useMediaPlayContext();


  const musicTitle = currentArtist?.musics?.[audioIndex]?.title || "";
  let loading = false;
  currentArtist?.musics?.[audioIndex] ? loading = false : loading = true;


  const openMedia = () => setIsOpened(!isOpened);

  const handleFavoritClick = () => {
    setIsFavorit(!isFavorit);
  }

  return (
    <div
      className={`w-full h-[100dvh] bg-gradient-to-b from-blue-900 to-neutral-950 absolute p-4 md:hidden ${isOpened ? "block top-0 duration-100" : "hidden"
        } z-40`}
    >

      <div className="flex justify-between items-center h-9p  ">
        <BsChevronDown onClick={openMedia} className="text-xl" />
        <div className="text-center text-sm">
          <p className="text-sm">PLAYING FROM ARTIST</p>
          <p className="font-medium text-sm">{!loading ? currentArtist.name : 'Processando...'}</p>
        </div>
        <BsThreeDotsVertical className="text-xl" />
      </div>

      {/* IMG */}
      <img
        src={currentArtist.img}
        alt="Music image"
        className="rounded-md w-full h-[45%] sm:w-1/2 mx-auto mt-6 object-cover"
      />

      {/* Track info */}
      <div className="mt-7 flex justify-between items-center w-full sm:w-1/2 mx-auto h-10p ">
        {!loading ? (
          <div className=" w-3/4">
            <h3 className="text-lg font-medium text-white">{musicTitle}</h3>
            <p className="text-neutral-400 text-sm">{currentArtist.name}</p>
          </div>
        ) : (
          <p className="text-neutral-400 text-sm">Processando...</p>
        )}

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

      {/* Progress */}
      <section className="mt-3">

        {/* Progress Bar */}
        <ProgressBar
          audioRef={audioRef}
          progress={audioProgress}
          setProgress={setAudioProgress}
        />

        <div className="w-full flex justify-between items-center mt-2 ">
          <span className="block text-xs text-gray-500">{musicCurrentTime}</span>
          <span className="block text-xs text-gray-500">{musicTotalLength}</span>
        </div>
      </section>

      {/* Track control */}
      <div className="flex w-full justify-center mt-3 items-center sm:w-1/2 mx-auto mb-2">

        {/* Definir Aleatorio */}
        <Shuffle
          onClick={() => setIsRandom(!isRandom)}
          className={`w-6 ${isRandom ? 'text-green-500' : 'text-gray-200'}`}
        />

        <div className="flex w-full justify-center items-center">
          {/* Set previous song */}
          <BsSkipStartFill
            onClick={!noPrevMucis ? playPreviousAudio : undefined}
            className={`text-4xl ${noPrevMucis ? 'text-gray-700' : 'text-white'} `}
          />

          {/* Play and Pouse */}
          {isPlaying ? (
            <BsPauseCircleFill
              className="text-6xl  ml-3 mr-3  text-gray-200"
              onClick={handlePlayAudio}
            />
          ) : (
            <BsPlayCircleFill
              className="text-6xl  ml-3 mr-3  text-gray-200"
              onClick={handlePlayAudio}
            />
          )}

          {/* Set next song */}
          <BsSkipEndFill
            onClick={playNextAudio}
            className="text-4xl  text-gray-200"
          />
        </div>

        {/* Temporizador */}
        <Timer className="w-7" />

      </div>

      <div className="flex justify-between items-center">
        <MonitorSpeaker className="w-7" />
        <BsShare className="text-xl text-white" />
      </div>
    </div>
  );
}
