import { useRef } from "react";
import { useContext, createContext } from "react"
import { useState } from "react";

const MediaPlay = createContext();

const MediaPlayContext = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false); //
    const [isFavorit, setIsFavorit] = useState(false); //
    const [isPlaying, setIsPlaying] = useState(false); //
    const [collapse, setCollapse] = useState(false); //

    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            const audio = audioRef.current;

            if (audio.paused) {
                setIsPlaying(true)
                audio.play();
            } else {
                setIsPlaying(false);
                audio.pause()
            }
        }
    }

    return (
        <MediaPlay.Provider value={{
            setIsOpened,
            isOpened,
            isFavorit,
            setIsFavorit,
            isPlaying,
            setIsPlaying,
            setCollapse,
            collapse,
            handlePlayAudio
        }} >
            <audio
                ref={audioRef}
                src="http://127.0.0.1:3000/music/audio1.mp3"
            >

            </audio>
            {children}
        </MediaPlay.Provider>
    )
}

export default MediaPlayContext;

export const useMediaPlayContext = () => {
    const context = useContext(MediaPlay);

    if (!context) {
        throw new Error("Houve um erro no MediaPlayContext!");
    }

    return context;
}