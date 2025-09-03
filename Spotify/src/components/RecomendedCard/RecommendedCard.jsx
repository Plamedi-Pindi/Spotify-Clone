// Logo
import blackLogo from "/blackLogo.png";

import { BsPlayCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function RecommendedCard({ name, imgList, background }) {
  const [isMouseOver, setMouseOver] = useState(false);

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={`w-[9.8rem]  h-56 lay930:h-60 lay930:w-44  text-wrap relative md:hover:bg-neutral-800 md:p-1 lay930:p-2 rounded-lg `}
    >
      {/* Images section */}
      <div
        className={`w-[9.8rem] h-[9.8rem]  text-black rounded-md text-sm overflow-hidden flex flex-col justify-between`}
        style={{ background: background }}
      >
        <div className="flex justify-between items-center p-1">
          <img src={blackLogo} className="w-4" />
          <p className="font-bold">Radio</p>
        </div>

        <div className="relative flex items-center justify-between">
          <img
            src={imgList[0]}
            className="w-14 h-14 shrink-0 -left-2 object-cover relative rounded-full"
          />
          <img
            src={imgList[1]}
            className="w-14 h-14 shrink-0 -right-2 object-cover relative rounded-full"
          />
          <div
            className={` absolute  w-20 h-20 rounded-full left-[2.4rem] flex items-center justify-center `}
            style={{ background: background }}
          >
            <img
              src={imgList[2]}
              className="rounded-full w-[4.5rem] h-[4.5rem] object-cover"
            />
          </div>
        </div>
        <h3 className="text-base font-bold p-1"> {name} </h3>
      </div>

      {/* content */}
      <div className="pt-3 pb-1 text-sm text-neutral-400  whitespace-normal text-wrap">
        <p translate="no">Lacren, We the Kingdom, Tasha Cob...</p>
      </div>

      {isMouseOver && (
        <div className="hidden md:block bg-black w-auto h-auto absolute right-3 bottom-20 rounded-full">
          <BsPlayCircleFill className="text-5xl   text-green-600 hover:scale-105 hover:text-green-500 duration-300" />
        </div>
      )}
    </div>
  );
}
