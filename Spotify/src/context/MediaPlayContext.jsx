import { useEffect, useRef } from "react";
import { useContext, createContext } from "react"
import { useState } from "react";

import api from "../services/api";

const MediaPlay = createContext();

const MediaPlayContext = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false); //
    const [isFavorit, setIsFavorit] = useState(false); //
    const [isPlaying, setIsPlaying] = useState(false); //
    const [isRandom, setIsRandom] = useState(false); //
    const [collapse, setCollapse] = useState(false); //
    const [artistObjects, setArtistObjects] = useState([]) //
    const [initialSong, setInitialSong] = useState('');
    const [currentArtist, setCurrentArtist] = useState('');
    const [currentAudio, setCurrentAudio] = useState('');
    const [audioIndex, setAudioIndex] = useState(0);
    const [noPrevMucis, setNoPrevMucis] = useState(true);
    const [musicTotalLength, setMusicTotalLength] = useState('00:00');
    const [musicCurrentTime, setMusicCurrentTime] = useState('00:00');
    const [audioProgress, setAudioProgress] = useState(0);
    const [loading, setLoading] = useState(false);



    const audioRef = useRef(null);

    useEffect(() => {
        api.get("/artists/object/5")
            .then((result) => {
                setArtistObjects((prev) => {
                    if (JSON.stringify(prev) === JSON.stringify(result)) {
                        return prev; // não atualiza se for igual
                    }
                    return result;
                });

                // Verificação da existência de elementos nos objetos e listas
                const firstArtist = result?.data?.[0];
                const firstMuisic = firstArtist?.musics?.[0];

                if (firstMuisic?.music) {
                    setInitialSong(firstMuisic.music);
                }

                setCurrentArtist((prev) => {
                    if (JSON.stringify(prev) === JSON.stringify(result)) return prev?.data?.[0];
                    return firstArtist
                });

                result?.musics?.[0] ? setLoading(false) : setLoading(true); 
            })
            .catch((error) => console.error("Ocorreu um erro buscar o artista", error))
    }, []);


    // Play or pouse current song
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

    // Update Current Song
    const updateCurrentSong = (number) => {
        if (audioRef.current) {
            const audio = audioRef.current;
            const musics = currentArtist.musics;

            audio.src = musics[number].music;
            audio.play();
            setIsPlaying(true);
        }
    }


    // Play next song
    const playNextAudio = () => {
        const musics = currentArtist.musics;

        if (audioIndex >= musics.length - 1) {
            let number = 0;
            setAudioIndex(number);
            updateCurrentSong(number)
            setNoPrevMucis(true);
        } else {
            let number = audioIndex + 1;
            setAudioIndex(number);
            updateCurrentSong(number)
            setNoPrevMucis(false);
        }
    }

    // Play previous song
    const playPreviousAudio = () => {
        const musics = currentArtist.musics;

        if (audioIndex <= 0) {
            let number = musics.length - 1;
            setAudioIndex(number);
            updateCurrentSong(number)
        } else {
            let number = audioIndex - 1;
            setAudioIndex(number);
            updateCurrentSong(number)
            setNoPrevMucis(number === 0 && true)
        }
    }

    const audioUpdate = () => {
        if (audioRef.current) {
            const audio = audioRef.current;
            let minutes = Math.floor(audio.duration / 60);
            let seconds = Math.floor(audio.duration % 60);
            let MusicTotlaLength = `
                ${isNaN(minutes) ? '00' : (minutes < 10 ? `0${minutes}` : minutes)} :
                ${isNaN(seconds) ? '00' : (seconds < 10 ? `0${seconds}` : seconds)} 
            `;
            setMusicTotalLength(MusicTotlaLength);

            // Set Music Current Time
            let currentMinutes = Math.floor(audio.currentTime / 60);
            let currentSeconds = Math.floor(audio.currentTime % 60);
            let musicCurrentTime = `
                ${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
                ${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
            `;
            setMusicCurrentTime(musicCurrentTime)

            const progress = (audio.currentTime / audio.duration) * 100;
            setAudioProgress(isNaN(progress) ? 0 : progress);
        }
    }

    return (
        <MediaPlay.Provider value={{
            isOpened, setIsOpened,
            isFavorit, setIsFavorit,
            isPlaying, setIsPlaying,
            collapse, setCollapse,
            isRandom, setIsRandom,
            musicTotalLength, setMusicTotalLength,
            audioProgress, setAudioProgress,
            musicCurrentTime, setMusicCurrentTime,
            loading,
            artistObjects,
            currentArtist,
            initialSong,
            handlePlayAudio,
            playNextAudio,
            playPreviousAudio,
            audioRef,
            audioIndex,
            noPrevMucis,
            audioUpdate,
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