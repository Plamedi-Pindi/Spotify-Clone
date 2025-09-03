import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";


export default function ArtistCard({ name, imgUrl, isCollapse, onClick, imgDimension, boxDimension }) {
    const [isMouseOver, setMouseOver] = useState(false);
  
    function handleMouseOver() {
      setMouseOver(true);
    }
    function handleMouseOut() {
      setMouseOver(false);
    }
    return (
      <div
        className={` ${boxDimension} flex-shrink-0 md:hover:bg-neutral-800 lay930:p-2 rounded-lg duration-300 relative`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClick}
      >
        <img
          src={imgUrl}
          className={` rounded-full object-cover ${imgDimension} `}
        />
        <p className="text-sm font-medium mt-3 text-white text-center md:text-start">
          {" "}
          {name}{" "}
        </p>
        <span className="hidden md:block text-sm font-nomal text-neutral-400 md:hover:underline">
          Artist
        </span>
  
        {isMouseOver && (
          <div className="hidden md:block bg-black w-auto h-auto absolute right-3 bottom-20 rounded-full">
            <BsPlayCircleFill className="text-5xl text-green-600 hover:scale-105 hover:text-green-500 duration-300" />
          </div>
        )}
      </div>
    );
  }
  