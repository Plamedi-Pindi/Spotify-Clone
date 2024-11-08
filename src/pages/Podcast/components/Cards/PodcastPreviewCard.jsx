// Icons
import {
  BsPlusCircle,
  BsThreeDotsVertical,
  BsPlayCircleFill,
  BsVolumeMute,
} from "react-icons/bs";

// Assets
import playgift from "/playgif.gif";

// Hooks
import { useEffect, useState } from "react";

export default function PodcastPreviewCard({
  title,
  category,
  imgUrl,
  background,
}) {
  const [paragColor, setParagColor] = useState("white");

  // 
  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setParagColor((prevColor) => (prevColor === "white" ? "#888" : "white"));
    }, 800);

    return ()=> clearInterval(intervalId);

  }, []);
  // 

  return (
    <div
      className={` w-80 h-[27rem]  ${background} block mx-auto rounded-xl p-4 mb-8 mt-8`}
    >
      {/* Content title start*/}
      <div className="flex justify-between ">
        <div>
          <h2 className="text-lg font-bold"> {title} </h2>
          <p className="text-neutral-400 text-sm">
            {" "}
            {`Episode . ${category}`}{" "}
          </p>
        </div>

        <BsPlusCircle className="text-2xl ml-4 mt-3 shrink-0" />
      </div>

      {/* Content title end */}

      {/* images display start  */}
      <div className="flex items-center justify-center mt-6">
        {/* gif */}
        <img src={playgift} className="absolute w-[85%] h-32 grayscale" style={{ zIndex: -1 }} />
        {/* Episode image */}
        <img src={imgUrl} className="w-36 h-36 rounded-lg object-cover" />
      </div>
      {/* images display end */}

      {/*  */}
      <div className="mt-6">
        <div className="text-sm">
          <span className="font-bold inline pr-1">Oct 29, 25min .</span>

          <p className="inline text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            consequatur dolores, ipsum ratione nobis facilis repellat amet...
          </p>
        </div>
      </div>
      {/*  */}

      <div className="flex mt-4 items-center justify-between">

        <div className="flex items-center justify-center bg-black w-40 h-10 rounded-full">
          <BsVolumeMute className="text-2xl mr-2" />
          <p className="text-sm duration-500 ease-in" style={{ color: paragColor }}>
            Preview episode
          </p>
        </div>

        <div className="flex items-center">
          <BsThreeDotsVertical className="text-2xl mr-4" />
          <BsPlayCircleFill className="text-4xl text-white" />
        </div>
      </div>
    </div>
  );
}
