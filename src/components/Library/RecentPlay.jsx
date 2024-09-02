export default function RecentPlay({ imgUrl, name, isCollapse }) {
  return (
    <div
      className={`flex bg-neutral-800 hover:bg-neutral-700 duration-300 md:bg-neutral-800 rounded items-center w-48p md:w-24p mb-2`}
    >
      <div className=" w-12 ">
        <img src={imgUrl} alt="Artist image" className="w-12 h-12 rounded-s-md" />
      </div>
      <h3 className="text-base font-medium text-sm w-4 ml-3 cursor-pointer">
        {" "}
        {name}{" "}
      </h3>
    </div>
  );
}

export function Playing({ imgUrl, name, title }) {
  return (
    <div
      className={`flex duration-300 rounded items-center  md:w-24p `}
    >
      <div className=" w-12 ">
        <img src={imgUrl} alt="Artist image" className="w-11 h-11 rounded" />
      </div>
      <div>
      <h3 className="font-medium text-sm  ml-3 cursor-pointer">{title}</h3>
      <p className="text-sm ml-3 text-neutral-400 font-light"> {name} </p>
      </div>
    </div>
  );
}
