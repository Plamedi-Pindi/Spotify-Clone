import { useState } from "react";

import { BsPlayCircleFill } from "react-icons/bs";


const MixesCard = ({ imgUrl, logo, border, title, titleBorder, imgRadiu, imgSize, box, autors }) => {
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
      className={` md:hover:bg-neutral-800 md:p-1 lay930:p-2 rounded-lg   relative shrink-0 ${box}`}
    >
      <Mixes
        border={border}
        imgUrl={imgUrl}
        logo={logo}
        title={title}
        titleBorder={titleBorder}
        imgRadiu={imgRadiu}
        imgSize={imgSize}
      />

      {/* Describing autores */}
      <div className={`pt-2 whitespace-normal text-wrap `} >
        <p translate="no" className=" text-sm text-neutral-400">
          {autors}
        </p>
      </div>

      {isMouseOver && (
        <div className="hidden md:block bg-black w-auto h-auto absolute right-3 bottom-20 rounded-full">
          <BsPlayCircleFill className="text-5xl   text-green-600 hover:scale-105 hover:text-green-500 duration-300" />
        </div>
      )}
    </div>
  );
};

export default MixesCard;

export const Mixes = ({ imgUrl, logo, border, title, titleBorder, imgRadiu, imgSize }) => {
  return (
    <div className={` relative w-full rounded-lg  ${imgSize}  ${border} `} >
      {/* img on back */}
      <img src={imgUrl} className={`absolute rounded-t-lg w-full h-full object-cover ${imgRadiu}`} />

      {/* Content */}
      <div className="bg-gradient-to-t from-black/60 to-black/10 w-full h-full absolute flex flex-col justify-between">
        {/* logo */}
        <img src={logo} className="w-3.5 h-3.5 object-cover mt-1.5 ml-1.5" />

        {/* Title */}
        <div className="flex items-end mb-2">
          <div
            style={{ background: titleBorder }}
            className="w-1.5 h-6 mr-2.5"
          ></div>
          <h4 className=" text-sm text-wrap whitespace-normal p-0 font-bold"> {title} </h4>
        </div>
      </div>
    </div>
  );
};
