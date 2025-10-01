

const ProgressBar = ({ progress, setProgress, audioRef }) => {

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);

        if (audioRef.current) {
            const audio = audioRef.current;

            audio.currentTime = newTime * audio.duration / 100;

            setProgress(newTime);
        }
    }

    return (
        <div className="w-full ">
            <input
                type="range"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1"
            />
        </div>
    )
}

export default ProgressBar