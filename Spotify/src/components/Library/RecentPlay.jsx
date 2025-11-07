
import playgif from "/play.gif";
import load from "../../assets/icons/load.svg";

export default function RecentPlay({ imgUrl, name, isCollapse, isPlaying, onClick }) {

  return (
    <div
      onClick={onClick}
      className={`flex relative bg-neutral-800 hover:bg-neutral-700  md:bg-neutral-800 rounded items-center w-48p md:w-[48%] ${isCollapse && ' lg:w-[24%]'}  mb-2 `}
    >
      <div className=" w-14 ">
        <img
          src={imgUrl}
          alt="Artist image"
          className={`w-14 h-14 md:h-12 md:w-12  object-cover ${!isCollapse && ' lay930:w-12 lay930:h-12'} rounded-s-md `}
        />
      </div>
      <h3 translate="no" className="text-base font-medium text-sm w-14 md:w-auto ml-3 cursor-pointer">
        {name}
      </h3>

      <img src={playgif} className={`w-3 h-4 object-cover absolute right-2 ${isPlaying ? "black" : "hidden"}`} />

    </div>
  );
}

export function Playing({ imgUrl, name, title, imgWidth, imgHeight, loading }) {
  return (
    <div
      className={`flex md:w-1/4 duration-300 rounded items-center w-1/2  `}
    >
      <div className={`${imgWidth} `}  >
        {loading ?
          (
            <img src={load} className="opacity-50" />
          ) : (
            <img src={imgUrl} alt="Artist image" className={`${imgWidth} ${imgHeight} rounded object-cover`} />
          )}
      </div>
      <div className={`${!loading && 'ml-2'}`}>
        {loading ?
          (
            <div className="animate-pulse">
              <div className=" w-24 cursor-pointer h-1.5 bg-gray-200/50 rounded-full mb-1" />
              <div className=" w-28 h-1.5 bg-gray-200/50 rounded-full" /> 
            </div>
          ) : (
            <>
              <h3 className="font-medium text-sm  ml-3 cursor-pointer md:hover:underline md:hover:text-white">{title}</h3>
              <p className="text-sm ml-3 text-neutral-400 font-medium md:hover:underline md:hover:text-white md:text-xs"> {name} </p>
            </>
          )}
      </div>
    </div>
  );
}
