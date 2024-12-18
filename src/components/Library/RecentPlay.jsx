import playgif from "/play.gif";



export default function RecentPlay({ imgUrl, name, isCollapse, isPlaying, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex relative bg-neutral-800 hover:bg-neutral-700 duration-300 md:bg-neutral-800 rounded items-center w-48p md:w-24p mb-2`}
    >
      <div className=" w-14 ">
        <img 
          src={imgUrl} 
          alt="Artist image" 
          className= {`w-14 h-14 object-cover ${isCollapse && ' md:w-16 md:h-16' } rounded-s-md `} 
        />
      </div>
      <h3 translate="no" className="text-base font-medium text-sm w-14 md:w-auto ml-3 cursor-pointer">
        {name}
      </h3>

      <img src={playgif} className= {`w-3 h-4 object-cover absolute right-2 ${isPlaying ? "black" : "hidden"}`}   />

    </div>
  );
}

export function Playing({ imgUrl, name, title, imgWidth, imgHeight }) {
  return (
    <div
      className={`flex md:w-1/4 duration-300 rounded items-center w-1/2  `}
    >
      <div className= {`${imgWidth} `}  >
        <img src={imgUrl} alt="Artist image" className= {`${imgWidth} ${imgHeight} rounded`}  />
      </div>
      <div>
      <h3 className="font-medium text-sm  ml-3 cursor-pointer md:hover:underline md:hover:text-white">{title}</h3>
      <p className="text-sm ml-3 text-neutral-400 font-medium md:hover:underline md:hover:text-white md:text-xs"> {name} </p>
      </div>
    </div>
  );
}
