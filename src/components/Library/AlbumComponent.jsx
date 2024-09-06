import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Album({ imgUrl, title, name, isCollapse, onClick }) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <li
      className={`w-36 flex-shrink-0  ${
        isCollapse ? " md:w-56  md:p-2" : " md:w-40  md:p-2"
      }     md:hover:bg-neutral-800 md:p-1 rounded-lg duration-300 relative`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt={`Album image`}
        className={`w-36 h-36 ${
          isCollapse ? "md:w-52 md:h-52" : "md:w-40 md:h-40"
        } md:rounded-lg  `}
      />
      <p className="text-sm font-medium mt-3 text-white md:text-base">
        {" "}
        {title}{" "}
      </p>
      <span className="text-sm font-nomal text-neutral-400 md:hover:underline">
        Album . {name}{" "}
      </span>

      {isMouseOver && (
        <div className="hidden md:block bg-black w-auto h-auto absolute right-3 bottom-20 rounded-full">
          <BsPlayCircleFill className="text-5xl   text-green-600 hover:scale-105 hover:text-green-500 duration-300" />
        </div>
      )}
    </li>
  );
}
