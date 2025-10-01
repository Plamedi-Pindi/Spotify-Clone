
import { useMediaPlayContext } from '../../../context/MediaPlayContext';
import { Playing } from "../../../components/Library/RecentPlay";


import {
    BsPlusCircle,
    BsSpeaker,
    BsPause,
    BsPlayFill,
    BsCheckCircleFill,
} from "react-icons/bs";

const SpotMediaPlay = ({handlePlayAudio, artistImage, musicTitle, artistName}) => {

    const {
        isOpened,
        setIsOpened,
        isFavorit,
        setIsFavorit,
        isPlaying,
    } = useMediaPlayContext()

    const showMediaPlay = () => setIsOpened(!isOpened); // Function to show media player    

    const handleFavoritClick = (e) => { //
        e.stopPropagation();
        setIsFavorit(!isFavorit);
    }

    const handlePlayClick = (e) => {  //
        e.stopPropagation();
        handlePlayAudio();
    }

    // console.log(currentAudioObject?.musics[0]);
    

    return (
        <div
            className={`bg-blue-700 h-14 w-95p  mx-auto rounded flex justify-between items-center p-2 `}
            onClick={showMediaPlay}
        >
            <Playing
                imgUrl={artistImage}
                title={musicTitle}
                name={artistName}
                imgWidth="w-11"
                imgHeight="h-11"
            />

            {/* <p>{currentAudioObject.musics[0].music}</p>  */}

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

                {isPlaying ? (
                    <BsPause
                        className="text-4xl text-white"
                        onClick={handlePlayClick}
                    />
                ) : (
                    <BsPlayFill
                        className="text-4xl text-white"
                        onClick={handlePlayClick}
                    />
                )}
            </div>
        </div>
    )
}

export default SpotMediaPlay

