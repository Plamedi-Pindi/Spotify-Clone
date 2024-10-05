// Hooks
import { useRef, useState } from "react";

// Components
import { ProgressBar } from "../ProgressBar/ProgressBar";

// REATCT ICONS ============
import {
  BsRepeat,
  BsShuffle,
  BsSkipStartFill,
  BsSkipEndFill,
  BsPlayCircleFill,
} from "react-icons/bs";

export default function SoptPlayer() {
  const [progress, setProgress] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [isOverProgBar, setIsOverProgBar] = useState(false);

  const progressBarRef = useRef(0);

  // Calculate the progress value in purcentage
  const calculateProgress = (e) => {
    const progressBar = progressBarRef.current; // get div container (element DOM) reference
    const rect = progressBar.getBoundingClientRect(); // get the DOM element position and dimension
    const offsetX = e.clientX - rect.left // Get the mouse click position of the container element
    const width = rect.width; // get the total width of the container element
    const newProgress = Math.min(Math.max((offsetX / width) * 100, 0),100) // Limit the result in [0 100] interval
    setProgress(newProgress);
  };

  // Event handler for mouse donw behavior
  const handleMouseDown = (e) => {
    calculateProgress(e);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseup", handleMouseUp);
  }

  // event handler for mouse over behavior
  const handleMouseOver = (e)=> {
    calculateProgress(e);
    setMouseOver(true)

}

// Event handler for mouse up behavior
const handleMouseUp = () => {
    document.removeEventListener("mouseover", handleMouseOver);
    document.removeEventListener("mouseup", handleMouseUp);
    setMouseOver(false)
  }


  return (
    <div className="w-full flex flex-col items-center  p-3">
      <div className="flex items-center space-x-4">
        <BsShuffle
          className="text-lg text-neutral-400 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          title="Enable Shuffle"
        />
        <BsSkipStartFill
          className="text-3xl text-neutral-500 e hover:scale-105 duration-300 cursor-not-allowed"
          title="Previuos"
        />
        <BsPlayCircleFill
          className="text-3xl text-white hover:text-white hover:scale-105 duration-300 cursor-pointer"
          title="Play"
        />
        <BsSkipEndFill
          className="text-3xl text-neutral-300 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          title="Next"
        />
        <BsRepeat
          className="text-lg text-neutral-400 hover:text-white hover:scale-105 duration-300 cursor-pointer"
          title="Enable repeat"
        />
      </div>

      {/* Player container */}
      <div
        ref={progressBarRef}
        onMouseDown={handleMouseDown}
        onMouseOver={()=> {setMouseOver(true); setIsOverProgBar(true)}}
        onMouseOut={()=> {setMouseOver(false); setIsOverProgBar(false)}}
        className="w-full h-1 rounded-lg bg-neutral-600 mt-3 relative cursor-pointer "
      >
        {/* Player progressBar */}
        <ProgressBar width={`${progress}%`} onMouseOver={isOverProgBar}/>
      </div>
    </div>
  );
}
