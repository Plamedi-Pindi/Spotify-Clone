
import { useMediaPlayContext } from '../../../context/MediaPlayContext';
import { Playing } from "../../../components/Library/RecentPlay";

// Imgs
import mercy from "../../../assets/imgs/Artists/Mercy-Chinwolk.jpg";

import {
    BsPlusCircle,
    BsSpeaker,
    BsPause,
    BsPlayFill,
    BsCheckCircleFill,
} from "react-icons/bs";

const SpotMediaPlay = () => {

    const {
        isOpened,
        setIsOpened,
        isFavorit,
        setIsFavorit,
        isPlaying,
        SetIsPlaying
    } = useMediaPlayContext()

    const showMediaPlay = () => setIsOpened(!isOpened); // Function to show media player    

    const handleFavoritClick = (e) => { //
        e.stopPropagation();
        setIsFavorit(!isFavorit);
    } 

    const handlePlayClick = (e) => {  //
        e.stopPropagation();
        SetIsPlaying(!isPlaying)
    } 


    return (
        <div
            className={`bg-blue-700 h-14 w-95p  mx-auto rounded flex justify-between items-center p-2 `}
            onClick={showMediaPlay}
        >
            <Playing
                imgUrl={mercy}
                title="Incredible God"
                name="Mercy Chinwo"
                imgWidth="w-11"
                imgHeight="h-11"
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