import { useContext, createContext } from "react"
import { useState } from "react";

const MediaPlay = createContext();

const MediaPlayContext = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false); //
    const [isFavorit, setIsFavorit] = useState(false); //
    const [isPlaying, SetIsPlaying] = useState(false); //

    return (
        <MediaPlay.Provider value={{
            setIsOpened,
            isOpened,
            isFavorit,
            setIsFavorit,
            isPlaying,
            SetIsPlaying
        }} >
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