import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";


export default function ArtistCard({ name, imgUrl, isCollapse, onClick }) {
    const [isMouseOver, setMouseOver] = useState(false);
  
    function handleMouseOver() {
      setMouseOver(true);
    }
    function handleMouseOut() {
      setMouseOver(false);
    }
    return (
      <div
        className={`w-36 flex-shrink-0 ${
          isCollapse ? " md:w-56  md:p-3" : " md:w-40 md:p-1"
        }  md:hover:bg-neutral-800   rounded-lg duration-300 relative`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClick}
      >
        <img
          src={imgUrl}
          alt={`Album image`}
          className={`w-36 h-36 rounded-full ${
            isCollapse ? "md:w-52 md:h-52" : "md:w-40 md:h-40"
          } `}
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
            <BsPlayCircleFill className="text-4xl text-green-600 " />
          </div>
        )}
      </div>
    );
  }
  